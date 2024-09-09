export const findCarById = (inventory) => {
    if (inventory === undefined || !Array.isArray(inventory) || inventory.length  === 0) {
        return "inventory not found";
    }

    for (let obj of inventory) {
        if (obj.id === 33) {
            return `Car 33 is a ${obj.car_year} ${obj.car_make} ${obj.car_model}`;
        }
    }
    return  "Car not found";
}

export const getLastCar = (inventory) => {
    if (inventory === undefined || !Array.isArray(inventory) || inventory.length  === 0) {
        return "inventory not found";
    }
    if (typeof inventory[inventory.length - 1].car_make !== 'string') {
        return "car maker not found";
    }
    if (typeof inventory[inventory.length - 1].car_model !== 'string') {
        return "car model not found";
    }
    return `Last car is a ${inventory[inventory.length - 1].car_make} ${inventory[inventory.length - 1].car_model}`;
}

export const sortCarModels = (inventory) => {
    if (inventory === undefined || !Array.isArray(inventory) || inventory.length  === 0) {
        return "inventory not found";
    }
    const car_models = [];
    for (const obj of inventory) {
        if (obj.car_model !== undefined && typeof obj.car_model === 'string' && obj.car_model.length > 0) {
            car_models.push(obj.car_model);
        }
    }

    return car_models.sort();
}

export const getCarYears = (inventory) => {
    if (inventory === undefined || !Array.isArray(inventory) || inventory.length  === 0) {
        return "inventory not found";
    }
    const car_years = [];
    for (const obj of inventory) {
        if (typeof obj.car_year ===  'number' && obj.car_year > 1900 && obj.car_year < 2024) {
            car_years.push(obj.car_year);
        }
    }
    return car_years;
}

export const getOlderCars = (inventory) => {
    if (inventory === undefined || !Array.isArray(inventory) || inventory.length  === 0) {
        return "inventory not found";
    }
    const older_cars_years = [];
    const car_years = getCarYears(inventory);
    
    for (let  i = 0; i < car_years.length; i++) {
        if (car_years[i] < 2000) {
            older_cars_years.push(car_years[i]);
        }
    }
    
    console.log(`Number of cars older than the year 2000: ${older_cars_years.length}`);
    return older_cars_years;
}

