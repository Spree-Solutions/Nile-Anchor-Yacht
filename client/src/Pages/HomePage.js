import Navbar from "./../NewComponents/HomePage/Navbar";
import Welcome from "./../NewComponents/HomePage/Welcome";
import OurYachts from "./../NewComponents/HomePage/OurYachts";
import Gallery from "./../NewComponents/HomePage/Gallery";
import OurServices from "./../NewComponents/HomePage/OurServices";
import Partners from "./../NewComponents/HomePage/Partners";
import Contact from "./../Components/Contact";
import Footer from "./../Components/Footer";
import Error from "./../NewComponents/HomePage/Error";
import Success from "./../NewComponents/HomePage/Success";

export default function HomePage(props) {
  return (
    <div>
      <div ref={props.References.AboutUsRef}>
        <Navbar
          executeScroll={props.executeScroll}
          References={props.References}
          setLanguage={props.setLanguage}
          language={props.language}
        />
        <Welcome
          executeScroll={props.executeScroll}
          References={props.References}
          setLanguage={props.setLanguage}
          language={props.language}
        />
      </div>
      <div ref={props.References.OurYachtsRef}>
        <OurYachts
          language={props.language}
          executeScroll={props.executeScroll}
          References={props.References}
        />
      </div>
      <div ref={props.References.GalleryRef}>
        <Gallery language={props.language} />
      </div>
      <div ref={props.References.OurServicesRef}>
        <OurServices language={props.language} />
      </div>
      <div ref={props.References.AdditionalServicesRef}>
        <Partners language={props.language} />
      </div>
      <div ref={props.References.ContactRef}>
        <Contact language={props.language} />
      </div>
      <Footer language={props.language} />
      <Error
        language={props.language}
        showError={props.showError}
        setShowError={props.setShowError}
      />
      <Success
        language={props.language}
        showSuccess={props.showSuccess}
        setShowSuccess={props.setShowSuccess}
      />
    </div>
  );
}
