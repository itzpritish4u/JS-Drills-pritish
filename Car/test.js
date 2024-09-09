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


testFindCarById();
testGetLastCar();
testSortCarModels();