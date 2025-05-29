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
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Location />
          <Values />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
