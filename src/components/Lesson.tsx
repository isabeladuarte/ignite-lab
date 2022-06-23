import { CheckCircle, Lock } from 'phosphor-react'
import {isPast, format} from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt) // Função isPast verifica se a data já passou
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    return (
        <a href="#">
            <span className="text-brand-gray-300">
                {availableDateFormatted}
            </span>

            <div className="rounded border border-brand-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className="text-sm text-brand-blue-500 flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-brand-orange-500 flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}

                    <span className="text-xs rounded py=[0.125rem] px-2 text-white border border-brand-green-300">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className="text-brand-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}