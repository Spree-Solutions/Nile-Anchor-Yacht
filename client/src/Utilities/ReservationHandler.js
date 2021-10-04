import PaymentHandler from './PaymentHandler';
import axios from 'axios';
import {configs} from './variables';

export const WRONG_RESERVATION_DATE_FORMAT = 110;
export const YACHT_BELLA = "B02";
export const YACHT_LIBERTY = "B01";
export const EVENT_TYPE_WEDDING = "01";
export const EVENT_TYPE_cCORPORATE = "02";
export const EVENT_TYPE_INDIVIDUAL = "03";
export default class ReservationHandler {
    username="";
    phoneNumber="";
    email="";
    serviceName="";
    selectedYacht=null;
    _selectedReservationDay=null;
    selectedStartingTime=null;
    selectedEndingTime=null;
    calculatedFinalPrice=0;
    isLoading=false;
    availableYachts=["Bella", "Liberty"];
    availableEvents=["Wedding", "Corporate", "Individual"];
    priceSegments=[];
    availableHourSegments=[]; // type []{startTime:"hh:mm",endTime:"hh:mm"}
    existingReservations = [];
    paymentReferenceNumber = null;


    // get yacht availability given date
    // reserve yacht on a given date
    // calculate yacht price for a given time period same day

    constructor(){
        window.TanawysPHandler = PaymentHandler;
    }
    calculatePrice(hoursCount){
        // check if type is valid
        // if(typeof(hoursCount)===typeof(0))

        // sort by from hours smallest first
        let sortedPriceList = this.priceSegments.sort(((hoursA,hoursB)=> Number(hoursA.fromHours)- Number(hoursB.fromHours)));
        let accumulator =0;
        let lastInterval;
        while(hoursCount>0){
            if(sortedPriceList.length>0){
                lastInterval = sortedPriceList.shift();
            }
            if(hoursCount<1){
                // hours fractions
                accumulator += (Number(lastInterval.price)*hoursCount);
            } else {
                
                accumulator += Number(lastInterval.price);
            }
        }
        return accumulator;
    }

    calculateAvailablity(){
        let hoursArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
        // sort reservation earlier first
        let reservations = this.existingReservations.sort(((hoursA,hoursB)=> Number(hoursA.fromHours)- Number(hoursB.fromHours)))

        let connectedSegments = reservations.map(reservation=>{
            let startHour = hoursArray.indexOf(Math.floor(reservation.fromHours));
            let endingHour = hoursArray.indexOf(Math.ceil(reservation.toHours));
            let singleSegment = {fromHours:hoursArray[0],toHours:hoursArray[startHour-1]};
            hoursArray = hoursArray.splice(startHour,endingHour-startHour);
            return singleSegment
        });

        return connectedSegments;
    } 

    setYacht(yachtName){
        let yachtCode = null;
        if(yachtName === "Bella"){
            yachtCode = YACHT_BELLA;
        } else if(yachtName === "Liberty") {
            yachtCode = YACHT_LIBERTY;

        }

        this.selectedYacht = yachtCode;
    }
    async reserve(){
        this.isLoading = true;
        let params = {
            customer_name: this.username,
            customer_email:this.email,
            customer_mobile:this.phoneNumber,
            description:`Nile Yacht Reservation for ${this.serviceName}
            on yacht ${this.selectedYacht}
            on day ${this.reservationDate}
            from time ${this.selectedStartingTime} to ${this.selectedEndingTime}
            for ${this.calculatedFinalPrice}`,
            amount:this.calculatedFinalPrice
        };
        let response = await PaymentHandler.initializeIFrame(params);
        this.isLoading = false;
        return response;


    }

    set reservationDate(value) {
        if(typeof value !== typeof "")
            throw Error({
                code:WRONG_RESERVATION_DATE_FORMAT,
                message:"reservation date must be string"});
        // check date format

        // if all is right assign value
        this._selectedReservationDay = value;
        if(this.selectedYacht){
            this._getAvailability(this._selectedReservationDay);
        }

        // get appropriate time block calculated

    }

    get reservationDate(){
        return this._selectedReservationDay;
        
    }

    async availableTimeSlots(dayDate = null){



    }

    async _getAvailability(dayDate){
        
        // insure request parameter exists
        if(!this.selectedYacht || !dayDate ){
            throw Error({error:true, message:{code:119,text:"please ensure date and yacht are selected and in correct format"}})
        }

        // send availability request
        let response = await axios.get(
            `${configs.BACKEND_API_BASE_URL}?type=assetTimes&user=WS&pass=WebSite123&assetCode=${this.selectedYacht}&onDate=${dayDate}`);

            console.log("availability response", response);

        // set existing Reservation Array

        return true;
    }



    

}