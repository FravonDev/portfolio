import "./Home.css";
import Social from "./Social";
import Content from "./Content";
import ScrollDown from "./ScrollDown";
function Home() {
  return (
    <div className="home section">
      <div className="home_container container">
        <div className="home_content">
          <Social />

          <div className="home_image"></div>

          <Content />
        </div>
        <div className="home_scroll">
          <ScrollDown />
        </div>
      </div>
    </div>
  );
}

export default Home;
