class Parent {
  #name;
  constructor(name) {
    this.#name = name;
  }

  getName() {
    console.log("name from parent=>", this.#name, null ?? true);
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

class Child2 extends Child {
   static root = "banka"
  constructor(name) {
    super(name);
  }
  getName() {
    console.log("name from child2=>", this.name, null ?? true, Child2.root);
  }
}

let c = new Child("charan");
c.getName();

let c2 = new Child2("kiran");
c2.getName();
