import React from "react";
import { Footer, NavBar } from "../components";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <NavBar />
        <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
