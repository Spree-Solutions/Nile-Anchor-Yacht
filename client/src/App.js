import "./App.css";
import { useRef } from "react";
import Welcome from "./Components/Welcome";
import OurYachts from "./Components/OurYachts";
import Gallery from "./Components/Gallery";
import OurServices from "./Components/OurServices";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const References = {
    WelceomeRef: useRef(null),
    OurYachtsRef: useRef(null),
    GalleryRef: useRef(null),
    OurServicesRef: useRef(null),
    ContactRef: useRef(null),
  };

  function executeScroll(key) {
    key.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="App">
      <div ref={References.WelceomeRef}>
        <Welcome executeScroll={executeScroll} References={References} />
      </div>

      <div ref={References.OurYachtsRef}>
        <OurYachts />
      </div>
      <div ref={References.GalleryRef}>
        <Gallery />
      </div>
      <div ref={References.OurServicesRef}>
        <OurServices />
      </div>
      <div ref={References.ContactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
