import Head from "next/head";
import Image from "next/image";

export default function Athltetes() {
  return (
    <>
      <Head>
        <title>Atletas | Esportes Olímpicos</title>
      </Head>
      <main className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white w-full gap-10 px-4 sm:px-6 lg:px-16 xl:px-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-10 text-center text-gray-800 mt-10">
          Principais Atletas
        </h1>

        {/* Tony Hawk */}
        <div className="w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-10 mb-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Image
              src="/Athletes/tonyHawk.jpg"
              alt="Tony Hawk"
              width={200}
              height={200}
              className="rounded-lg border-4 border-black max-w-full h-auto"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-semibold">Tony Hawk</h1>
              <h2 className="pl-1 text-base">
                Nascimento: 12 de maio de 1968 (56 anos) Califórnia, Estados Unidos
              </h2>
              <p className="w-full text-justify border-t border-black pt-2">
                <strong>Anthony Frank Hawk</strong> é um skatista norte-americano de
                base goofy de grande destaque na modalidade vertical do esporte radical,
                um dos fundadores da marca Birdhouse Skateboards e o primeiro atleta a
                realizar a manobra "900". Também é muito conhecido por dar nome a franquia
                de jogos digitais Tony Hawk's, originalmente desenvolvida pela Neversoft.
                Ele foi nomeado o melhor skatista vert por 12 anos consecutivos, de 1984 a 1996,
                ganhando 73 títulos.
              </p>
            </div>
          </div>
        </div>

        {/* Bob Burnquist */}
        <div className="w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-10 mb-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Image
              src="/Athletes/bobBurnquist.jpg"
              alt="Bob Burnquist"
              width={200}
              height={200}
              className="rounded-lg border-4 border-black max-w-full h-auto"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-semibold">Bob Burnquist</h1>
              <h2 className="pl-1 text-base">
                Nascimento: 10 de outubro de 1976 (48 anos) Rio de Janeiro, Brasil
              </h2>
              <p className="w-full text-justify border-t border-black pt-2">
                <strong>Robert Dean Silva Burnquist</strong>, mais conhecido como Bob Burnquist,
                é um skatista brasilo-estadunidense. Bob é o maior medalhista da história do X Games,
                com um total de 30 medalhas. Bob é considerado por muitos o maior nome da História do
                Skate Brasileiro. Bob Burnquist é um ícone do skate, com 30 medalhas nos X Games, pioneiro
                no Fakie 900 e na Mega Rampa.
              </p>
            </div>
          </div>
        </div>

        {/* Rodney Mullen */}
        <div className="w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-10 mb-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Image
              src="/Athletes/rodneyMullen.jpg"
              alt="Rodney Mullen"
              width={200}
              height={200}
              className="rounded-lg border-4 border-black max-w-full h-auto"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-semibold">Rodney Mullen</h1>
              <h2 className="pl-1 text-base">
                Nascimento: 17 de agosto de 1966 (idade 58 anos), Flórida, EUA
              </h2>
              <p className="w-full text-justify border-t border-black pt-2">
                <strong>John Rodney Mullen, mais conhecido como Rodney Mullen</strong>, é um skatista
                americano. É considerado por muitos o melhor do mundo na modalidade street além de ser um
                dos mais influentes na história do esporte e terceiro mais rico do mesmo. Foi inventor de
                icônicas manobras como Kickflip ou apenas Flip, 360 Flip, Heelflip, Casper Flip, Laser Flip
                e outros. É creditado como o inventor de mais de 39 manobras diferentes, o Kickflip
                acidentalmente em 1983, o Heelflip, o 360 Flip e Impossible.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
