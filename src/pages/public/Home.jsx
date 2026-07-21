import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Services from "../../components/sections/Services/Services";
import Process from "../../components/sections/Process/Process";
import Portfolio from "../../components/sections/Portfolio/Portfolio";
import Stats from "../../components/sections/Stats/Stats";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import Pricing from "../../components/sections/Pricing/Pricing";
import FAQ from "../../components/sections/FAQ/FAQ";
import Contact from "../../components/sections/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;