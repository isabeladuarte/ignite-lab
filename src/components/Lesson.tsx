import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom';
import { isPast, format } from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR'
import classNames from 'classnames';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{ slug: string }>()

    const isLessonAvailable = isPast(props.availableAt) // Função isPast verifica se a data já passou
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-brand-gray-300">
                {availableDateFormatted}
            </span>

            <div className={classNames(
                'rounded border border-brand-gray-500 p-4 mt-2 group-hover:border-brand-green-500',{
                'bg-brand-green-500': isActiveLesson,
            })}
            >
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={classNames('text-sm text-brand-blue-500 flex items-center gap-2', {
                            'text-white': isActiveLesson,
                            'text-brand-blue-500': !isActiveLesson,
                        })}>
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-brand-orange-500 flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}

                    <span className={classNames('text-xs rounded py=[0.125rem] px-2 text-white border border-brand-green-300 font-bold', {
                        'border-white': isActiveLesson, // Caso seja a aula ativa
                        'border-brand-green-300': !isActiveLesson // Caso não seja a aula ativa
                    })}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={classNames('mt-5 block',{
                    'text-white': isActiveLesson,
                    'text-brand-gray-200': !isActiveLesson
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}