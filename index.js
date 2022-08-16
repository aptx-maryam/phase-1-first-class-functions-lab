// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (drivers) {
    let result = drivers.slice(0, 2);
    return result
};
  
const returnLastTwoDrivers = function (drivers) {
    let result = drivers.slice(-2);
    return result
};
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
const createFareMultiplier = function (value) {
    let result = number => {return value * number};
    return result
};
  
const fareDoubler = fare => fare * 2

const fareTripler = fare => fare * 3
  
const selectDifferentDrivers = function (arrayOfDrivers, driversFunction) {
    return driversFunction(arrayOfDrivers);
};