import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";
import { CharactersCollection } from "./CharactersCollection";


//sort array of numbers
const numbersCollection = new NumbersCollection([10,3,50,-20,100])
numbersCollection.sort();
numbersCollection.print();

//sort string
const charsCollection = new CharactersCollection('agdbertasce');
charsCollection.sort();
charsCollection.print();

//sort linked list
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(4);

linkedList.sort();
linkedList.print();