class Person {
  name;
  age;
  email;

  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  print() {
    return `my name is ${this.name} and my age is ${this.age} and my email is ${this.email}`;
  }
}
const obj1 = new Person("Rahat, 20,rahat@gmail.com");
console.log(obj1.print());
