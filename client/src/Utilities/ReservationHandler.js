import PaymentHandler from './PaymentHandler';
export default class ReservationHandler {
    username="";
    phoneNumber="";
    email="";
    selectedYacht=null;
    _selectedReservationDay=null;
    selectedStartingTime=null;
    selectedEndingTime=null;
    calculatedFinalPrice=0;
    isLoading=false;
    availableYachts=[];
    priceSegments=[];
    availableHourSegments=[]; // type []{startTime:"hh:mm",endTime:"hh:mm"}
    existingReservations = [];
    paymentReferenceNumber = null;


    // get yacht availability given date
    // reserve yacht on a given date
    // calculate yacht price for a given time period same day

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

    async reserve(){
        window.TanawysPHandler = PaymentHandler;

    }


    

}