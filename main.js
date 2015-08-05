var child = {
  height: 1,
  name: "Julian",
  age: 3
};

var child2 = {
  height: 4,
  name: "Cero",
  age: 4
};

var ride = {
  minHeight: 3,
  maxHeight: 7
};

var ride2 = {
  minHeight: 4,
  maxHeight: 7
};

function tallEnoughForRide(kid, rideSpecs) {
  if (kid.height >= rideSpecs.minHeight) {
    return true;
  }
  else {
    return false;
  }
}

var car = {
  milesPerGallon: 20,
  gallonsInTank: 3
};

var route = {
  miles: 200,
  destination: "Boulder",
  location: "Fancy Land"
};


function gasEnoughForTrip(carSpecs, routeSpecs) {
  var milesPerTank = carSpecs.milesPerGallon * carSpecs.gallonsInTank;
  if (milesPerTank <= routeSpecs.miles) {
    return true;
  }
  else {
    return true;
  }
}

console.log(tallEnoughForRide(child, ride));
console.log(tallEnoughForRide(child2, ride2));

console.log(gasEnoughForTrip(car, route));

