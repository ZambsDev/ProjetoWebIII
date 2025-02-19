import Image from "next/image";
import { useState } from "react";
import Street from "./Street";
import Park from "./Park";


export default function Modalities() {
    const [streetInfo, setStreetInfo] = useState(false);
    const [parkInfo, setParkInfo] = useState(false);


    return (
        <>
            <div className="flex flex-col items-center justify-center w-full px-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6">Modalidades</h1>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
                    {!streetInfo && !parkInfo && (
                        <>
                            <div
                                className="flex flex-col h-[22rem] sm:h-[25rem] border border-black rounded-lg p-4 w-full sm:w-[15rem] hover:cursor-pointer sm:hover:w-[20rem] sm:hover:w-[16rem] duration-150"
                                onClick={() => setStreetInfo(!streetInfo)}
                            >
                                <Image
                                    className="border-4 border-gray-300 rounded-lg shadow-lg m-auto"
                                    src="/streetImg.jpeg"
                                    alt="Modalidade Street"
                                    width={320}
                                    height={195}
                                />
                                <h1 className="text-lg font-semibold text-center mt-2">Street</h1>
                                <p className="w-full text-sm sm:text-xs md:text-sm text-gray-700 leading-relaxed break-words">
                                    O <strong>Street</strong> simula um ambiente urbano, onde os skatistas utilizam obstáculos como corrimãos, escadas e bordas para realizar manobras técnicas. O foco está na criatividade e na fluidez das transições entre os obstáculos.
                                </p>
                            </div>
                            <div
                                className="flex flex-col h-[22rem] sm:h-[25rem] border border-black rounded-lg p-4 w-full sm:w-[15rem] hover:cursor-pointer sm:hover:w-[20rem] sm:hover:w-[16rem] duration-150"
                                onClick={() => setParkInfo(!parkInfo)}
                            >
                                <Image
                                    className="border-4 border-gray-300 rounded-lg shadow-lg m-auto"
                                    src="/parkImg.jpeg"
                                    alt="Modalidade Park"
                                    width={300}
                                    height={160}
                                />
                                <h1 className="text-lg font-semibold text-center mt-2">Park</h1>
                                <p className="w-full text-sm sm:text-xs md:text-sm text-gray-700 leading-relaxed break-words">
                                    O <strong>Park</strong> acontece em pistas com transições arredondadas e bowls, permitindo manobras aéreas e combinações fluidas. Ela desafia os skatistas a realizarem movimentos técnicos e criativos enquanto exploram a estrutura da pista.
                                </p>
                            </div>
                        </>
                    )}
                    {streetInfo && (
                        <div className="w-full">
                            <Street>
                                <button
                                    onClick={() => setStreetInfo(!streetInfo)}
                                    className="bg-black text-white my-4 px-8 py-2 rounded-lg shadow-md hover:bg-gray-900 m-auto"
                                >
                                    Voltar
                                </button>
                            </Street>
                        </div>
                    )}
                    {parkInfo && (
                        <div className="w-full">
                            <Park>
                                <button
                                    onClick={() => setParkInfo(!parkInfo)}
                                    className="bg-black text-white my-4 px-8 py-2 rounded-lg shadow-md hover:bg-gray-900 m-auto"
                                >
                                    Voltar
                                </button>
                            </Park>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}