// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(42 - pickupLocation);
}

function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet(start, finish){
    return Math.abs(start - finish) * 264;
}

function calculatesFarePrice(start, destination){
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    let fare;
    if(distanceInFeet < 400){
        fare = 0;
        return fare;
    }
    else if(distanceInFeet >= 400 && distanceInFeet <= 2000){
    fare = (distanceInFeet - 400) * 0.02;
    }
    else if(distanceInFeet > 2000 && distanceInFeet < 2500){
    fare = 25;
    }
    else{
    fare= "cannot travel that far"
    }
    return fare;
}