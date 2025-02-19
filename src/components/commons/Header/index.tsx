import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { MenuMobile } from "./Menu";
import Image from "next/image";

export const Header = () => {
  const router = useRouter();
  const isLoginPage = router.pathname === '/LoginPage';
  const isUserPage = router.pathname === '/UserPage';
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, [])

  return (
    <header className="bg-gray-900 shadow-md fixed w-full top-0 left-0 z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <div className="flex flex-grid items-center space-x-4">
          {/* Logo */}
          <Image
            src="/olympicImg.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <Link href="/" className="text-2xl font-bold text-white cursor-pointer hover:text-orange-400 transition duration-300">
            Esportes Olímpicos
          </Link>
        </div>
        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/">
            <p className="text-white hover:text-orange-400 transition duration-300">Sobre o Esporte</p>
          </Link>
          <Link href="/competitions">
            <p className="text-white hover:text-orange-400 transition duration-300">Principais Competições</p>
          </Link>
        </nav>

        {/* Botão do Menu Mobile */}
        <button
          onClick={openMenu}
          className="md:hidden text-3xl text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <MenuMobile isUserPage={isUserPage} isLoginPage={isLoginPage} isVisible={menuOpen} onClose={closeMenu} />
      )}
    </header>

  );
};
