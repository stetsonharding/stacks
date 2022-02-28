//Building a stack data structure.

class Stack {

    constructor(){
        this.items = [];
        this.count = 0;
    }


    //adds items to array, with the index of count.
    //increments count to allow more than one item to array.
    //if count is not incremented, item at index count will just be replaced.
    push(element){
       this.items[this.count] = element;
       this.count++;
       return this.count - 1;
    }

    //removes last item in stack and returns it.
    //returns undefined if stack is null.
    pop(){
        if(this.count === 0) return undefined

        let deletedItem = this.items[this.count - 1]
        this.count--;
      
       const newArr = this.items.slice(0, this.items.length - 1)
       this.items = newArr;
    
       return deletedItem
    }


  

}

const myStack = new Stack();
myStack.push(100)
myStack.push(200)
myStack.push(300)
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.pop());

console.log(myStack.items)