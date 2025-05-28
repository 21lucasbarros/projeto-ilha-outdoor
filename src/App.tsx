import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Location />
        </main>
      </div>
    </>
  );
}
