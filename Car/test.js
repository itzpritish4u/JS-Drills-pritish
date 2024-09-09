import { inventory }  from './cars.js';
import { findCarById, getLastCar, sortCarModels, getCarYears, getOlderCars, getBMWAndAudi }  from './solution.js';

const testFindCarById = () => {
    console.log(findCarById(inventory));
    console.log(findCarById({}));
    console.log(findCarById(0));
    console.log(findCarById([inventory, []]));
    console.log(findCarById([{id: 33, car_model: 'Toyota', car_make: 'Camry', car_year: 2015, car_color: 'Blue'}]));
    console.log(findCarById([{id: 39, car_model: 'Z9', car_make: 'Yamaha', car_year: 1998, car_color: 'Grey'}]));
    
}

const testGetLastCar = () => {
    console.log(getLastCar(inventory));
    console.log(getLastCar([{id: 1,  car_model: 'Toyota', car_make: 'Camry', car_year: 2015, car_color: 'Blue'}, {id: 2,  car_model: 'Z9', car_make: 'Yamaha', car_year: 1998, car_color: 'Grey'}]));
    console.log(getLastCar());
    console.log(getLastCar([]));
}

const testSortCarModels = () => {
    console.log(sortCarModels(inventory));
    console.log(sortCarModels([{id: 1,  car_model: [1,2,3], car_make: 'Camry', car_year: 2015, car_color: 'Blue'}, {id: 2,  car_model: 'Z9', car_make: 'Yamaha', car_year: 1998, car_color: 'Grey'}]));
    console.log(sortCarModels([{id: 1,  car_model: '', car_make: 'Camry', car_year: 2015, car_color: 'Blue'}, {id: 2,  car_model: 'Z9', car_make: 'Yamaha', car_year: 1998, car_color: 'Grey'}]));
    console.log(sortCarModels([1, 4, 5]));
    console.log(sortCarModels("Model: Bugatti"));
}

const testGetCarYears = () => {
    console.log(getCarYears(inventory));
    console.log(getCarYears({str:["ghi"],num:[56]}));
    console.log(getCarYears([{id: 1,  car_model: 'Toyota', car_make: 'Camry', car_year: "2015", car_color: 'Blue'}, {id: 2,  car_model: 'Z9', car_make: 'Yamaha', car_year: 1998, car_color: 'Grey'}]));
    console.log(getCarYears([{id: 1,  car_model: 'Toyota', car_make: 'Camry', car_year: 15, car_color: 'Blue'}, {id: 2,  car_model: 'Z9', car_make: 'Yamaha', car_year: 1967, car_color: 'Grey'}]));
}

const testGetOlderCars = () => {
    console.log(getOlderCars(inventory));
    console.log(getOlderCars(getCarYears(inventory)));
    console.log(getOlderCars([{car_year: 2015}, {car_year: 1948}]));
    console.log(getOlderCars([{car_year: -1978}, {car_year: "2010"}]));
}

testFindCarById();
testGetLastCar();
testSortCarModels();
testGetCarYears();
testGetOlderCars();