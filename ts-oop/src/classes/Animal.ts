class Animal {
  public name: string;
  public lifeSpan: number;

  constructor(name: string, lifeSpan: number) {
    this.name = name;
    this.lifeSpan = lifeSpan;
  }

  public makeSound() {
    return "animal can make sound";
  }
}


export default Animal;