import type { Gender } from "../types/PersonTypes";

class Person {
  public readonly myName: string;
  public myAge: number;
  public myGender: Gender;

  protected myCar: string = "Lambo";

  private _money: number = 0;
  // getter and setter (encapsulation)

  public getMoney(): number {
    return this._money;
  }

  public depositMoney(amount: number) {
    this._money += amount;
  }

  public withDrawMoney(amount: number) {
    this._money -= amount;
  }

  constructor(name: string, age: number, gender: Gender) {
    this.myName = name;
    this.myAge = age;
    this.myGender = gender;
  }

  intro() {
    return `My name is ${this.myName} and ${this.myAge} years old`;
  }
}

export default Person;
