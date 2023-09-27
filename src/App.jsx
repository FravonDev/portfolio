import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import ScrollUp from "./components/Scrollup/ScrollUp";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Project />
      </main>
      <ScrollUp />
    </>
  );
}

export default App;
