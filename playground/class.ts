function ShoppingList() {
    this.groceries = [];
}

ShoppingList.prototype.addItem = function (item) {
    this.groceries = this.groceries.concat([item]);
}

ShoppingList.prototype.removeItem = function (item) {
    this.groceries = this.groceries.filter(function (grocery) {
        return item !== grocery
        //apple does not equal apple
    })
}

var myList = new ShoppingList();

myList.addItem('apple');

console.log(myList.groceries);

myList.removeItem('apple');

console.log(myList.groceries);

// Same function with Class functions

class ShoppingList2 {
    //we have an array of strings
    groceries: string[];
    constructor() {
        this.groceries = [];
    }

    addItem(item) {
        this.groceries = [...this.groceries, item]
    }

    removeItem(item) {
        this.groceries = this.groceries.filter((grocery) => item !== grocery);
    }
}

const myNewList = new ShoppingList2();
console.log(myNewList);

myNewList.addItem('pear');
myNewList.addItem('pizza');

console.log(myNewList.groceries);

myNewList.removeItem('pear');

console.log(myNewList.groceries);