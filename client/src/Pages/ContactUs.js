import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/Colors";
import ContactUsTitle from "../NewComponents/DetailsPage/ContactUsTitle";
import ContactUsForm from "../Components/ContactUsForm";

const ContactUs = (props) => {
  return (
    <StyledPage>
      <ContactUsTitle language={props.language} />
      <ContactUsForm language={props.language} />
    </StyledPage>
  );
};
const StyledPage = styled.div``;
const StyledHeading = styled.div`
  background: ${colors.MainBeige};
`;
export default ContactUs;
