import React from "react";
import { About, CallToAction, Features, Hero } from "../components";
import { MainLayout } from "../layouts";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Features />
      <CallToAction />
    </MainLayout>
  );
};

export default HomePage;
