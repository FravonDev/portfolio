import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
