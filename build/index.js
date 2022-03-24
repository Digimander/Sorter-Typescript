"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        //deconstructing the collection object and getting length
        const { length } = this.collection;
        //bubble sort 
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    let temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
