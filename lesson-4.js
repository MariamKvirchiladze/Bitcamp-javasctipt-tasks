const prompt = require(`prompt-sync`)();
const crypto = require("crypto");

// შექმენით Magic 8 Ball თამაშის პროგრამა, რომელიც მოთხოვს მომხმარებელს რაიმე კითხვის შეყვანას და პასუხად შემთხვევითობის პრინციპით გამოიტანს "Yes", "No" ან "Ask again later".

// function main() {
//   provideRandomAnswer();
// }
// main();
// function getRandomAnswer() {
//   const answers = ["Yes", "No", "Ask again later"];
//   const randomIndex = crypto.randomInt(answers.length);
//   return answers[randomIndex];
// }

// function validateUserInput(input) {
//   return (
//     typeof input === "string" && input.trim() !== "" && input.includes("?")
//   );
// }

// function provideRandomAnswer() {
//   let userQuestion;

//   do {
//     userQuestion = prompt("Ask a question:");
//   } while (!validateUserInput(userQuestion));

//   const randomAnswer = getRandomAnswer();
//   console.log(`Your question: ${userQuestion}`);
//   console.log(`Answer: ${randomAnswer}`);
// }

// შექმნით პროგრამა, რომელიც შემთხვევითობის პრინციპით აარჩევს შეჯიბრში მოგებულ მონაწილეს. პროგრამამ უნდა შეგეკითხოთ სახელი იქამდე, სანამ მომხმარებელი input-ში არაფერს არ ჩაწერს და უბრალოდ enter-ს არ დააჭერს. ამის შემდეგ შემთხვევით უნდა აირჩიოს მოგებული მონაწილე.

// function main() {
//   const participantNames = getParticipantNames();

//   if (participantNames.length > 0) {
//     selectWinner(participantNames);
//     askForPlace("second", participantNames);
//     askForPlace("third", participantNames);
//   } else {
//     console.log("No participants entered. Exiting program.");
//   }
// }
// main();

// function getRandomIndex(arrayLength) {
//   return crypto.randomInt(0, arrayLength);
// }

// function validateUserInput(input) {
//   return typeof input === "string" && input.trim() !== "";
// }

// // Function to prompt the user for participant names until an empty string is entered
// function getParticipantNames() {
//   const names = [];

//   while (true) {
//     const participantName = prompt(
//       "Enter a participant name (or press Enter to finish):"
//     );

//     if (participantName === "") {
//       break;
//     }

//     if (validateUserInput(participantName)) {
//       names.push(participantName);
//     } else {
//       console.log("Invalid input. Please enter a valid name.");
//     }
//   }

//   return names;
// }

// function selectWinner(names) {
//   const winnerIndex = getRandomIndex(names.length);
//   const winner = names[winnerIndex];
//   names.splice(winnerIndex, 1);
//   console.log(`${winner} is the winner!`);
// }

// function askForPlace(place, names) {
//   const answer = prompt(
//     `Do you want to get the name for ${place} place? (yes/no)`
//   );

//   if (answer.toLowerCase() === "yes" && names.length > 0) {
//     const index = getRandomIndex(names.length);
//     const selectedName = names[index];
//     names.splice(index, 1);
//     console.log(`${selectedName} is ${place} place!`);
//   }
// }

