import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="app">
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}

export default App;