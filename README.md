# JS OOP Basics - new directions
## Rides

Within a new file called rides.js:

1. Create a Child class that takes a height, name, and age.
2. Create a Ride class that takes a minimum and maximum height.
3. Create two instances of each.
4. Write a function that takes a ride object and a child object as arguments and determines if the child is take enough for the ride (return true or false).


## Miles

Within a new file called miles.js:

1. Create a Car class that takes the miles per gallon and gallons in a tank.
2. Create a Route class that takes the total miles to the destination, the destination name, and location (city and state).
3. Create two instances of each.
4. Write a function that takes a car object and a route object as arguments and determines if the car has enough gas to make the entire route (return true or false).


## Old directions

Create an javascript file for each of the functions described bellow.

## Rides
1. Write a function that takes a ride object and a child object as arguments (see example objects below).
2. Determine if the child is tall enough for the ride (the function should return true or false)

#### Example Objects:

```
var child = {
  height: 3,
  name: "Julian",
  age: 3
};

var child = {
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
```
## Miles

1. Write a function that takes in a `car` object and a `route` object.
2. Determine if the car has enough gas to make the entire route (return true or false).

#### Example Objects

```
var car = {
  milesPerGallon: 20,
  gallonsInTank: 3
};

var route = {
  miles: 200,
  destination: "Boulder",
  location: "Fancy Land"
};
```
