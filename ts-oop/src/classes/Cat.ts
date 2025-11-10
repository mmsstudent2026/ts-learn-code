import Animal from "./Animal";

class Cat extends Animal {
  // overwrite
  public makeSound(): string {
    return "mow mow";
  }
}
