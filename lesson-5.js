const prompt = require(`prompt-sync`)();

// შექმენით პროგრამა, რომელიც მოგთხოვთ ნომრების სიას, მათ შორის გამოყოფილი სივრცეებით (spaces). პროგრამამ უნდა ამობეჭდოს ახალი სია, რომელიც შეიცავს მხოლოდ ლუწ რიცხვებს.
// let userInput = prompt("Enter a list of numbers separated by spaces: ");
// let numbersArray = userInput.split(" ").map(Number);
// let evenNumbers = numbersArray.filter((number) => number % 2 === 0);
// let sortedEvenNumbers = evenNumbers.sort((a, b) => a - b);
// console.log("Original Numbers: " + numbersArray);
// console.log("Even Numbers: " + sortedEvenNumbers);

// შექმენით პროგრამა, რომელიც ახარისხებს ყველა თანამშრომელს გვარის მიხედვით და ბეჭდავს მათ ეკრანზე ცხრილის ფორმატში.
// მონაცემები იქონიეთ ობიექტების მასივში.
// დამატებითი გამოწვევა:
// ჰკითხეთ მომხმარებელს, როგორ დალაგდეს ჩანაწერები. დაუშვით დახარისხება თარიღის, პოზიციის ან გვარის მიხედვით.

// let employees = [
//   {
//     FirstName: "John",
//     LastName: "Johnson",
//     Position: "Manager",
//     SeparationDate: "2016-12-31",
//   },
//   {
//     FirstName: "Tou",
//     LastName: "Xiong",
//     Position: "Software Engineer",
//     SeparationDate: "2016-10-05",
//   },
//   {
//     FirstName: "Michaela",
//     LastName: "Michaelson",
//     Position: "District Manager",
//     SeparationDate: "2015-12-19",
//   },
//   {
//     FirstName: "Jake",
//     LastName: "Jacobson",
//     Position: "Programmer",
//     SeparationDate: "",
//   },
//   {
//     FirstName: "Jacquelyn",
//     LastName: "Jackson",
//     Position: "DBA",
//     SeparationDate: "",
//   },
//   {
//     FirstName: "Sally",
//     LastName: "Weber",
//     Position: "Web Developer",
//     SeparationDate: "2015-12-18",
//   },
// ];

// // Prompt user for sorting criteria
// let sortBy = prompt(
//   "Enter how you want to sort (FirstName, LastName, Position, SeparationDate):"
// );

// // Validate user input
// if (!["firstName", "LastName", "Position", "SeparationDate"].includes(sortBy)) {
//   console.log("Invalid sorting criteria.");
// } else {
//   // Sort the employees array based on user input
//   employees.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

//   // Calculate maximum length for each column
//   let maxLengths = {};
//   employees.forEach((employee) => {
//     Object.keys(employee).forEach((key) => {
//       maxLengths[key] = Math.max(
//         maxLengths[key] || 0,
//         String(employee[key]).length
//       );
//     });
//   });

//   // Display the sorted information as a grid table with proper alignment
//   console.log(
//     "FirstName".padEnd(maxLengths.FirstName + 4) +
//       "LastName".padEnd(maxLengths.LastName + 4) +
//       "Position".padEnd(maxLengths.Position + 4) +
//       "SeparationDate"
//   );
//   employees.forEach((employee) => {
//     console.log(
//       String(employee.FirstName).padEnd(maxLengths.FirstName + 4) +
//         String(employee.LastName).padEnd(maxLengths.LastName + 4) +
//         String(employee.Position).padEnd(maxLengths.Position + 4) +
//         employee.SeparationDate
//     );
//   });
// }

