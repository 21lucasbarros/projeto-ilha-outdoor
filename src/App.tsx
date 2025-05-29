import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Services from "./components/Services";
import Values from "./components/Values";

export default function App() {
  return (
    <>
      <div className="font-sans">
        <Header />
        <Hero />
        <About />
        <Services />
        <Location />
        <Values />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
