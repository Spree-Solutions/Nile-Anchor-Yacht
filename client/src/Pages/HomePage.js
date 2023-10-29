import React, { useContext } from "react";
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
import RemoteContext from "../RemoteContext";

export default function HomePage(props) {
  if (typeof window !== typeof undefined) {
    const params = new URLSearchParams(
      window.location && window.location.search
    ); // id=123
    let operationStatus = params.get("operation_status"); // 123
    if (operationStatus === "success") {
      props.setShowSuccess(true);
    }
    if (operationStatus === "failed") {
      props.setShowError(true);
    }
  }

  const { remote_data, isLoading } = useContext(RemoteContext);
  let { nile_anchor_gallery, nile_anchor_yacht_collection } = remote_data || {};

  if (isLoading) {
    return "";
  }

  return (
    <div>
      <div>
        <Welcome
          id="about-us"
          executeScroll={props.executeScroll}
          References={props.References}
          setLanguage={props.setLanguage}
          language={props.language}
        />
      </div>
      {!isLoading && (
        <>
          <div id="our-yachts">
            <OurYachts
              language={props.language}
              executeScroll={props.executeScroll}
              References={props.References}
              yachts={nile_anchor_yacht_collection}
            />
          </div>
          <div id="gallery">
            <Gallery language={props.language} data={nile_anchor_gallery} />
          </div>
        </>
      )}
      <div id="our-services">
        <OurServices language={props.language} />
      </div>
      {/* <div id="additional-services">
        <Partners language={props.language} />
      </div> */}
      <div id="booking">
        <Contact language={props.language} />
      </div>
      {/* <Footer language={props.language} /> */}
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
