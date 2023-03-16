import React from "react";
import { Footer, NavBar } from "../components";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 overflow-y-auto">
        {children}
         <Footer data={[
          {
            title: "EzanaPay",
            links: [
              { label: "Home", link: "/" },
              { label: "About", link: "/about" },
              { label: "Contact", link: "/contact" },
            ],
          }
         ]} />
      </main>
    </div>
  );
};

export default MainLayout;
