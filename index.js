/*
class Dog{ //Class to create new Dog Objects.
    #breed; //Declares breed as a private property.
    constructor(name, breed){ //Constructor for new Dog Objects.
        this.name = name; //A string.
        this.#breed = breed; //A String.
    }
    //Functions go here.
    bark(){
        console.log(`${this.name} barks!`);
    }
}*/

//Create classes and constructors for Breakfast, Lunch, and Dinner
class Breakfast{
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner{
    #dessert;
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}