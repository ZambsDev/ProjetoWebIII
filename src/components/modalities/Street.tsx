import { ReactNode } from "react";

interface StreetProps {
    children: ReactNode;
}

export default function Street({children}: StreetProps) {
    return (
        <div className="flex flex-col w-full items-center justify-center px-4 sm:px-6 sm:py-4 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-black pb-5">Street</h2>
            <div className="w-full text-sm sm:text-base md:text-lg text-black break-words leading-relaxed">
                    <p>
                        O street simula um ambiente urbano, onde os skatistas devem usar obstáculos comuns da cidade, como corrimãos, escadas, bancos, bordas e outros elementos para realizar suas manobras.
                        Os skatistas têm um tempo determinado para realizar suas voltas, e as manobras executadas são julgadas com base em critérios como dificuldade, estilo e fluidez.
                    </p>
                    <h3 className="text-lg sm:text-xl font-medium py-4 text-black">Regras:</h3>
                    <ul className="flex flex-col gap-3 pl-4">
                        <li><strong>Temporada de tentativas:</strong> Durante a competição, cada skatista tem direito a duas rodadas de 45 segundos (voltas), onde ele tenta realizar o maior número possível de manobras.</li>
                        <li><strong>Número de tentativas:</strong> Após as duas rodadas, a melhor manobra de cada skatista é escolhida pelos juízes para definir sua pontuação.</li>
                        <li><strong>Avaliação:</strong> As pontuações são dadas de acordo com o nível de dificuldade das manobras, a execução (técnica), a originalidade e a fluidez da volta.</li>
                        <li><strong>Judging:</strong> São usados juízes para avaliar o desempenho do atleta. As pontuações são somadas ao longo das tentativas para formar o resultado final.</li>
                    </ul>
                    <br />
                    <h3 className="text-lg sm:text-xl font-medium py-4 text-black">Objetivos:</h3>
                    <p>
                        O objetivo do street é realizar manobras bem executadas em obstáculos urbanos, sendo criativo e eficiente. Os skatistas devem mostrar domínio técnico e se destacar pela originalidade das manobras e pela maneira como conectam os obstáculos.
                    </p>

                    <h4 className="font-semibold text-black mt-4">Critérios de Avaliação</h4>
                    <ul className="list-disc pl-5 text-black">
                        <li><strong>Dificuldade:</strong> O grau de complexidade das manobras realizadas.</li>
                        <li><strong>Execução:</strong> A perfeição com que as manobras são realizadas.</li>
                        <li><strong>Fluidez:</strong> A maneira como as manobras são conectadas.</li>
                        <li><strong>Criatividade:</strong> A originalidade das manobras e como elas são aplicadas nos obstáculos.</li>
                    </ul>
                </div>
                {children}
        </div>
    );
}
