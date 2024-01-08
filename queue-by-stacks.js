// Implement queue using stack

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(val) {
    this.stack1.push(val);
  }

  dequeue(){
    let top = this.stack1.length -1;
    if(top == -1){
        return null;
    }
    //push elements into this.stack2
    while(top >= 0){
        this.stack2.push(this.stack1.pop())
        top--;
    }
    // pop elemment from this.stack2
    let pop = this.stack2.pop();

    let top2 = this.stack2.length-1;

    //push elements to this.stack1
    while(top2 >= 0){
        this.stack1.push(this.stack2.pop())
        top2--;
    }

    return pop;
  }

  display(){
    console.log("queue=>")
    for(let val of this.stack1) console.log(val)
  }
}

let q = new Queue();

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.display()
q.dequeue()
q.display()
q.enqueue(50)
q.display()




