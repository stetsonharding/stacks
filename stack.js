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
    
        console.log("Deleted item :" + deletedItem) 
    }

    //checks top element in the stack.
    peek(){
        if(this.count === 0) return undefined;
        return this.items[this.count - 1]
    }

    //Check if stack is empty
    emptyStack(){
       return this.count === 0 ? 'Stack is empty' : `There are ${this.count} items on your stack`
    }


    //check stack size
    size(){
        console.log(`stack size: ${this.count}`)
        return this.count;
    }

    //print elements in stack
    print(){
        let stack = "Items in your stack: "

        for(let i = 0; i < this.count; i++){
        stack += `${this.items[i]} `
        }
        console.log(stack)
    }

    //clears the stack
    clear(){
    this.items = []
    this.count = 0;
    return this.items;
    }
}



//Testing methods.
    const myStack = new Stack();
    myStack.push(100)
    myStack.push(200)
    myStack.print();
    myStack.push(300)
    myStack.print();
    myStack.pop();

    console.log(myStack.peek())
    console.log(myStack.emptyStack())


    console.log(myStack.items)

    console.log(myStack.clear())
