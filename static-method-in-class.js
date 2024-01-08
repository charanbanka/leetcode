class MathOperations {
  #num = 10;
  constructor() {
    this.names = "karan";
  }
  //   static name = "charan";
  getNum(){
    console.log(this.#num)
  }

  static add(x, y) {
    let r = new MathOperations();
    r.getNum()
    console.log("name", r.getNum());
    return x + y;
  }

  static multiply(x, y) {
    return x * y;
  }
}

console.log(MathOperations.add(5, 3)); // Output: 8
console.log(MathOperations.multiply(2, 4)); // Output: 8
