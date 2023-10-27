import "./App.css";
import { useRef, useState } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import GatheringsPage from "./Pages/GatheringsPage";
import WeddingPage from "./Pages/WeddingPage";
import BusinessPage from "./Pages/BusinessPage";

import DirectionProvider, {
  DIRECTIONS,
} from "react-with-direction/dist/DirectionProvider";
import ScrollTop from "./Components/ScrollTop";
import ContactUs from "./Pages/ContactUs";
import Navbar from "./NewComponents/HomePage/Navbar";
import Footer from "./Components/Footer";
import SideSlider from "./NewComponents/SideSlider";
import { DataProvider } from "./RemoteContext";
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
    console.log("key", key);
    key.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="App">
      <DirectionProvider
        direction={language === "EN" ? DIRECTIONS.LTR : DIRECTIONS.RTL}
      >
        <DataProvider>
          <div>
            <BrowserRouter>
              <ScrollTop />
              <Navbar
                executeScroll={executeScroll}
                References={References}
                setLanguage={setLanguage}
                language={language}
              />
              <SideSlider />
              <Switch>
                <Route exact path="/">
                  <HomePage
                    References={References}
                    executeScroll={executeScroll}
                    language={language}
                    setLanguage={setLanguage}
                    showError={showError}
                    setShowError={setShowError}
                    setShowSuccess={setShowSuccess}
                    showSuccess={showSuccess}
                  />
                </Route>
                <Route exact path="/About">
                  <AboutPage
                    References={References}
                    executeScroll={executeScroll}
                    language={language}
                    setLanguage={setLanguage}
                  />
                </Route>
                <Route exact path="/Wedding">
                  {" "}
                  <WeddingPage
                    References={References}
                    executeScroll={executeScroll}
                    language={language}
                    setLanguage={setLanguage}
                  />
                </Route>
                <Route exact path="/Business">
                  <BusinessPage
                    References={References}
                    executeScroll={executeScroll}
                    language={language}
                    setLanguage={setLanguage}
                  />
                </Route>
                <Route exact path="/Gathering">
                  <GatheringsPage
                    References={References}
                    executeScroll={executeScroll}
                    language={language}
                    setLanguage={setLanguage}
                  />
                </Route>
                <Route exact path="/contact-us">
                  <ContactUs
                    References={References}
                    executeScroll={executeScroll}
                    language={language}
                    setLanguage={setLanguage}
                  />
                </Route>
                {/* Route with no  exact path incase user enters incorrect url, he gets directed to dashboard*/}
                <Route render={() => <Redirect to="/" />} />
              </Switch>
              <Footer language={language} />
            </BrowserRouter>
          </div>
        </DataProvider>
      </DirectionProvider>
    </div>
  );
}

export default App;
