import {arrayOfObjects} from './persons.js'
// To accesses and returns the email addresses of all individuals.
const getEmails = () => {
    const emails = [];
    for (let i = 0; i < arrayOfObjects.length; i++) {
        emails.push(arrayOfObjects[i].email);
    }
    return emails;
}

// To retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
const getHobbiesByAge = (age) => {
    const hobbies = [];
    for (let i = 0; i < arrayOfObjects.length; i++) {
        if (arrayOfObjects[i].age === age) {
            hobbies.push(arrayOfObjects[i].hobbies);
        }
    }
    return hobbies;
}

// To extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
const getAustralianStudents = () => {
    const students = [];
    for (let i = 0; i < arrayOfObjects.length; i++) {
        if (arrayOfObjects[i].isStudent && arrayOfObjects[i].country === 'Australia') {
            students.push(arrayOfObjects[i].name);
        }
    }
    return students;
}

// To accesses and logs the name and city of the individual at the index position 3 in the dataset.
const getNameAndCityAtIndex = (index) => {
    if (index >= 0 && index < arrayOfObjects.length) {
        return {
            name: arrayOfObjects[index].name,
            city: arrayOfObjects[index].city
        };
    }
    return null; 
}

// To access and print the ages of all individuals in the dataset.
const getAllAges = () => {
    const ages = [];
   for (let i = 0; i < arrayOfObjects.length; i++) {
      ages[i] = arrayOfObjects[i].age;
   }
   return ages;
}

// To retrieve and display the first hobby of each individual in the dataset.
const getFirstHobbies = () => {
    const firstHobbies = [];

    for (let i = 0; i < arrayOfObjects.length; i++) {
        firstHobbies[i] = arrayOfObjects[i].hobbies[0];
    }
    return firstHobbies;
}

// To accesses and prints the names and email addresses of individuals aged 25.
const getNamesAndEmailsAged25 = () => {
    const aged25 = [];

    for (let i = 0; i < arrayOfObjects.length; i++) {
        aged25[i] = [arrayOfObjects.name, arrayOfObjects.age];
    }
    return aged25;
}

// To access and log the city and country of each individual in the dataset.
const getCityAndCountry = () => {
    const cityAndCountry = [];
    for (let i = 0; i < arrayOfObjects.length; i++) {
        cityAndCountry[i] = [arrayOfObjects.city, arrayOfObjects.country];
    }
    return cityAndCountry;
}