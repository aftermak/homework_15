const SIZE_SMALL = {
    PRICE: 50,
    CALORIES: 20,
};

const SIZE_MEDIUM = {
    PRICE: 75,
    CALORIES: 30,
}

const SIZE_BIG = {
    PRICE: 100,
    CALORIES: 40,
}

const DOUGH_THIN = {
    PRICE: 0,
    CALORIES: 0,
}

const DOUGH_THICK = {
    PRICE: 0,
    CALORIES: 10,
}

const TOPPING_CHEESE = {
    PRICE: 10,
    CALORIES: 20,
}

const TOPPING_SAUSAGE = {
    PRICE: 20,
    CALORIES: 5,
}

const TOPPING_PINNEAPPLE = {
    PRICE: 15,
    CALORIES: 5,
}

const TOPPING_SPICES = {
    PRICE: 15,
    CALORIES: 0,
}

const TOPPING_SAUCE = {
    PRICE: 20,
    CALORIES: 5,
}


function Pizza (size) {
   this.price = size.PRICE;
   this.calories = size.CALORIES
};

function customPizza (changes) {
    this.price = this.price + changes.PRICE;
    this.calories = this.calories + changes.CALORIES;
};


Pizza.prototype.addToping = customPizza;
Pizza.prototype.changeDough = customPizza;

Pizza.prototype.getPrice = function () {
    return this.price
};

Pizza.prototype.getCalories = function () {
    return this.calories
};


const pizza = new Pizza (SIZE_SMALL);
pizza.changeDough(DOUGH_THIN);
pizza.addToping(TOPPING_CHEESE);
pizza.addToping(TOPPING_SPICES) 
console.log(`Total price: ` + pizza.getPrice());
console.log(`Total calories: ` + pizza.getCalories());