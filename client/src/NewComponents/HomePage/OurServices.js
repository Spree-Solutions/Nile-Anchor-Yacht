import React from "react";
import styled from "styled-components";

// import { isMobileOnly } from "react-device-detect";

import BusinessEvents from "./BusinessEvents";
import Weddings from "./Weddings";
import Gatherings from "./Gatherings";

export default function OurServices(props) {
  return (
    <div>
      <StyledDiv>
        <div
          className={
            props.language === "EN"
              ? "LogoCell LeftTextAlign"
              : "LogoCell RightTextAlign"
          }
        >
          <Weddings language={props.language} />
          <BusinessEvents language={props.language} />
          <Gatherings language={props.language} />
        </div>
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  .LeftTextAlign {
    text-align: left;
  }
  .RightTextAlign {
    text-align: right;
  }
`;
