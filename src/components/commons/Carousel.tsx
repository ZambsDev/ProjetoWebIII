import { useState } from "react";

export function Carousel() {
    const slides = [
        '/favicon.ico',
        '/mailbox.svg',
        '/next.svg'

    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full max-w-2xl sm:max-w-4xl mx-auto my-8">
            <img src={slides[current]} alt={`Slide ${current + 1}`} className="w-full h-40 sm:h-60 md:h-80 rounded-xl" />
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gray-700 text-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-900"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gray-700 text-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-900"
            >
                &#8594;
            </button>
            <div className="flex justify-center space-x-1 sm:space-x-2 mt-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${current === index ? "bg-gray-800" : "bg-gray-400"}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}