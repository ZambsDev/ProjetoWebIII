import Link from "next/link";

interface MenuMobileProps {
    isLoginPage: boolean;
    isUserPage: boolean;
    isVisible: boolean;
    onClose: () => void;
}


export const MenuMobile = ({ isLoginPage, isUserPage, isVisible, onClose }: MenuMobileProps) => {
    return (
        <div className={`${isVisible ? 'flex' : 'invisible'} fixed inset-0 w-full h-full backdrop-blur-sm`}>
            <nav className="md:hidden text-2xl bg-gray-800 shadow-md absolute w-full pt-[18rem] py-4 space-y-2 text-center">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-3xl text-white focus:outline-none"
                    aria-label="Fechar menu"
                >
                    ✖
                </button>
                <Link href="/" onClick={onClose}>
                    <p className="block text-white hover:text-orange-400 transition duration-300 pb-3">Home</p>
                </Link>
                <Link href="/About" onClick={onClose}>
                    <p className="block text-white hover:text-orange-400 transition duration-300 pb-3">Sobre o Esporte</p>
                </Link>
                <Link href="/Competitions" onClick={onClose}>
                    <p className="block text-white hover:text-orange-400 transition duration-300 pb-3">Principais Competições</p>
                </Link>
            </nav>
        </div>

    )
};