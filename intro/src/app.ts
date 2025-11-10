// type NameType = string;
// type WeightType = string | number;

// let myName: NameType = "hein htet zan";

// let myAge: number = 18;

// let hasGf: boolean = false;

// let weight: WeightType = 98;

// weight = "98 kg";

// // let marks : number[] = [45,60,55];

// let marks: Array<number> = [45, 60, 55];

// // let fruits : string[] = ["apple", "orange", "mango"];
// let fruits: Array<string> = ["apple", "orange", "mango"];

// // let info: Array<number | string | boolean> = ["hhz", 18, false, 500000];
// let info: (number | string | boolean)[] = ["hhz", 18, false, 500000];

// let diceFaces: readonly number[] = [1, 2, 3, 4, 5, 6];

// function last<T>(arr: Array<T>): T | undefined {
//   return arr[arr.length - 1];
// }

// // console.log(last(fruits));
// // console.log(last(marks));
// // console.log(last(info));

// // console.log(diceFaces[0]);

// // diceFaces[0] = 7;

// type User = {
//   name: string;
//   age: number;
//   hasJob: boolean;
//   //   skill: Array<String>;
// };

// let user1: Omit<User, "name" | "age"> = {
//   //   name: "mg mg",
//   // age: 18,
//   hasJob: false,
//   //   skill: ["html", "css", "js"],
// };

// // console.log(user1.name);

// // user1.name = "aung aung"

// console.log(user1);

// let use2: User = {
//   name: "kyaw Kyaw",
//   age: 20,
//   hasJob: true,
//   //   skill: ["react", "next", "tailwind"],
// };

// let coordinates: [number, number] = [10, 20];

// enum Color {
//   Red,
//   Green,
//   Blue,
// }

// let myFavColor: Color = Color.Blue;

// // console.log(myFavColor);

// type direction = "left" | "right" | "up" | "down";

// type gender = "male" | "female";

// let currentDirection: direction = "up";

// let myGender: gender = "male";

// // console.log(myGender);

// const area = (w: number, h: number): number => {
//   return w * h;
// };

// // console.log(area(15, 50));

// // console.log(area(12, 6));

// const showConsole = (inputText: string): void => {
//   console.log(inputText);
// };

// // showConsole("hello");

// // showConsole(123)

// // const x: number[][] = [
// //   [1, 4, 6],
// //   [3, 2, 1],
// //   [5, 2, 6],
// // ];

// let x: Array<Array<number>> = [
//   [1, 4, 6],
//   [3, 2, 1],
//   [5, 2, 6],
// ];

// // x = [[1, 2, 3]];

// type KeyValuePairs = [string, any][];

// let y: KeyValuePairs = [
//   ["a", 1],
//   ["b", 2],
// ];
