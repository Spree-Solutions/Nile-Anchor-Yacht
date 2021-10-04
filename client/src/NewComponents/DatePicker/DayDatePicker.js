import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DatePickerComponent = (props) => {

    let initialValue = new Date();
    if (typeof props.initialValue === typeof initialValue){
        initialValue = props.initialValue;
    }
    const [startDate, setStartDate] = useState(initialValue);


    const onChangeHandler = (date)=>{
        if(props.onChange != undefined && typeof props.onChange == "function"  ){
            props.onChange(date);
        }

        setStartDate(date);
    }

    return (
        <DatePicker selected={startDate} onChange={onChangeHandler} />
    );
};