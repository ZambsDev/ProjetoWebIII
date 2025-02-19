import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";


interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-grow pt-20 items-center justify-center px-4 sm:px-6 lg:px-8">{children}</main>
          <Footer />
        </div>
      );
};