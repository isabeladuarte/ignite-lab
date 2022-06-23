import { CheckCircle } from 'phosphor-react'

export function Lesson() {
    return (
        <a href="#">
            <span className="text-brand-gray-300">
                Terça • 22 de junho • 19h00
            </span>

            <div className="rounded border border-brand-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    <span className="text-sm text-brand-blue-500 flex items-center gap-2">
                        <CheckCircle size={20} />
                        Conteúdo liberado
                    </span>
                    <span className="text-xs rounded py=[0.125rem] px-2 text-white border border-brand-green-300">
                        AO VIVO
                    </span>
                </header>

                <strong className="text-brand-gray-200 mt-5 block">
                    Abertura do evento Ignite lab
                </strong>
            </div>
        </a>
    )
}