import { getEmails, getHobbiesByAge, getAustralianStudents, getNameAndCityAtIndex, getAllAges, getFirstHobbies, getNamesAndEmailsAged25, getCityAndCountry } from './solution.js';
import {arrayOfObjects} from './persons.js';

// Test for getEmails
const testGetEmails = () => {
    console.log(getEmails(arrayOfObjects));
    console.log(getEmails([]));
    console.log(getEmails("arrayOfObjects"));
}

// Test for getHobbiesByAge
const testGetHobbiesByAge = () => {
    getHobbiesByAge(arrayOfObjects, 25);
    getHobbiesByAge([], 25);
    getHobbiesByAge(arrayOfObjects, -4);
    getHobbiesByAge(arrayOfObjects, 0);
    getHobbiesByAge(arrayOfObjects, 47.891);
}

// Test for getAustralianStudents
const testGetAustralianStudents = () => {
    getAustralianStudents(arrayOfObjects);
    getAustralianStudents([]);
}

// Test for getNameAndCityAtIndex
const testGetNameAndCityAtIndex = () => {
    getNameAndCityAtIndex(arrayOfObjects);
    getNameAndCityAtIndex([]);
    getNameAndCityAtIndex([45, 67, 72, 86, 97]);
}

// Test for getAllAges
const testGetAllAges = () => {
    getAllAges(arrayOfObjects);
    getAllAges([]);
}

// Test for getFirstHobbies
const  testGetFirstHobbies = () => {
    getFirstHobbies(arrayOfObjects);
    getFirstHobbies([]);
}

// Test for getNamesAndEmailsByAge
const testgetNamesAndEmailsAged25 = () => {
    getNamesAndEmailsAged25(arrayOfObjects, 25);
    getNamesAndEmailsAged25(arrayOfObjects, 40);
    getNamesAndEmailsAged25([], 25);
}

// Test for getCityAndCountry
const  testGetCityAndCountry = () => {
    getCityAndCountry(arrayOfObjects);
    getCityAndCountry([]);
}

testGetEmails();
testGetHobbiesByAge();
testGetAustralianStudents();
testGetNameAndCityAtIndex();
testGetAllAges();
testGetFirstHobbies();
testgetNamesAndEmailsAged25();
testGetCityAndCountry();