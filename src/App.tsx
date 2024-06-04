import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <About/>
        <Projects />
        <Skills/>
        <Contact/>
      </main>
    </>
  );
};

export default App;
