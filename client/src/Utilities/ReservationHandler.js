import PaymentHandler from './PaymentHandler';
import axios from 'axios';
import configs from './variables';

export const WRONG_RESERVATION_DATE_FORMAT = 110;
export const YACHT_BELLA = "B02";
export const YACHT_LIBERTY = "B01";
export const EVENT_TYPE_WEDDING = "01";
export const EVENT_TYPE_CORPORATE = "02";
export const EVENT_TYPE_INDIVIDUAL = "03";
const TRANSACTION_PENDING_CONFIRMATION = "pendingConfirmation";
const TRANSACTION_UNINITIALIZED = "uninitialized";
const TRANSACTION_COMPLETED = "complete";
const PAYMENT_STATUS_SUCCESSFULL = "PAID";
const PAYMENT_STATUS_FAILED = "FAILED"
export class ReservationHandler {
    username="";
    phoneNumber="";
    email="";
    serviceName="Wedding";
    selectedYacht=YACHT_LIBERTY;
    _selectedReservationDay=null;
    selectedStartingTime=null;
    selectedEndingTime=null;
    calculatedFinalPrice=0;
    isLoading=false;
    availableYachts=[ "Liberty"];
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
    _transactionState=TRANSACTION_UNINITIALIZED;// "uninitialized" "pendingConfirmation" "complete"
    _paymentRef = null;
    _merchantRef = null;
    _rentalRequestCode = null;
    _customerCode=null;


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
        ReservationHandler._instance.fromLocalStorage();
        window.addEventListener('message', function (e) {
            if (e.data && e.data.message_source === 'cowpay') {
                console.log("Tanawy caught in event from Reservation Handler",e);
                        let paymentStatus = e.data.payment_status,
                            cowpayReferenceId = e.data.cowpay_reference_id,
                            gatewayReferenceId = e.data.payment_gateway_reference_id;
                            ReservationHandler._instance.completeReservation(ReservationHandler._instance._merchantRef);
                            if(paymentStatus === PAYMENT_STATUS_SUCCESSFULL){
                                console.log("the payment was successfull");
                            }else {
                                console.log("the payment failed");
                            }
                        
                        // take an action based on the values 
                    }
                    
                }, false);
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
        return (accumulator*0.5).toFixed(2);
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

    get serviceCode(){
        let result = "";
        if(this.serviceName == this.availableEvents[0]){
            result = EVENT_TYPE_WEDDING;
        } else if(this.serviceName == this.availableEvents[1]){
            result = EVENT_TYPE_CORPORATE;
        } else if ( this.serviceName === this.availableEvents[2]){
            result = EVENT_TYPE_INDIVIDUAL;
        }

        return result;
    }

    get priceClassifier(){
        return `${this.selectedYacht}${this.serviceCode}`;
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
        let hoursArray = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
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
        this._transactionState = TRANSACTION_PENDING_CONFIRMATION;
        // let reservationDateArray = this._selectedReservationDay.split('T')[0].split('-').reverse().join('-');
        let formattedReservationDate = this._selectedReservationDay.toISOString().split('T')[0].split('-').reverse().join('-');
        let timestamp = new Date().getTime();
        this._customerCode = `${this.phoneNumber}-${timestamp}`;
        let startHour = this.selectedStartingTime >9?`${this.selectedStartingTime}`:`0${this.selectedStartingTime}`;
        let endHour = this.selectedEndingTime >9?`${this.selectedEndingTime}`:`0${this.selectedEndingTime}`;
        let reservationResponse = await axios.post(`${configs.BACKEND_API_ALIAS}?integrator=reservations&user=WS&pass=WebSite123`,{
            
                "Customer" : [ {
                "group" : "Customer$#C",
                "description2" : this.username,
                "contactInfo" : {
                  "telephone1" : this._customerCode
                }
              } ],
              "RARentalRequest" : [ {
                "book" : "RARentalRequest$#RR",
                "code" : "RR00001@draft",
                "term" : "RARentalRequest$#RR",
                "valueDate" : (new Date()).toISOString().split('T')[0].split('-').reverse().join('-'),
                "customer" : this._customerCode,
                "payDate" : (new Date()).toISOString().split('T')[0].split('-').reverse().join('-'),
                "rentalAsset" : this.selectedYacht,
                "priceClassifier1" : this.priceClassifier,
                "fromDate" : formattedReservationDate,
                "fromTime" : `${startHour}:00`,
                "toDate" : formattedReservationDate,
                "toTime" : `${endHour}:00`
              } ]
             
             
        });
        console.log("respnse reservation", reservationResponse);
        let failedRecords = reservationResponse.data.failed_records_count;
        if(failedRecords){
            this.isLoading = false;
            let returnValue = {error:true};
            return returnValue;
        }
        this._rentalRequestCode = reservationResponse.data.saved_records.RARentalRequest[0].code;
        // let response={error:true,value:reservationResponse.data.saved_records.RARentalRequest[0].code};
        let response = await PaymentHandler.initializeIFrame(params);
        if(!response.error){
            this._paymentRef = response.message.referenceId;
            this._merchantRef = response.message.merchant_reference_id;
            this.toLocalStorage();
        }else {
            this._transactionState = TRANSACTION_UNINITIALIZED;
        }
        this.isLoading = false;
        return response;


    }

