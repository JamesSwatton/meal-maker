const menu = {
    _courses : {
        appetizer : [],
        main: [],
        dessert: []
    },

    get appetizer() {
        return this._courses.appetizer;
    },
    get main() {
        return this._courses.main;
    },
    get dessert() {
        return this._courses.dessert;
    }
};

menu._courses.appetizer.push('soup');
console.log(menu.appetizer);
