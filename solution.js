// To accesses and returns the email addresses of all individuals.
const getEmails = (arrayOfObjects) => {
    const emails = [];
    for (let i = 0; i < arrayOfObjects.length; i++) {
        emails.push(arrayOfObjects[i].email);
    }
    return emails;
}

// To retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
const getHobbiesByAge = (arrayOfObjects, old) => {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        if (arrayOfObjects[i].age === old) {
            console.log(arrayOfObjects[i].hobbies);
        }
    }
}

// To extracts and displays the names of individuals who are students and live in Australia.
const getAustralianStudents = (arrayOfObjects) => {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        if (arrayOfObjects[i].isStudent && arrayOfObjects[i].country === "Australia") {
            console.log(arrayOfObjects[i].name);
        }
    }
}

// To accesses and logs the name and city of the individual at the index position 3 in the dataset.
const getNameAndCityAtIndex = (arrayOfObjects, index) => {
    console.log(arrayOfObjects[3].name, " ",  arrayOfObjects[3].city);
}

// To access and print the ages of all individuals in the dataset.
const getAllAges = (arrayOfObjects) => {
   for (let i = 0; i < arrayOfObjects.length; i++) {
    console.log(arrayOfObjects[i].age);
   }
}

// To retrieve and display the first hobby of each individual in the dataset.
const getFirstHobbies = (arrayOfObjects) => {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        console.log(arrayOfObjects[i].hobbies[0]);
    }
}

// To accesses and prints the names and email addresses of individuals aged 25.
const getNamesAndEmailsAged25 = (arrayOfObjects) => {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        console.log(`${arrayOfObjects[i].name} ${arrayOfObjects[i].age}`);
    }
}

// To access and log the city and country of each individual in the dataset.
const getCityAndCountry = (arrayOfObjects) => {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        console.log(`${arrayOfObjects[i].city} ${arrayOfObjects[i].country}`);
    }
}

export { getEmails, getHobbiesByAge, getAustralianStudents, getNameAndCityAtIndex, getAllAges, getFirstHobbies, getNamesAndEmailsAged25, getCityAndCountry };