    async completeReservation(receivedData){
        console.log("testing complete Reservation",receivedData);
        try{

            let response = await PaymentHandler.getPaymentStatus(receivedData);
            if(response.status === 200){
                let orderStatus = response.data.order_status;
                if(orderStatus === "PAID"){
                    let confirmationResponse = await axios.post(`${configs.BACKEND_API_ALIAS}?integrator=reservations&user=WS&pass=WebSite123`,{
                        
                            "ReceiptVoucher" : [ {
                              "book" : "ReceiptVoucher$#RVV",
                              "code" : "RV00001@draft",
                              "term" : "ReceiptVoucher$#RVV",
                              "valueDate" : new Date().toISOString().split('T')[0].split('-').reverse().join('-'),
                              "fromDoc" : {
                                "entityType" : "RARentalRequest",
                                "code" : this._rentalRequestCode
                              },
                              "firstSideSubsidiary" : {
                                "entityType" : "BankAccount",
                                "code" : "1"
                              },
                              "firstSideAccount" : "120201",
                              "amount" : {
                                "value" : {
                                  "amount" : this.calculatedFinalPrice,
                                  "currency" : "EGP"
                                }
                              },
                              "relatedSubsidiary" : {
                                "entityType" : "Customer",
                                "code" : this._customerCode
                              }
                            } ]
                           
                           
                    });
                    this.clearStorage();
                    if(confirmationResponse.data && confirmationResponse.data.failed_records_count){
                        window.location.href = "/?operation_status=failed";
                    }else if(confirmationResponse.data && confirmationResponse.data.saved_records){
                        window.location.href = "/?operation_status=success";
                    }
                    console.log("this is confirmation Response",confirmationResponse);
                }
            }
            console.log("complete transaction status",response);
        }catch(e){
            console.log("error while completing the transaction",e);
        }

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
            `${configs.BACKEND_API_ALIAS}?type=assetTimes&user=WS&pass=WebSite123&assetCode=${this.selectedYacht}&onDate=${dayDate}`);

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

    toLocalStorage(){
        let json = {...this
        }

        let jsonString = JSON.stringify(json);
        localStorage.setItem("handlerB",jsonString);
        console.log("here is the json object of this class", json);
    }

    fromLocalStorage(){
        let jsonString = localStorage.getItem("handlerB");
        let json = null;
        if(jsonString){
            json = JSON.parse(jsonString);
            console.log("from local storage Json",json);
            this.username= json.username;
            this.phoneNumber= json.phoneNumber;
            this.email= json.email;
            this.serviceName= json.serviceName;
            this.selectedYacht= json.selectedYacht;
            this._selectedReservationDay= json._selectedReservationDay;
            this.selectedStartingTime= json.selectedStartingTime;
            this.selectedEndingTime= json.selectedEndingTime;
            this.calculatedFinalPrice= json.calculatedFinalPrice;
            this.isLoading= json.isLoading;
            this.availableYachts= json.availableYachts;
            this.availableEvents= json.availableEvents;
            this.priceSegments= json.priceSegments;
            this.availableHourSegments= json.availableHourSegments; // type []{startTime:"hh:mm",endTime:"hh:mm"}
            this.existingReservations = json.existingReservations;
            this.paymentReferenceNumber = json.paymentReferenceNumber;
            this._availableHours = json._availableHours;
            this._transactionState= json._transactionState;
            this._paymentRef = json._paymentRef;
            this._merchantRef = json._merchantRef;
            this._rentalRequestCode = json._rentalRequestCode;
            this._customerCode = json._customerCode;

        }
    }

    clearStorage(){
        localStorage.removeItem("handlerB");
    }

    

}