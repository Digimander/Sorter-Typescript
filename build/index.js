"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const LinkedList_1 = require("./LinkedList");
const CharactersCollection_1 = require("./CharactersCollection");
//sort array of numbers
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, 50, -20, 100]);
numbersCollection.sort();
numbersCollection.print();
//sort string
const charsCollection = new CharactersCollection_1.CharactersCollection('agdbertasce');
charsCollection.sort();
charsCollection.print();
//sort linked list
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
