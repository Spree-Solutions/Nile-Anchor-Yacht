import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {colors } from "../../Styles/Colors";
import {createGlobalStyle} from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerWrapperStyles = createGlobalStyle`
margin-bottom: 1.4vw;
.DatePicker,
.DatePicker:hover,
.DatePicker:active {
  text-align-last: left;
  padding: 0.4vw 0.6vw 0.4vw 0.6vw;
  font-family: "Askan Light" !important;
  border: none;
  outline: none;
  font-size: 1vw;
  color: ${colors.Black};
  cursor: pointer;
  background-color: ${colors.Merino} !important;
}
.fullWidth {
    width: 100%;
}
.hideOverflow {
    overflow: hidden;
}
.ENDatePicker {
  margin-right: 1.6vw;
}

.ARDatePicker {
  text-align-last: right;
}
.ARDatePicker:active,
.ARDatePicker:hover {
    text-align-last: right;
}
`;

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DatePickerComponent = (props) => {

    let initialValue =null;
    if (typeof props.initialValue === typeof initialValue){
        initialValue = props.initialValue;
    } else {
        initialValue = null;
    }
    const [startDate, setStartDate] = useState(initialValue);

    
    let initialText = "Select a date";
    let language = "EN";
    if(props.language && props.language === "AR"){
        initialText = "اختار اليوم";
        language = "AR"
    }


    const onChangeHandler = (date)=>{
        if(props.onChange != undefined && typeof props.onChange == "function"  ){
            props.onChange(date);
        }

        setStartDate(date);
    }

    return (
        <React.Fragment>

            <DatePicker wrapperClassName="hideOverflow" className={`DatePicker fullWidth ${language==="AR"?"ARDatePicker":""}`} value={!startDate?initialText:undefined} selected={startDate? startDate:undefined} onChange={onChangeHandler} />
            <DatePickerWrapperStyles />
        </React.Fragment>
    );
};