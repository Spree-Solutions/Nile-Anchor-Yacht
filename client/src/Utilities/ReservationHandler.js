import PaymentHandler from './PaymentHandler';
import axios from 'axios';
import {configs} from './variables';

export const WRONG_RESERVATION_DATE_FORMAT = 110;
export const YACHT_BELLA = "B02";
export const YACHT_LIBERTY = "B01";
export const EVENT_TYPE_WEDDING = "01";
export const EVENT_TYPE_cCORPORATE = "02";
export const EVENT_TYPE_INDIVIDUAL = "03";
export class ReservationHandler {
    username="";
    phoneNumber="";
    email="";
    serviceName="";
    selectedYacht=YACHT_BELLA;
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
    // existingReservations = [{ fromDateTime: "2021-10-24T14:00:00", toDateTime: "2021-10-24T19:00:00" }];
    paymentReferenceNumber = null;
    _availableHours = [];
    static _instance=null;
    notifyStartHour=null;
    notifyEndHour=null;


    // get yacht availability given date
    // reserve yacht on a given date
    // calculate yacht price for a given time period same day
    static getInstance() {
        if (ReservationHandler._instance) {
          return ReservationHandler._instance;
        }
        window.TanawysPHandler = PaymentHandler;
        window.TanawysRHandler = ReservationHandler._instance;
        
        ReservationHandler._instance = new ReservationHandler();
        return ReservationHandler._instance;
      }
    constructor(){
    }
    calculatePrice(hoursCount){
        // check if type is valid
        // if(typeof(hoursCount)===typeof(0))

        // sort by from hours smallest first
        let sortedPriceList = [...this.priceSegments.sort(((hoursA,hoursB)=> Number(hoursA.fromHours)- Number(hoursB.fromHours)))];
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
            hoursCount--;
        }
        return accumulator;
    }

    set startingHour(value){
        console.log(value);
        this.selectedStartingTime = Number(value);
        if(this.notifyEndHour){
            this.notifyEndHour();
        }
    }
set endingHour(value){
        this.selectedEndingTime = Number(value);
        this.calculatedFinalPrice =this.calculatePrice(this.selectedEndingTime-this.selectedStartingTime);
    }

    get availableStartHours(){
        if(this.availableHourSegments.length===0){
            return []
        }
        return this._availableHours;

    }

    getAvailableEndHours(){
        if(this.selectedStartingTime === null){
            return [];
        }
        let segmentEnd;
        let segmentStart = this.selectedStartingTime;
        this.availableHourSegments.forEach((segment)=>{
            if(segment.fromHour <= segmentStart && segment.toHour >= segmentStart){
                segmentEnd = segment.toHour;

            }
        });
        let endingHoursArray = [];
        for(let i = segmentStart; i<=segmentEnd;i++){
            endingHoursArray.push(i);
        }

        return endingHoursArray;

    }

    calculateAvailablity(){
        let hoursArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
        // sort reservation earlier first
        let reservations = this.existingReservations.sort(((hoursA,hoursB)=> Number((new Date(hoursA.fromHours)).getHours())- Number((new Date(hoursB.fromHours)).getHours())))
        let startHour;
        let endingHour;
        let startingHourIndex ;
        let endingHourIndex;
        reservations.forEach(reservation=>{
            startHour = (new Date(reservation.fromDateTime)).getHours();
            endingHour = (new Date(reservation.toDateTime)).getHours();
            startingHourIndex = hoursArray.indexOf(startHour);
            endingHourIndex = hoursArray.indexOf(endingHour);
            console.log("debugging availability",{
                reservation,
                startHour,
                endingHour,
                hoursArray,
                startingHourIndex,
                endingHourIndex
            });
            hoursArray.splice(startHour,endingHour-startHour);
        });
        startHour = hoursArray[0];
        let endHour = startHour;
        let connectedSegments = [];
        hoursArray.forEach(currentHour=>{
            if(startHour !== currentHour){
                if(currentHour -endHour >1){
                    let singleSegment = {fromHour:startHour,toHour:endHour}
                    connectedSegments.push(singleSegment);
                    startHour = currentHour;
                    endHour = startHour;
                } else {
                    endHour = currentHour;
                }
            }
        });
        this._availableHours = hoursArray;
        connectedSegments.push({fromHour:startHour,toHour:endHour});
        this.availableHourSegments = connectedSegments;
        if(this.notifyStartHour){
            this.notifyStartHour();
        }

        
        

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
        if(typeof value !== typeof ""&& typeof value !== typeof (new Date()))
            throw Error({
                code:WRONG_RESERVATION_DATE_FORMAT,
                message:"reservation date must be string"});
        // check date format

        // if all is right assign value
        this._selectedReservationDay = value;
        let formattedValue = value.toISOString().split('T')[0].replaceAll('-','');
        if(this.selectedYacht){
            this._getAvailability(formattedValue);
        }

        // get appropriate time block calculated

    }

    get reservationDate(){
        return this._selectedReservationDay.toISOString().split('T')[0].replaceAll('-','');
        
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
            if(response.data.reservations){
                if(response.data.reservations.length>0){
                    let sameDayReservation = response.data.reservations.filter(reservation=>{
                        let date = (new Date(reservation.toDateTime)).toISOString().split('T')[0].replaceAll('-','');
                        console.log("from sameday filter",{date,dayDate})
                        return date === dayDate;
                    });

                    this.existingReservations = sameDayReservation;
                }
            }
            this.calculateAvailablity();

            if(response.data.prices){
                this.priceSegments = response.data.prices;
            }


        // set existing Reservation Array

        return true;
    }



    

}