import { ReactNode } from "react";

interface StreetProps {
    children: ReactNode;
}

export default function Park({ children }: StreetProps) {
    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-center bg-white shadow-lg rounded-lg px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-black pb-5">Street</h2>
            <div className="w-full text-sm sm:text-base md:text-lg text-black break-words leading-relaxed">
                <p>
                    O skate park é realizado em pistas com transições arredondadas e bowls, permitindo aos skatistas ganhar velocidade e realizar manobras aéreas. Ao contrário do street, onde os obstáculos são urbanos, no park, a pista tem a função principal de permitir a execução de saltos e manobras no ar. A pista tem uma variedade de formas e transições que permitem ao skatista criar combinações de manobras.
                </p>
                <h3 className="text-lg sm:text-xl font-medium py-4 text-black">Regras:</h3>
                <ul className="flex flex-col gap-3 pl-4">
                    <li><strong>Tempo:</strong> Cada skatista tem direito a duas rodadas de 45 segundos. Durante essas rodadas, eles tentam realizar uma série de manobras, tanto no solo quanto no ar.</li>
                    <li><strong>Avaliação:</strong> A pontuação é baseada na habilidade de realizar manobras complexas e na fluidez com que o skatista se desloca pela pista. A performance em transições e manobras aéreas também é muito importante.</li>
                    <li><strong>Dificuldade das Manobras:</strong> A combinação de manobras no ar e nas transições arredondadas da pista é essencial. Quanto mais difícil for a manobra e a transição entre as partes da pista, maior a pontuação.</li>
                    <li><strong>Equilíbrio entre manobras aéreas e transições:</strong> O skatista é avaliado não só pela altura e complexidade das manobras aéreas, mas também pelo controle durante as transições.</li>
                </ul>
                <br />
                <h3 className="text-lg sm:text-xl font-medium py-4 text-black">Objetivos:</h3>
                <p>
                    No park, o objetivo é realizar o maior número possível de manobras complexas enquanto se movimenta pela pista, incluindo manobras aéreas. Os skatistas devem mostrar grande controle, criatividade e técnica ao saltar e transitar pelas paredes da pista.
                </p>

                <h4 className="font-semibold text-black mt-4">Critérios de Avaliação</h4>
                <ul className="list-disc pl-5 text-black">
                    <li><strong>Dificuldade das manobras:</strong> Manobras no ar e transições complexas são mais valorizadas.</li>
                    <li><strong>Execução:</strong> A técnica com que as manobras são feitas, como o controle nas transições e a altura dos saltos.</li>
                    <li><strong>Criatividade e fluidez:</strong>A forma como o skatista combina as manobras e se desloca pela pista, conectando-as de maneira original e fluída.</li>

                </ul>
            </div>
            {children}
        </div>
    );
}
