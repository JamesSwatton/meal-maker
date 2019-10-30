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
    getRandomDishFromCourse
};

menu.addDishToCourse('appetizers', 'soup', 10);
console.log(menu._courses.appetizers);
console.log(menu.courses);
