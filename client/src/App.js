import "./App.css";
import { useRef, useState } from "react";
import Navbar from "./NewComponents/Navbar";
import Welcome from "./NewComponents/Welcome";
import OurYachts from "./Components/OurYachts";
import Gallery from "./Components/Gallery";
import OurServices from "./Components/OurServices";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import DirectionProvider, {
  DIRECTIONS,
} from "react-with-direction/dist/DirectionProvider";

function App() {
  const [language, setLanguage] = useState("EN");
  const References = {
    AboutUsRef: useRef(null),
    OurYachtsRef: useRef(null),
    GalleryRef: useRef(null),
    OurServicesRef: useRef(null),
    AdditionalServicesRef: useRef(null),
    ContactRef: useRef(null),
  };

  function executeScroll(key) {
    key.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="App">
      <DirectionProvider
        direction={language === "EN" ? DIRECTIONS.LTR : DIRECTIONS.RTL}
      >
        <div>
          <div ref={References.AboutUsRef}>
            <Navbar
              executeScroll={executeScroll}
              References={References}
              setLanguage={setLanguage}
              language={language}
            />
            <Welcome
              executeScroll={executeScroll}
              References={References}
              setLanguage={setLanguage}
              language={language}
            />
          </div>

          <div ref={References.OurYachtsRef}>
            <OurYachts language={language} />
          </div>
          <div ref={References.GalleryRef}>
            <Gallery language={language} />
          </div>
          <div ref={References.OurServicesRef}>
            <OurServices language={language} />
          </div>
          <div ref={References.AdditionalServicesRef}>
            <OurServices language={language} />
          </div>
          <div ref={References.ContactRef}>
            <Contact language={language} />
          </div>
          <Footer language={language} />
        </div>
      </DirectionProvider>
    </div>
  );
}

export default App;
