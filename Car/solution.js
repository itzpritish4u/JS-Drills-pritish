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
