import Hero from "./sections/hero";
import About from "./sections/about";
import Services from "./sections/services";
import Projects from "./sections/projects";
import Faqs from "./sections/faqs";
import Contact from "./sections/contacts";

function App() {
  return (
    <div className="relative bg-primary overflow-hidden scroll-smooth">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[100px] md:-top-[400px] left-2/3 -translate-x-1/2 w-[400px] h-[400px] md:w-[900px] md:h-[900px] rounded-full bg-secondary blur-[160px]" />
        <div className="absolute top-[150vh] md:top-[120vh] left-1/2 -translate-x-1/2 w-[300px] h-[900px] md:w-[700px] md:h-[700px] rounded-full bg-secondary/70 blur-[160px]" />
        <div className="absolute top-[400vh] md:top-[300vh] -left-40 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-secondary/60 blur-[160px]" />
        <div className=" absolute top-[500vh] md:top-[350vh] lg:top-[380vh] -right-40 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-secondary/60 blur-[160px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Faqs />
        <Contact />
      </div>
    </div>
  );
}
export default App;
