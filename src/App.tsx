import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons{
      id
      title
    }
  }
`
interface Lesson {
  id: string;
  title: string;
}

function App() {  
  const {data} = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY)

  return (
    <ul>
      {data?.lessons.map(lesson => { // O ? indica para ele olhar para a lesson, se o data estiver vazio
        return <li>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
