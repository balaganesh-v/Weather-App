import Hero from "./sections/Hero";
import About from "./about/page";
import Features from "./features/page";
import Contact from "./contact/page";
import Footer from "./components/Footer";
import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto m-0 p-0 text-center">
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default Page;
