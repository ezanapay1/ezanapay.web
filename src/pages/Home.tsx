import React from "react";
import { About, Features, Hero } from "../components";
import { MainLayout } from "../layouts";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Features />
    </MainLayout>
  );
};

export default HomePage;
