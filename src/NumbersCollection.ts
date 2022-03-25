import { Sorter } from "./Sorter";


export class NumbersCollection extends Sorter{
    constructor(public data:number[]){
        super()
    }

    //defined as getter
    get length():number{
        return this.data.length;
    }

    swap(leftIndex:number,rightIndex:number):void{
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
    compare(leftIndex:number, rightIndex:number):boolean{
        return this.data[leftIndex] > this.data[rightIndex];
    }

    print():void{
        console.log(this.data);
    }
}