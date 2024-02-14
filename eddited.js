// შექმენით პროგრამა, რომელიც მომხმარებლებს სთხოვს, Input-ად შეიყვანოს ხილის დასახელება (დიდი თუ პატარა ასოების მიუხედავად) და შემდეგ ბეჭდავს კალორიების რაოდენობას ამ ხილის ერთ პორციაში, ისე, როგორც FDA-ს ხილის პოსტერზე, რომელიც ასევე ხელმისაწვდომია ტექსტის სახით. ვივარაუდოთ, რომ მომხმარებლები შეიყვანენ ხილის სახელს ზუსტად ისე, როგორც წერია პოსტერში (მაგ. "strawberries" და არა "strawberry"). ყურადღება არ მიაქციოთ იმ შემოსულ მონაცემებს, რომელიც არ არის ხილი.

// const fruitData = [
//   { name: "apple", calories: 130 },
//   { name: "avocado", calories: 50 },
//   { name: "banana", calories: 110 },
//   { name: "Cantaloupe", calories: 50 },
//   { name: "Grapefruit", calories: 60 },
//   { name: "Grapes", calories: 90 },
//   { name: "Honeydew", calories: 50 },
//   { name: "Kiwifruit", calories: 90 },
//   { name: "Lemon", calories: 15 },
//   { name: "Lime", calories: 20 },
//   { name: "Nectarine", calories: 60 },
//   { name: "Orange", calories: 80 },
//   { name: "Peach", calories: 60 },
//   { name: "Pear", calories: 100 },
//   { name: "Pinapple", calories: 50 },
//   { name: "Plums", calories: 70 },
//   { name: "Strawberries", calories: 50 },
//   { name: "Sweet Cherries", calories: 100 },
//   { name: "Tangerine", calories: 50 },
//   { name: "Watermelon", calories: 80 },
// ];

// const prompt = require(`prompt-sync`)();

// function getCalories(fruitName) {
//   const fruit = fruitData.find(
//     (fruit) => fruit.name.toLowerCase() === fruitName.toLowerCase()
//   );

//   if (fruit) {
//     return `Calories: ${fruit.calories}`;
//   } else {
//     return `Sorry, we don't have information for ${fruitName}.`;
//   }
// }

// // Example usage
// const userInput = prompt("Fruit: ");
// const result = getCalories(userInput);

// console.log(result);

// დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.
// let myArray = ["apple", "banana", "orange", "grape"];
// let randomIndex = Math.floor(Math.random() * myArray.length);
// let removedElement = myArray.splice(randomIndex, 1)[0];
// console.log("Element removed: " + removedElement);
// console.log("Array after removal: " + myArray);

// დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.
// function mergeAndSortRandomArrays(arr1, arr2) {
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);
//   let mergedArray = arr1.concat(arr2);
//   mergedArray.sort((a, b) => a - b);

//   return mergedArray;
// }
// let randomArray1 = [5, 2, 8, 1, 7];
// let randomArray2 = [4, 9, 3, 6, 10];

// let mergedAndSortedArray = mergeAndSortRandomArrays(randomArray1, randomArray2);
// console.log("Random Array 1: " + randomArray1);
// console.log("Random Array 2: " + randomArray2);
// console.log("Merged and sorted array: " + mergedAndSortedArray);

// დაამატეთ ობიექტში ფუნქცია სახელად sayHello რომელიც დაპრინტავს ობიექტში სახელის values.
// let person = {
//   FirstName: "Mary",
//   LastName: "Kvirchiladze",
//   age: 28,
// };

// person.sayHello = function () {
//   console.log(`Hello ${this.FirstName}`);
// };
// person.sayHello();
