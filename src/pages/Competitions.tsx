import Head from "next/head";
import Image from "next/image";

export default function Competitions() {
  return (
    <>
      <Head>
        <title>Principais Competições | Esportes Olímpicos</title>
      </Head>
      <main className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white w-full gap-10 px-4 sm:px-6 lg:px-16 xl:px-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-10 text-center text-gray-800 mt-10">
          Principais Competições
        </h1>

        {/* Introdução */}
        <div className="w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-10 mb-10">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 pb-6">
            Competições
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
            <p className="w-full text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed break-words">
              O skate é um esporte que se destaca pela criatividade, estilo e técnica de seus praticantes. Ao longo dos
              anos, surgiram diversas competições que ajudaram a popularizar a modalidade e elevaram o nível dos atletas. Essas
              competições abrangem diferentes categorias, como street, park e vert, além de eventos voltados para skatistas
              profissionais e amadores. A seguir, apresentamos as principais competições de skate do mundo, detalhando suas
              características e importância dentro do cenário do esporte.
            </p>
          </div>
        </div>

        {/* Competições Internacionais */}
        <div className="w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-10 mb-10">
          <h1 className="text-2xl font-semibold mb-10 text-center text-orange-400">
            Competições Internacionais
          </h1>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* X Games */}
            <div className="flex flex-col gap-4 w-full sm:w-80 border border-black rounded-md p-5">
              <h1 className="text-xl text-center font-semibold text-orange-400">X Games</h1>
              <Image
                src="/competitionsLogos/X-games-logo.png"
                alt="Logo X Games"
                width={200}
                height={200}
                className="rounded-lg border-4 border-black mx-auto max-w-full h-auto"
              />
              <p className="w-full text-sm sm:text-sm md:text-sm leading-relaxed break-words">
                Criado em 1995 pela ESPN, o <strong className="text-orange-400">X Games</strong> é um dos eventos mais icônicos do
                skate e dos esportes radicais. Realizado anualmente em edições de verão e inverno, o evento reúne os melhores
                skatistas do mundo para disputas nas categorias street, park e vert. Além das competições tradicionais, o X Games
                também é conhecido por suas manobras inovadoras e por desafiar os limites do esporte.
                <ul className="flex flex-col list-disc pl-5 mt-4 gap-3">
                  <li>Medalhas de ouro, prata e bronze são concedidas aos três primeiros colocados.</li>
                  <li>
                    Conta com skatistas de elite, como <strong className="text-orange-400">Tony Hawk</strong>,{" "}
                    <strong className="text-orange-400">Nyjah Huston</strong> e{" "}
                    <strong className="text-orange-400">Leticia Bufoni</strong>.
                  </li>
                  <li>É transmitido mundialmente, ajudando a popularizar o skate.</li>
                </ul>
              </p>
            </div>

            {/* Street League Skateboarding */}
            <div className="flex flex-col gap-4 w-full sm:w-80 border border-black rounded-md p-5">
              <h1 className="text-xl text-center font-semibold text-orange-400">Street League Skateboarding</h1>
              <Image
                src="/competitionsLogos/sls-logo.png"
                alt="Logo SLS"
                width={200}
                height={200}
                className="rounded-lg border-4 border-black mx-auto max-w-full h-auto"
              />
              <p className="w-full text-sm sm:text-sm md:text-sm leading-relaxed break-words">
                Fundada em 2010 por Rob Dyrdek, a <strong className="text-orange-400">Street League Skateboarding (SLS)</strong> é a
                principal liga mundial de skate street. Diferente de outros campeonatos, a SLS utiliza um formato único de
                pontuação, onde os skatistas têm diversas tentativas para executar manobras e somar pontos.
                <ul className="flex flex-col list-disc pl-5 mt-4 gap-3">
                  <li>É considerada a competição de skate street mais prestigiada do mundo.</li>
                  <li>Realiza etapas globais, com a final acontecendo no Super Crown World Championship.</li>
                  <li>Oferece prêmios milionários e é patrocinada por grandes marcas.</li>
                </ul>
              </p>
            </div>

            {/* Vans Park Series */}
            <div className="flex flex-col gap-4 w-full sm:w-80 border border-black rounded-md p-5">
              <h1 className="text-xl text-center font-semibold text-orange-400">Vans Park Series</h1>
              <Image
                src="/competitionsLogos/vans-park-series-logo.png"
                alt="Logo Vans Park Series"
                width={200}
                height={200}
                className="rounded-lg border-4 border-black mx-auto max-w-full h-auto"
              />
              <p className="w-full text-sm sm:text-sm md:text-sm leading-relaxed break-words">
                Focado exclusivamente na categoria park, o <strong className="text-orange-400">Vans Park Series</strong> foi criado
                para promover o skate de transição e os bowls ao redor do mundo. O evento se tornou um dos mais respeitados do
                setor e conta com circuitos em diferentes países.
                <ul className="flex flex-col list-disc pl-5 mt-4 gap-3">
                  <li>É a principal competição de skate park do mundo.</li>
                  <li>Conta com uma divisão para skatistas amadores e profissionais.</li>
                  <li>É patrocinado pela Vans, uma das marcas mais tradicionais do skate.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
