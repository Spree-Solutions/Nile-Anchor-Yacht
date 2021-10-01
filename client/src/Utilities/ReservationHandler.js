




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


    

}