// ჩანაწერების დახარისხება სასარგებლოა, მაგრამ ზოგჯერ საჭიროა შედეგების გაფილტვრა, რათა იპოვოთ ან აჩვენოთ მხოლოდ ის, რასაც ეძებთ.
// მოცემული მონაცემებთა ნაკრების გათვალისწინებით:
// // შექმენით პროგრამა, რომელიც საშუალებას აძლევს მომხმარებელს, აღმოაჩინოს ის ჩანაწერები, რომელიც ემთხვევა მის საძიებო სტრიქონს. უნდა მოხდეს საძიებო სტრიქონის შედარება სახელის ან გვარის ველთან.
// დამატებითი გამოწვევა:
// ჰკითხეთ მომხმარებელს, როგორ დალაგდეს ჩანაწერები. დაუშვით დახარისხება თარიღის, პოზიციის ან გვარის მიხედვით.
// let employees = [
//   {
//     FirstName: "John",
//     LastName: "Johnson",
//     Position: "Manager",
//     SeparationDate: "2016-12-31",
//   },
//   {
//     FirstName: "Tou",
//     LastName: "Xiong",
//     Position: "Software Engineer",
//     SeparationDate: "2016-10-05",
//   },
//   {
//     FirstName: "Michaela",
//     LastName: "Michaelson",
//     Position: "District Manager",
//     SeparationDate: "2015-12-19",
//   },
//   {
//     FirstName: "Jake",
//     LastName: "Jacobson",
//     Position: "Programmer",
//     SeparationDate: "",
//   },
//   {
//     FirstName: "Jacquelyn",
//     LastName: "Jackson",
//     Position: "DBA",
//     SeparationDate: "",
//   },
//   {
//     FirstName: "Sally",
//     LastName: "Weber",
//     Position: "Web Developer",
//     SeparationDate: "2015-12-18",
//   },
// ];
// let searchString;
// do {
//   searchString = prompt("Enter a search string (at least 3 characters):");
// } while (!searchString || searchString.length < 2);

// // Filter the employees array based on the validated search string
// let filteredEmployees = employees.filter((employee) =>
//   Object.values(employee).some((value) =>
//     String(value).toLowerCase().includes(searchString.toLowerCase())
//   )
// );

// if (filteredEmployees.length > 1) {
//   // Prompt user for sorting criteria
//   let sortBy = prompt(
//     "Enter how you want to sort the results (FirstName, LastName, Position, SeparationDate):"
//   );

//   // Validate user input
//   if (
//     ["FirstName", "LastName", "Position", "SeparationDate"].includes(sortBy)
//   ) {
//     // Sort the filtered employees array based on user input
//     filteredEmployees.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
//   } else {
//     console.log("Invalid sorting criteria. Results will not be sorted.");
//   }
// }

// // Calculate maximum length for each column
// let maxLengths = {};
// filteredEmployees.forEach((employee) => {
//   Object.keys(employee).forEach((key) => {
//     maxLengths[key] = Math.max(
//       maxLengths[key] || 0,
//       String(employee[key]).length
//     );
//   });
// });

// // Display the filtered information as a grid table with proper alignment
// console.log(
//   "Name".padEnd(maxLengths.FirstName + 4) +
//     "Position".padEnd(maxLengths.Position + 4) +
//     "Separation Date"
// );
// filteredEmployees.forEach((employee) => {
//   console.log(
//     String(employee.FirstName).padEnd(maxLengths.FirstName + 4) +
//       String(employee.LastName).padEnd(maxLengths.LastName + 4) +
//       String(employee.Position).padEnd(maxLengths.Position + 4) +
//       employee.SeparationDate
//   );
// });

// შექმენით ობიექტი სახელად Person,ობიექტს ექნება სახელი,გვარი,ასაკი.
// let person = {
//   FirstName: "Mary",
//   LastName: "Kvirchiladze",
//   age: 28,
// };

// დაამატეთ ობიექტში ფუნქცია სახელად sayHello რომელიც დაპრინტავს ობიექტში სახელის values.
// let person = {
//   FirstName: "Mary",
//   LastName: "Kvirchiladze",
//   age: 28,
//   seyHello: function () {
//     console.log(`Hello  ${this.FirstName}`);
//   },
// };
// person.seyHello();

