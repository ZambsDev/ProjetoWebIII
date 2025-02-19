import Modalities from "@/components/modalities";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | Esportes Olímpicos</title>
            </Head>
            <main className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white w-full gap-10 px-4 sm:px-6 lg:px-16 xl:px-32">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-10 text-center text-gray-800 mt-10"> Skate </h1>

                <div className="w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-10 mb-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 pb-6"> O que é o Skate?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
                        <p className="w-full text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed break-words">
                            O skate é um esporte radical e um meio de locomoção que surgiu na Califórnia, nos Estados Unidos, nos anos 1950, quando surfistas buscavam uma forma de "surfar" no asfalto. Com o tempo, o skate evoluiu, tornando-se uma prática esportiva profissional, uma cultura urbana e até um estilo de vida para muitos.
                            O equipamento básico do skate consiste em uma prancha (shape), quatro rodas e dois eixos metálicos chamados trucks.
                            Existem diversas modalidades de skate, cada uma com características próprias, Como <strong>Street</strong>, os skatistas utilizam obstáculos urbanos, como corrimãos, escadas e bordas, para executar manobras técnicas. Já no <strong>Park</strong>, as pistas possuem transições arredondadas e bowls, permitindo manobras aéreas e combinações fluidas.
                            O skate conquistou espaço no cenário esportivo mundial, tornando-se modalidade olímpica nos Jogos de Tóquio 2020. Além do aspecto esportivo, o skate também influencia a moda, a música e a arte urbana, sendo um símbolo de liberdade e criatividade.
                        </p>
                        <div className="w-full sm:w-1/3">
                            <Image
                                className="mx-auto sm:ml-4 border-4 border-gray-300 rounded-lg shadow-lg"
                                src="/kelvinImg.jpg"
                                width={666.7}
                                height={444.7}
                                alt="Picture of Kelvin Hoefler"
                            />
                            <p className="pt-2 text-xs sm:text-sm font-semibold pl-5 text-center text-gray-600">Imagem de Kelvin Hoefler nas Olímpiadas de 2020</p>
                        </div>
                    </div>
                </div>
                <Modalities />
            </main>
        </>
    );
}
