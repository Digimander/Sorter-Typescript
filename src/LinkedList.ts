import { Sorter } from "./Sorter";

class LLNode{
    next:LLNode|null = null;
    constructor(public data:number){}
}

export class LinkedList extends Sorter{
    head: LLNode|null = null;

    add(data:number):void{
        const node = new LLNode(data);
        if(!this.head){
            this.head = node;
            return;// can be here , but not returning any value 
        }
        let tail = this.head;
        while(tail.next){
            tail = tail.next;
        }
        tail.next = node;
    }

    get length():number{
        if(!this.head){
            return 0;
        }
        let length = 1;
        let node = this.head;
        while(node.next){
            length++;
            node = node.next;
        }
        return length;
    }
    at(index:number):LLNode{
        if(!this.head){
            throw new Error('Index out of bounds1');
        }
        let counter = 0;
        let node:LLNode|null = this.head;//have to use explicit type annotation, because otherwise 
        // the type of node variable would be LLNode, but it could be also null
        while(node){
            if(counter === index){
                return node;
            }
            counter++;
            node = node.next;//here the compiler would have problem if no annotation would be used 
        }
        throw new Error('Index out of bounds2');        
    }

    compare(leftIndex:number,rightIndex:number):boolean{
        if(!this.head){
            throw new Error('List Empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data
    }
    swap(leftIndex:number,rightIndex:number):void{
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }
    print():void{
        if(!this.head){
            return;
        }
        let node: LLNode|null = this.head;
        while(node){
            console.log(node.data);
            node = node.next;
        }
    }   
}
  
  