// შექმენით პაროლების გენერატორი პროგრამა, რომელიც მომხმარებელს შეეკითხება პაროლის მინიმალური სიმბოლოების რაოდენობას, სპეციალური სიმბოლოების რაოდენობასა და რიცხვების რაოდენობას პაროლში. ამის შემდეგ დააგენერირეთ შემთხვევითობის პრინციპით პაროლი, მიღებულ ინფორმაციაზე დაყრდნობით.

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function promptUser(question) {
//   return new Promise((resolve) => {
//     rl.question(question, resolve);
//   });
// }

// async function generatePassword() {
//   // Validate user input
//   const length = parseInt(await promptUser("What's the minimum length? "));
//   if (isNaN(length) || length <= 0) {
//     console.log(
//       "Invalid input. Please enter a positive number for the length."
//     );
//     return;
//   }

//   const specialCharCount = parseInt(
//     await promptUser("How many special characters? ")
//   );
//   const numberCount = parseInt(await promptUser("How many numbers? "));

//   if (
//     isNaN(specialCharCount) ||
//     isNaN(numberCount) ||
//     specialCharCount < 0 ||
//     numberCount < 0
//   ) {
//     console.log(
//       "Invalid input. Please enter non-negative numbers for special characters and numbers."
//     );
//     return;
//   }

//   const requireCapital =
//     (
//       await promptUser("Do you want at least 1 capital letter? (yes/no) ")
//     ).toLowerCase() === "yes";

//   // Define character sets
//   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";
//   const numberChars = "0123456789";

//   // Create an array to hold the character sets based on user requirements
//   const charSets = [lowercaseChars];
//   if (requireCapital) {
//     charSets.push(uppercaseChars);
//   }
//   if (specialCharCount > 0) {
//     charSets.push(specialChars);
//   }
//   if (numberCount > 0) {
//     charSets.push(numberChars);
//   }

//   // Ensure user-specified counts are valid
//   if (length < specialCharCount + numberCount) {
//     console.log(
//       "Invalid input. Total length should be greater than or equal to the sum of special characters and numbers."
//     );
//     return;
//   }

//   // Generate password
//   let password = "";

//   // Add at least one character from each character set
//   charSets.forEach((charSet) => {
//     const randomIndex = crypto.randomInt(charSet.length);
//     password += charSet.charAt(randomIndex);
//   });

//   // Add remaining characters
//   for (let i = password.length; i < length; i++) {
//     const randomCharSet = charSets[crypto.randomInt(charSets.length)];
//     const randomIndex = crypto.randomInt(randomCharSet.length);
//     password += randomCharSet.charAt(randomIndex);
//   }

//   // Shuffle the password
//   password = password
//     .split("")
//     .sort(() => (crypto.randomInt(2) ? 1 : -1))
//     .join("");

//   return password;
// }

// async function main() {
//   const generatedPassword = await generatePassword();
//   if (generatedPassword) {
//     console.log("Your password is");
//     console.log(generatedPassword);
//   }
//   rl.close();
// }

// main();

// შექმენით პროგრამა, რომელიც მომხმარებლებს სთხოვს, Input-ად შეიყვანოს ხილის დასახელება (დიდი თუ პატარა ასოების მიუხედავად) და შემდეგ ბეჭდავს კალორიების რაოდენობას ამ ხილის ერთ პორციაში, ისე, როგორც FDA-ს ხილის პოსტერზე, რომელიც ასევე ხელმისაწვდომია ტექსტის სახით. ვივარაუდოთ, რომ მომხმარებლები შეიყვანენ ხილის სახელს ზუსტად ისე, როგორც წერია პოსტერში (მაგ. "strawberries" და არა "strawberry"). ყურადღება არ მიაქციოთ იმ შემოსულ მონაცემებს, რომელიც არ არის ხილი.

// const fruits = [
//   "apple",
//   "avocado",
//   "banana",
//   "Cantaloupe",
//   "Grapefruit",
//   "Grapes",
//   "Honeydew",
//   "Kiwifruit",
//   "Lemon",
//   "Lime",
//   "Nectarine",
//   "Orange",
//   "Peach",
//   "Pear",
//   "Pinapple",
//   "Plums",
//   "Strawberries",
//   "Sweet Cherries",
//   "Tangerine",
//   "Watermelon",
// ];

// const calories = [
//   130, 50, 110, 50, 60, 90, 50, 90, 15, 20, 60, 80, 60, 100, 50, 70, 50, 100,
//   50, 80,
// ];

// function getCalories(fruitName) {
//   const index = fruits.findIndex(
//     (fruit) => fruit.toLowerCase() === fruitName.toLowerCase()
//   );

//   if (index !== -1) {
//     return `Calories: ${calories[index]}`;
//   } else {
//     return `Sorry, we don't have information for ${fruitName}.`;
//   }
// }

// // Example usage
// const userInput = prompt("Fruit: ");
// const result = getCalories(userInput);

// console.log(result);

// შექმენით პროგრამა, რომელიც შეიცავს თანამშრომლების სახელების სიას. ამობეჭდეთ სახელების სია, როდესაც პროგრამა პირველად გაეშვება. მოითხოვეთ თანამშრომლის სახელი და ამოიღეთ ეს კონკრეტული სახელი სიიდან. აჩვენეთ დარჩენილი თანამშრომლები, თითოეული ახალ ხაზზე.
// Initial array of names
// let employees = [
//   "John Smith",
//   "Jackie Jackson",
//   "Chris Jones",
//   "Amanda Cullen",
//   "Jeremy Goodwin",
// ];
// console.log("There are " + employees.length + " employees:");
// employees.forEach((employee) => {
//   console.log(employee);
// });

// let userInput = prompt("Enter an employee name to remove:");
// let cleanedInput = userInput.trim().toLowerCase();
// let index = employees.findIndex(
//   (employee) => employee.toLowerCase().trim() === cleanedInput
// );

// if (index !== -1) {
//   employees.splice(index, 1);

//   console.log("\nThere are " + employees.length + " employees:");
//   employees.forEach((employee) => {
//     console.log(employee);
//   });
// } else {
//   console.log(
//     "There is no employee with the name '" + userInput + "' in the list."
//   );
// }

// დაწერეთ პროგრამა, რომელიც input-ად ითხოვს ვებსაიტიდან მოსული response-ის დროს მილიწამებში. მან უნდა განაგრძოს მნიშვნელობების მოთხოვნა, სანამ მომხმარებელი არ ჩაწერს სიტყვას „done“. პროგრამამ უნდა დაბეჭდოს საშუალო დრო, მინიმალური დრო, მაქსიმალური დრო და სტანდარტული გადახრა.

// let numbers = [];

// function calculateAverage(arr) {
//   return arr.reduce((sum, num) => sum + num, 0) / arr.length;
// }

// function calculateStandardDeviation(arr) {
//   const average = calculateAverage(arr);
//   const squaredDifferences = arr.map((num) => Math.pow(num - average, 2));
//   const averageOfSquaredDifferences = calculateAverage(squaredDifferences);
//   return Math.sqrt(averageOfSquaredDifferences);
// }

// function displayResults(arr) {
//   console.log("\nNumbers: " + arr.join(", "));
//   console.log("The average is " + calculateAverage(arr) + ".");
//   console.log("The minimum is " + Math.min(...arr) + ".");
//   console.log("The maximum is " + Math.max(...arr) + ".");
//   console.log(
//     "The standard deviation is " +
//       calculateStandardDeviation(arr).toFixed(2) +
//       "."
//   );
// }

// while (true) {
//   let userInput = prompt("Enter a number (type 'done' to finish):");

//   if (userInput.toLowerCase() === "done") {
//     break;
//   }

//   let number = parseFloat(userInput);

//   if (!isNaN(number)) {
//     numbers.push(number);
//   } else {
//     console.log(
//       "Invalid input. Please enter a valid number or type 'done' to finish."
//     );
//   }
// }

// if (numbers.length > 0) {
//   displayResults(numbers);
// } else {
//   console.log("No numbers entered.");
// }

// დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.

// let numbers = [5, 10, 15, 20];
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log("The sum is: " + sum);

// დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.

// let numbers = [5, 10, 15, 20];
// function calculateAverage(arr) {
//   return arr.reduce((sum, num) => sum + num, 0) / arr.length;
// }
// console.log(calculateAverage(numbers));

// დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.
// let numbers = [5, 10, 15, 20];
// numbers.sort((a, b) => a - b);
// console.log("Sorted numbers: " + numbers);

// დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.
// დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.
// let numbers = [5, 10, 15, 20];
// let maxNumber = Math.max(...numbers);
// let minNumber = Math.min(...numbers);
// console.log("Maximum number: " + maxNumber);

// დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.
// let fruits = ["apple", "banana", "orange", "grape"];
// let isBananaInArray = fruits.includes("banana");
// console.log("Is 'banana' in the array? " + isBananaInArray);

// დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.
// let fruits = ["apple", "banana", "orange", "grape"];
// let elementAtIndex2 = fruits[2];
// console.log("Element at index 2: " + elementAtIndex2);

// დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.
// let fruits = ["apple", "banana", "orange", "banana", "grape", "banana"];
// let elementToCount = "banana";
// let occurrences = fruits.filter((fruit) => fruit === elementToCount).length;
// console.log(`Occurrences of '${elementToCount}': ${occurrences}`);

// დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.
// Example array of numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sumOfEvens = numbers.reduce(
//   (sum, num) => (num % 2 === 0 ? sum + num : sum),
//   0
// );
// console.log("Sum of even numbers: " + sumOfEvens);

// დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.
// let numbers = [10, 5, 8, 2, 7, 1, 15, 9];
// let sortedNumbers = numbers.sort((a, b) => b - a);
// let secondHighest = sortedNumbers[1];
// console.log("Second-highest number: " + secondHighest);

// დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 2, 3, 4, 5];

// let array3 = [1, 2, 3, 4, 5, 6];
// let array4 = [1, 2, 3, 4, 5, 7];

// function areArraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// let isEqual = areArraysEqual(array1, array2);
// let isEqual2 = areArraysEqual(array3, array4);
// console.log("Are the array 1 and array 2 equal? " + isEqual);
// console.log("Are the array 3 and array 4 equal? " + isEqual2);

// დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.
// function mergeSortedArrays(arr1, arr2) {
//   let mergedArray = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }
//   return mergedArray;
// }

// let sortedArray1 = [1, 3, 5, 7, 9];
// let sortedArray2 = [2, 4, 6, 8, 10];
// let mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);
// console.log(sortedArray1);
// console.log(sortedArray2);
// console.log("Merged and sorted array: " + mergedArray);

// დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.
// let originalArray = ["banana", "apple", "orange", "grape", "cherry"];
// let sortedArray = [...originalArray].sort();
// console.log("Original array: " + originalArray);
// console.log("Sorted array: " + sortedArray);

// დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.
// function findCommonElements(...arrays) {
//   if (arrays.length === 0) {
//     return [];
//   }
//   let commonElements = arrays[0];
//   for (let i = 1; i < arrays.length; i++) {
//     commonElements = commonElements.filter((element) =>
//       arrays[i].includes(element)
//     );
//   }
//   return commonElements;
// }
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [2, 3, 4, 5, 6];
// let array3 = [3, 4, 5, 6, 7];
// let result = findCommonElements(array1, array2, array3);
// console.log("Common elements: " + result);

// შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.
// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
// };
// console.log(car);

// დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.
// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   start: function () {
//     console.log("The car is starting!");
//   },
// };
// car.start();

// შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.
// let person = {
//   name: "Mary",
//   age: 28,
//   city: "Zestaphoni",
// };
// console.log(person.name);

// დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.

// let person = {
//   name: "Mary",
//   age: 28,
//   city: "Zestaphoni",
// };
// person.job = "Mentor";
// console.log(person);
// დაწერეთ პროგრამა, რომელიც:

// მოუწოდებს მომხმარებელს, აირჩიოს თამაშის დონე, . თუ მომხმარებელი არ ჩაწერს 1, 2 ან 3-ს, პროგრამამ იგივე შეკითხვა კვლავ უნდა დასვას.

// შემთხვევითობის პრინციპით წარმოქმნის ათ (10) მათემატიკურ ამოცანას, ფორმატირებულს, როგორც X + Y = , სადაც თითოეული X და Y არის დადებითი მთელი რიცხვი.
// სთხოვს მომხმარებელს, გადაჭრას თითოეული ეს პრობლემა. თუ პასუხი არ არის სწორი (ან საერთოდ, რიცხვი არაა), პროგრამამ უნდა დაწეროს EEE და კვლავ იგივე ამოცანა დაუბეჭდოს მომხმარებელს, რაც მომხმარებელს საშუალებას მისცემს, ამ პრობლემის გადასაჭრელად სულ სამი ცდა გამოიყენოს. თუ მომხმარებელი სწორ პასუხს სამი ცდის შემდეგაც ვერ დაწერს, პროგრამამ სწორი პასუხი თვითონ უნდა დაუწეროს.

// საბოლოო ჯამში, პროგრამამ უნდა დაბეჭდოს მომხმარებლის ქულა: სწორი პასუხების რაოდენობა 10-დან.

// function chooseLevel() {
//   let level;
//   do {
//     level = Number(prompt("Enter the level: "));
//   } while (level < 1 || level > 3 || isNaN(level));
//   switch (level) {
//     case 1:
//       level = "10";
//       break;
//     case 2:
//       level = "100";
//       break;
//     case 3:
//       level = "1000";
//       break;
//   }
//   return level;
// }
// const generateRandomNumber = (level) => Math.floor(Math.random() * level);
// function generateOperator() {
//   return Math.random() < 0.5 ? "+" : "-";
// }
// function generateMathProblem(level) {
//   let x = generateRandomNumber(level);
//   let y = generateRandomNumber(level);
//   let operator = generateOperator();
//   if (operator === "-" && x < y) {
//     [x, y] = [y, x];
//   }
//   return [x, y, operator];
// }

// function main() {
//   let userResult;
//   let wrongCounter = 0;
//   let level = chooseLevel();
//   let numProblems = parseInt(
//     prompt("How many problems do you want to solve? ")
//   );
//   let score = 0;

//   for (let i = 0; i < numProblems; i++) {
//     let [x, y, operator] = generateMathProblem(level);
//     let correctAnswer = operator === "+" ? x + y : x - y;

//     do {
//       userResult = Number(prompt(`${x} ${operator} ${y} = `));
//       if (userResult !== correctAnswer) {
//         console.log("EEE");
//         wrongCounter++;
//         if (wrongCounter === 3) {
//           console.log(`${x} + ${y} = ${correctAnswer}`);
//           break;
//         }
//       } else {
//         score++;
//       }
//     } while (userResult !== correctAnswer);
//     console.log(userResult);
//   }
//   console.log("Your score: " + score);
// }
// main();
