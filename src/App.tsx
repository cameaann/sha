import Header from "./components/Header";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Projects />
      </main>
    </>
  );
};

export default App;
