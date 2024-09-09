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