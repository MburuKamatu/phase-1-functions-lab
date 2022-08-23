// Code your solution in this file!
const hq=42;

function distanceFromHqInBlocks(value){
    if (value>42){
        return (value-hq);
       }
       else{
        return (hq-value);
       }
}
function distanceFromHqInFeet(someValue) {
    if (someValue>42){
        return (someValue-hq)*264;
       }
       else{
        return (hq-someValue)*264;
       }
}

function distanceTravelledInFeet(start, destination) {
    if (destination>42){
    return (destination-start)*264
    }else{
    return(start-destination)*264
    }
}
let feet,distance;
function calculatesFarePrice(start, destination){
    feet=(Math.abs(destination-start))*264
    if(feet>2500){
        return 'cannot travel that far'
    }else if(feet>2000){
        return 25
    }else if(feet>=400){
        return (((feet-400)*2)/100)
    }else if(feet<400){
        return 0
    }
}
