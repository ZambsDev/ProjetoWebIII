import Head from "next/head";
import Image from "next/image";

export default function Equipament() {
  return (
    <>
      <Head>
        <title>Equipamentos | Esportes Olímpicos</title>
      </Head>
      <main className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white w-full gap-10 px-4 sm:px-6 lg:px-16 xl:px-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-10 text-center text-green-500 mt-10">
          Equipamentos
        </h1>

        <div className="w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-10 mb-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <p className="w-full text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify">
              Para competir em alto nível e com segurança, é essencial ter os
              equipamentos adequados. Aqui está a lista completa:
              <ol className="flex flex-col mt-10 gap-4 pl-5 list-decimal">
                <li>
                  <strong className="text-green-500">Skate Completo</strong> – Um
                  skate bem montado, com peças de qualidade, adequado para a
                  modalidade escolhida (street, vertical ou mega rampa). O shape
                  deve estar em boas condições, sem rachaduras ou desgaste
                  excessivo.
                </li>
                <li>
                  <strong className="text-green-500">Capacete</strong> –
                  Fundamental para a proteção da cabeça, sendo obrigatório em
                  modalidades mais radicais como vertical, bowl e mega rampa. Em
                  alguns eventos de street, pode ser opcional, mas é sempre
                  recomendado.
                </li>
                <li>
                  <strong className="text-green-500">
                    Joelheiras e Cotoveleiras
                  </strong>{" "}
                  – Essenciais para proteger as articulações em quedas,
                  principalmente no vertical e mega rampa, onde as quedas
                  costumam ser mais intensas.
                </li>
                <li>
                  <strong className="text-green-500">Munhequeiras</strong> –
                  Ajudam a evitar torções e fraturas nos punhos, comuns em
                  quedas onde o skatista usa as mãos para se proteger do
                  impacto.
                </li>
                <li>
                  <strong className="text-green-500">Tênis de Skate</strong> –
                  Deve ter solado de borracha aderente, amortecimento adequado e
                  resistência para suportar o atrito com o grip tape e impactos
                  das manobras.
                </li>
                <li>
                  <strong className="text-green-500">
                    Parafusos e Chave de Skate (T-Tool)
                  </strong>{" "}
                  – Para ajustes rápidos antes ou durante a competição, como
                  apertar ou soltar trucks, trocar rodas ou parafusos do shape.
                </li>
              </ol>
            </p>
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-10 text-center text-green-500 mt-10">
          Estrutura do Skate
        </h1>

        <div className="w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-10 mb-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <p className="w-full text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify">
              O skate é formado por várias peças que influenciam no desempenho e
              estilo de cada skatista:
              <ol className="flex flex-col mt-10 gap-4 pl-5">
                <li>
                  🟩 <strong>Shape</strong> – A prancha de madeira (normalmente
                  maple) onde o skatista pisa.
                </li>
                <li>
                  🟩 <strong>Grip Tape</strong> – Lixa colada no shape para
                  aderência.
                </li>
                <li>
                  🟩 <strong>Trucks</strong> – Eixo de metal que conecta o shape
                  às rodas e permite virar.
                </li>
                <li>
                  🟩 <strong>Rodas</strong> – Feitas de poliuretano, variam em
                  tamanho e dureza conforme a modalidade.
                </li>
                <li>
                  🟩 <strong>Rolamentos</strong> – Peças pequenas dentro das
                  rodas que determinam a rotação e velocidade.
                </li>
                <li>
                  🟩 <strong>Parafusos de Base</strong> – Fixam os trucks no
                  shape.
                </li>
                <li>
                  🟩 <strong>Amortecedores (Bushings)</strong> – Borrachas no
                  truck que influenciam na estabilidade e nas curvas.
                </li>
              </ol>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
