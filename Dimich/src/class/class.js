class Car {
    #brand = '';
    #model = '';
    #year = 0;

    constructor(brand, model, year) {
        this.#brand = brand;
        this.#model = model;
        this.#year = year;
        this.mileage = 0;
    }

    // Геттеры
    get brand() {
        return this.#brand;
    }

    get model() {
        return this.#model;
    }

    get year() {
        return this.#year;
    }

    set year(newYear) {
        this.#year = newYear;
    }

    drive(kilometers) {
        if (kilometers > 0) {
            this.mileage += kilometers;
        } else {
            console.error('Kilometers should be a positive number.');
        }
    }

    toString() {
        return `${this.#year} ${this.#brand} ${this.#model} with ${this.mileage} km`;
    }

    compareTo(other) {
        if (!(other instanceof Car)) {
            throw new Error("Argument must be an instance of Car.");
        }
        return this.mileage - other.mileage; // Возвращает разницу пробега
    }

    static compareMileage(car1, car2) {
        return car1.mileage > car2.mileage ? car1 : car2;
    }
}

class ElectricCar extends Car {
    #batteryLevel = 100;

    constructor(brand, model, year, batteryLevel = 100) {
        super(brand, model, year);
        this.#batteryLevel = batteryLevel;
    }

    get batteryLevel() {
        return this.#batteryLevel;
    }

    charge(amount) {
        if (amount > 0) {
            this.#batteryLevel = Math.min(this.#batteryLevel + amount, 100);
        } else {
            console.error('Charge amount should be positive.');
        }
    }

    drive(kilometers) {
        if (this.#batteryLevel <= 0) {
            console.error('Battery is empty.');
            return;
        }

        // Пример: каждый км требует 0.1% заряда
        const requiredBattery = kilometers * 0.1;
        if (requiredBattery > this.#batteryLevel) {
            console.error('Not enough battery to complete the drive.');
            return;
        }

        super.drive(kilometers);
        this.#batteryLevel -= requiredBattery;
    }
}

// Примеры использования
const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new Car('Honda', 'Civic', 2019);
const electricCar = new ElectricCar('Tesla', 'Model 3', 2023);

car1.drive(15000);
car2.drive(20000);
electricCar.drive(100);

console.log(car1.toString()); // "2020 Toyota Corolla with 15000 km"
console.log(car2.toString()); // "2019 Honda Civic with 20000 km"
console.log(electricCar.toString()); // "2023 Tesla Model 3 with 100 km"

console.log(Car.compareMileage(car1, car2)); // car2
console.log(electricCar.batteryLevel); // Уровень заряда после вождения

car2.year = 2020; // Изменение года выпуска
console.log(car2.year); // 2020

// Использование compareTo
console.log(car1.compareTo(car2)); // Разница пробега между car1 и car2
