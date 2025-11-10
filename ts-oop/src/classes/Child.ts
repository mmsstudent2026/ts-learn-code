import Person from "./Person";

class Child extends Person {
  public showCar() {
    // console.log(this.money);
    return this.myCar;
  }
}

export default Child;