// წაშალეთ ასაკის property.
// let person = {
//   FirstName: "Mary",
//   LastName: "Kvirchiladze",
//   age: 28,
//   seyHello: function () {
//     console.log(`Hello  ${this.FirstName}`);
//   },
// };
// delete person.age;
// console.log(person);

// დაამატეთ ობიექტში job.
// let person = {
//   FirstName: "Mary",
//   LastName: "Kvirchiladze",
//   age: 28,
//   seyHello: function () {
//     console.log(`Hello  ${this.FirstName}`);
//   },
// };
// person.job = "Mentor";
// console.log(person);

// დაამატეთ ობიექტში ფუნქცია რომელიც დააბრუნებს ობიექტის job-ის სიგრძეს.
// let person = {
//   FirstName: "Mary",
//   LastName: "Kvirchiladze",
//   age: 28,
//   job: "Mentor",
//   seyHello: function () {
//     console.log(`Hello  ${this.FirstName}`);
//   },
//   jobLength: function () {
//     console.log(`Length of value of "job" ${this.job.length}`);
//   },
// };
// person.jobLength();

// ამის შემდეგ დაპრინტეთ უბრალოდ ობიექტში არსებული მეთოდების რაოდენობა.
// let person = {
//   FirstName: "Mary",
//   LastName: "Kvirchiladze",
//   age: 28,
//   job: "Mentor",
//   seyHello: function () {
//     console.log(`Hello  ${this.FirstName}`);
//   },
//   jobLength: function () {
//     console.log(`Length of value of "job" ${this.job.length}`);
//   },
// };

// function countMethods(obj) {
//   let methodCount = 0;

//   for (let key in obj) {
//     if (typeof obj[key] === "function") {
//       methodCount++;
//     }
//   }
//   return methodCount;
// }
// console.log("Number of methods:", countMethods(person));

// გაარკვიეთ ,აქვს თუარა ობიექტს gender property ,თუ არაქვს ,მაშინ შექმენით მეთოდი .
// let person = {
//   FirstName: "Mary",
//   LastName: "Kvirchiladze",
//   age: 28,
//   job: "Mentor",
//   seyHello: function () {
//     console.log(`Hello  ${this.FirstName}`);
//   },
//   jobLength: function () {
//     console.log(`Length of value of "job" ${this.job.length}`);
//   },
// };

// function addGenderIfMissing(obj) {
//   if (obj.hasOwnProperty("Gender")) {
//     console.log(`Gender of person is ${person.Gender}`);
//   } else {
//     let response = prompt(
//       "The object does not have a 'Gender' property. Do you want to add it? (yes/no)"
//     );

//     if (response && response.toLowerCase() === "yes") {
//       let gender = prompt("Enter your gender:");
//       obj.Gender = gender;
//       console.log("Updated Person Object:", person);
//     }
//   }
// }
// addGenderIfMissing(person);

// გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა property.
// let person = {
//   FirstName: "Mary",
//   LastName: "Kvirchiladze",
//   age: 28,
//   job: "Mentor",
//   Gender: "female",
//   seyHello: function () {
//     console.log(`Hello  ${this.FirstName}`);
//   },
//   jobLength: function () {
//     console.log(`Length of value of "job" ${this.job.length}`);
//   },
// };

// function logAllKeys(obj) {
//   for (let key in obj) {
//     console.log(key);
//   }
// }
// logAllKeys(person);

// გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა value.
// let person = {
//   FirstName: "Mary",
//   LastName: "Kvirchiladze",
//   age: 28,
//   job: "Mentor",
//   Gender: "female",
//   seyHello: function () {
//     console.log(`Hello  ${this.FirstName}`);
//   },
//   jobLength: function () {
//     console.log(`Length of value of "job" ${this.job.length}`);
//   },
// };
// function logAllValues(obj) {
//   for (let key in obj) {
//     console.log(obj[key]);
//   }
// }
// logAllValues(person);
