import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 sm:py-3 mt-5 text-xs sm:text-sm md:text-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Chris & Greg Co. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-2 sm:space-x-3 mt-1 sm:mt-2">
          <span>Made By: ZambsDev & DanteInferno</span>
          <Link href="/">
            <span className="hover:underline cursor-pointer text-orange-400">About Us</span>
          </Link>
        </div>
      </div>
    </footer>

  );
};