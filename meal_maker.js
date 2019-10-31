const menu = {
    _courses : {
        appetizers : [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizerIn) {
        this._courses.appetizers.push(appetizerIn);
    },
    set mains(mainIn) {
        this._courses.mains.push(mainIn);
    },
    set desserts(dessertIn) {
        this._courses.desserts.push(dessertIn);
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };

        switch(courseName) {
        case 'appetizers':
            this.appetizers = dish;
            break;
        case 'mains':
            this.mains = dish;
            break;
        case 'desserts':
            this.desserts = dish;
            break;
        }
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this.courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const mealTotalPrice = appetizer.price + main.price + dessert.price;
        return `Your appetizer will be ${appetizer.name}, followed by ${main.name} for your main and ${dessert.name} for dessert. The total cost will be ${mealTotalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'soup', 5);
menu.addDishToCourse('appetizers', 'salad', 4);
menu.addDishToCourse('appetizers', 'pate', 6);
menu.addDishToCourse('mains', 'pasta', 8);
menu.addDishToCourse('mains', 'pizza', 9);
menu.addDishToCourse('mains', 'pie', 10);
menu.addDishToCourse('desserts', 'ice cream', 4);
menu.addDishToCourse('desserts', 'cake', 4);
menu.addDishToCourse('desserts', 'apple pie', 5);

// console.log(menu._courses.appetizers);
// console.log(menu.courses);

const meal = menu.generateRandomMeal();
console.log(meal);
