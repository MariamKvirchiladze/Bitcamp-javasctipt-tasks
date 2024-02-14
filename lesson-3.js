const prompt = require(`prompt-sync`)();

// შექმენით პროგრამა, რომელიც ადარებს ორ სტრიქონს და ადგენს არის თუ არა ისინი ანაგრამა (სიტყვა, რომელიც წარმოიქმნება სხვა სიტყვის ასოების გადაადგილებით). პროგრამამ უნდა მოითხოვოს ორივე input-ის წინადადება და პასუხი ისე დაბეჭდოს, როგორც მაგალითშია ნაჩვენები.

// function main() {
//   const firstString = prompt("Enter the first string:");
//   const secondString = prompt("Enter the second string:");
//   if (isAnagram(firstString, secondString)) {
//     console.log(`"${firstString}" and "${secondString}" are anagrams.`);
//   } else {
//     console.log(`"${firstString}" and "${secondString}" are not anagrams.`);
//   }
// }
// main();
// function isAnagram(str1, str2) {
//   const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
//   const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();
//   if (cleanStr1.length !== cleanStr2.length) {
//     console.log("the lengths are different, they can't be anagrams");
//     return false;
//   }
//   return (
//     cleanStr1.split("").sort().join("") === cleanStr2.split("").sort().join("")
//   );
// }

// ექმენით პროგრამა, რომელიც განსაზღვრავს მოცემული პაროლის სიძლიერეს ამ წესების საფუძველზე:

// • ძალიან სუსტი პაროლი შეიცავს მხოლოდ ციფრებს და რვა სიმბოლოზე ნაკლებია. • სუსტი პაროლი შეიცავს მხოლოდ ასოებს და რვა სიმბოლოზე ნაკლებია. • ძლიერი პაროლი შეიცავს ასოებს და მინიმუმ ერთ რიცხვს, ასევე, მინიმუმ რვა სიმბოლოს. • ძალიან ძლიერი პაროლი შეიცავს ასოებს, ციფრებს და სპეციალურ სიმბოლოებს და არის მინიმუმ რვა სიმბოლოს სიგრძის.

// const PasswordStrength = {
//   VERY_WEAK: 0,
//   WEAK: 1,
//   STRONG: 2,
//   VERY_STRONG: 3,
// };

// function main() {
//   const password = prompt("Enter your password: ");
//   const strengthResult = passwordValidator(password);

//   switch (strengthResult) {
//     case PasswordStrength.VERY_WEAK:
//       console.log(`The password "${password}" is too weak.`);
//       break;
//     case PasswordStrength.WEAK:
//       console.log(`The password "${password}" is weak.`);
//       break;
//     case PasswordStrength.STRONG:
//       console.log(`The password "${password}" is strong.`);
//       break;
//     case PasswordStrength.VERY_STRONG:
//       console.log(`The password "${password}" is very strong`);
//       break;
//     default:
//       console.log("Password does not meet any of the specified criteria.");
//   }
// }
// main();

// function passwordValidator(password) {
//   const lengthRequirement = 8;
//   const hasLetters = /[a-zA-Z]/.test(password);
//   const hasNumbers = /\d/.test(password);
//   const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(password);

//   if (password.length < lengthRequirement && hasNumbers) {
//     return PasswordStrength.VERY_WEAK;
//   } else if (password.length < lengthRequirement && hasLetters) {
//     return PasswordStrength.WEAK;
//   } else if (password.length >= lengthRequirement && hasLetters && hasNumbers) {
//     if (hasSpecialCharacters) {
//       return PasswordStrength.VERY_STRONG;
//     } else {
//       return PasswordStrength.STRONG;
//     }
//   } else {
//     return -1;
//   }
// }

// // შექმენით პროგრამა, რომელიც დაგეხმარებათ განსაზღვროთ, რამდენი თვე დასჭირდება საკრედიტო ბარათის ბალანსის დაფარვას. პროგრამამ უნდა სთხოვოს მომხმარებელს შემდეგი ინფორმაციის შეყვანა: საკრედიტო ბარათის ბალანსი, ბარათის APR (წლიური საპროცენტო განაკვეთი), და თვიური გადასახადი. შემდეგ პროგრამამ უნდა დააბრუნოს თვეების რაოდენობა. ფორმულა შემდეგია:

// // • n არის თვეების რაოდენობა. • i არის დღიური მაჩვენებელი (APR / 365). • b - ბალანსი. • p - ყოველთვიური გადასახდელი თანხა.

// const b = Number(prompt(`What is your balance? `));
// const APR =
//   Number(prompt(`What is the APR on the card (as a percent)? `)) / 100;
// const i = APR / 365;
// const p = Number(prompt(`What is the monthly payment you can make? `));

// const n =
//   (-(1 / 30) * Math.log(1 + (b / p) * (1 - Math.pow(1 + i, 30)))) /
//   Math.log(1 + i);
// console.log(`It will take you ${Math.ceil(n)} months to pay off this card.`);

// დაწერეთ პროგრამა, რომელიც მოგთხოვთ სახელს, გვარს, თანამშრომლის ID-ს და ZIP კოდს. დარწმუნდით, რომ input-ები ვალიდურია შემდეგი წესების მიხედვით:

// • სახელი უნდა იყოს შევსებული. • გვარი უნდა იყოს შევსებული. • სახელი და გვარი უნდა იყოს მინიმუმ ორი სიმბოლოს სიგრძის. • თანამშრომლის ID არის AA-1234 ფორმატში - ორი ასო, დეფისი და ოთხი რიცხვი. • ZIP კოდი უნდა იყოს რიცხვი.

// არასწორ მონაცემებზე აჩვენეთ შესაბამისი შეცდომის შეტყობინებები.

// function main() {
//   const firstName = prompt("Enter the first name: ");
//   const lastName = prompt("Enter the last name: ");
//   const employeeID = prompt("Enter an employee ID: ");
//   const zipCode = prompt("Enter the ZIP code: ");

//   const errors = [];
//   errors.push(validateFirstName(firstName));
//   errors.push(validateLastName(lastName));
//   errors.push(validateZIPCode(zipCode));
//   errors.push(validateEmployeeID(employeeID));

//   const hasErrors = errors.some((error) => error !== null);
//   if (hasErrors) {
//     errors.forEach((error) => {
//       if (error !== null) {
//         console.log(error);
//       }
//     });
//   } else {
//     console.log("There were no errors found.");
//   }
// }
// main();
// function validateFirstName(firstName) {
//   if (firstName.length < 2 || !/^[a-zA-Z]+$/.test(firstName.trim())) {
//     return `${firstName} is not a valid first name. It is too short or contains non-letter characters.`;
//   }
//   return null;
// }
// function validateLastName(lastName) {
//   if (lastName.length < 2 || !/^[a-zA-Z]+$/.test(lastName.trim())) {
//     return "The last name must be filled in and contain only letters.";
//   }
//   return null;
// }

// function validateZIPCode(zipCode) {
//   if (!/^\d+$/.test(zipCode.trim())) {
//     return "The ZIP code must be numeric.";
//   }
//   return null;
// }

// function validateEmployeeID(employeeID) {
//   if (!/^[A-Za-z]{2}-\d{4}$/.test(employeeID.trim())) {
//     return `${employeeID} is not a valid ID. It should have the format "AB-1234".`;
//   }
//   return null;
// }

// შექმენით პროგრამა, რომელიც მომხმარებელს მოუწოდებს, input-ად შეიყვანოს ცვლადის სახელი camel case-ში, პროგრამამ კი უნდა დაბეჭდოს იგივე სახელი snake case-ში. დაუშვით, რომ მომხმარებლის ჩანაწერი აუცილებლად camel case სტილში იქნება.

// function convertToUnderscore(input) {
//   if (!/[A-Z]/.test(input)) {
//     return "Invalid input: Camel case requires at least one uppercase letter.";
//   }
//   const regex = /([a-z])([A-Z])/g;
//   const convertedString = input.replace(regex, "$1_$2").toLowerCase();

//   return convertedString;
// }

// function main() {
//   const camelCaseInput = prompt("Enter a camel case string: ");
//   const underscoreFormat = convertToUnderscore(camelCaseInput);
//   console.log(underscoreFormat);
// }
// main();

// დავუშვათ, რომ მანქანა ყიდის კოკა-კოლას ბოთლებს 50 ცენტად. მასში მხოლოდ შემდეგი მონეტების ჩაგდება შეგვიძლია: 25-ცენტიანი, 10-ცენტიანი და 5-ცენტიანი.

// დაწერეთ პროგრამა, რომელიც Input-ად სთხოვს მომხმარებელს მონეტის "ჩაგდებას" მანამ, სანამ თანხა 50 ცენტს არ მიაღწევს. პროგრამამ ყოველი მონეტის "ჩაგდების" შემდეგ მომხმარებელს უნდა აცნობოს, რამდენი დარჩა გადასახდელი და კვლავ სთხოვოს input-ის შეყვანა. მას შემდეგ, რაც მომხმარებელი მინიმუმ 50 ცენტს შეიტანს, დაბეჭდეთ, რამდენი ცენტი ხურდა ეკუთვნის მას. დაუშვით, რომ მომხმარებელი მხოლოდ მთელ რიცხვებს შეიყვანს - ყველა ისეთი რიცხვის იგნორირება მოახდინეთ, რომელიც დაშვებული მონეტებიდან არც ერთს არ ემთხვევა.

// function calculateRemainingAmount(currentAmount, targetAmount) {
//   return targetAmount - currentAmount;
// }
// function calculateRemainingAmount(currentAmount, targetAmount) {
//   return targetAmount - currentAmount;
// }
// function vendingMachine() {
//   const sodaCost = 50;
//   let totalAmount = 0;

//   console.log(`Amount Due: ${sodaCost}`);
//   while (totalAmount < sodaCost) {
//     const coin = parseInt(prompt("Insert a coin (25, 10, or 5 cents):"), 10);
//     if (![25, 10, 5].includes(coin)) {
//       console.log("Invalid coin. Only 25, 10, or 5 cent coins are accepted.");
//       continue;
//     }
//     totalAmount += coin;
//     console.log(
//       `Amount Due: ${calculateRemainingAmount(totalAmount, sodaCost)}`
//     );
//     if (totalAmount >= sodaCost) {
//       console.log(`Thank you! Change Owed: 0`);
//       break;
//     }
//   }
//   if (totalAmount >= sodaCost) {
//     console.log("Thank you! Enjoy your soda.");
//   }
// }
// vendingMachine();

// შექმენით პროგრამა, რომელიც მომხმარებელს სთხოვს ტექსტის შეყვანას და შემდეგ იმავე ტექსტს დაბეჭდავს, მაგრამ ყველა ხმოვანს (A, E, I, O და U) გამოტოვებს, მიუხედავად იმისა, დიდი ასოებით ეწერა ისინი თუ - პატარა ასოებით.

// function main() {
//   const userInput = prompt("Enter a word or sentence: ");
//   const result = removeVowels(userInput);
//   console.log(`Result after removing vowels: ${result}`);
// }
// main();
// function removeVowels(input) {
//   return input.replace(/[aeiouAEIOU]/g, "");
// }

// ყველა სანომრე ნიშანი უნდა იწყებოდეს მინიმუმ ორი ასოთი.
// შეიძლება შეიცავდეს მაქსიმუმ 6 სიმბოლოს (ასოს ან რიცხვს) და მინიმუმ 2 სიმბოლოს.
// ციფრების გამოყენება არ შეიძლება სანომრე ნიშნის შუაში; ისინი ბოლოს უნდა იყოს. მაგალითად, AAA222 იქნება მისაღები, თუმცა AAA22A ამ წესს ვერ დააკმაყოფილებს.
// გამოყენებული პირველი რიცხვი არ შეიძლება იყოს "0".
// დაშვებული არ არის წერტილების, სივრცეების (space) და პუნქტუაციის ნიშნების გამოყენება.
// შექმენით პროგრამა, რომელიც მოუწოდებს მომხმარებელს სანომრე ნიშნის შეყვანისკენ და და შემდეგ output-ად გამოაქვს ან valid (თუ ნიშნები აკმაყოფილებს ყველა მოთხოვნას), ან - Invalid. დაუშვით, რომ მომხმარებლის input-ის ყველა ასო იქნება დიდი.

// function main() {
//   const licenseNumber = prompt("Enter a car license number: ");
//   const validationResult = validateLicenseNumber(licenseNumber);
//   console.log(validationResult);
// }
// main();

// function validateLicenseNumber(licenseNumber) {
//   if (licenseNumber.length > 6) {
//     return "Invalid license number.";
//   }
//   if (!/^[A-Za-z]+$/.test(licenseNumber) && !/^\d+$/.test(licenseNumber)) {
//     return "Invalid license number.";
//   }
//   if (/^\d+$/.test(licenseNumber)) {
//     if (!/^\D*\d+$/.test(licenseNumber)) {
//       return "Invalid license number.";
//     }
//     const firstNumber = licenseNumber.charAt(0);
//     if (licenseNumber.length === 1 && firstNumber === "0") {
//       return 'Invalid license number: The first used number should not be "0".';
//     } else if (licenseNumber.length > 1 && firstNumber === "0") {
//       return 'Invalid license number: If there are multiple numbers, the first number should not be "0".';
//     }
//   }
//   return "Valid license number.";
//

// შექმენით კალკულატორი, რომელიც მოგთხოვთ ინვესტიციის Rate of Return-ს (ROR) და გამოთვლის, რამდენი წელი დასჭირდება თქვენი ინვესტიციის გაორმაგებას.
// ფორმულა შემდეგია: years = 72 /r, სადაც r არის ROR-ის მითითებული მაჩვენებელი.
// function calculateResult(input) {
//   return 72 / input;
// }
// function isValidNumber(input) {
//   return /^[0-9]+$/.test(input);
// }
// function main() {
//   let userInput;
//   while (true) {
//     userInput = prompt("What is the rate of return? ");
//     if (isValidNumber(userInput)) {
//       break;
//     } else {
//       console.log("Sorry. That's not a valid input.");
//     }
//   }
//   const result = calculateResult(Number(userInput));
//   console.log(
//     `It will take ${result} years to double your initial investment.`
//   );
// }
// main();

// შექმენით პროგრამა, რომელიც დააგენერირებს გამრავლების ტაბულას რიცხვებისთვის 0-დან 12-მდე.

// function generateMultiplicationTable() {
//   const start = 0;
//   const end = 12;

//   for (let i = start; i <= end; i++) {
//     for (let j = start; j <= end; j++) {
//       const result = i * j;
//       console.log(`${i} * ${j} = ${result}`);
//     }
//     console.log("\n");
//   }
// }
// generateMultiplicationTable();

// შექმენით პროგრამა, რომელიც შეეკითხება მოხმარებელს მის ასაკსა და გულისცემას, შემდეგ კი ამ მონაცემებზე დაყრდნობით დაითვლის პულსს, სხვადასხვა ინტენსიურობის მიხედვით (55 % -იდან 95 % -მდე). გამოიტანეთ ამ ყველაფრის ამსახველი ცხრილი. ისეთი, როგორიც მაგალითშია ნაჩვენები.
// გამოსათვლელი ფორმულა: TargetHeartRate = (((220 - age) - restingHR) * intensity) + restingHR

// function main() {
//   const { age, restingHeartRate } = getUserInput();
//   for (let intensity = 55; intensity <= 95; intensity += 5) {
//     const targetHeartRate = calculateTargetHeartRate(
//       age,
//       restingHeartRate,
//       intensity
//     );
//     console.log(
//       `Target heart rate at ${intensity}% intensity: ${targetHeartRate.toFixed(
//         2
//       )}`
//     );
//   }
// }
// main();
// function isValidNumber(value) {
//   return !isNaN(value) && isFinite(value);
// }
// function calculateTargetHeartRate(age, restingHeartRate, intensity) {
//   const maxHeartRate = 220 - age;
//   return (
//     ((maxHeartRate - restingHeartRate) * intensity) / 100 + restingHeartRate
//   );
// }
// function getUserInput() {
//   let age, restingHeartRate;
//   do {
//     age = parseInt(prompt("Enter your age:"), 10);
//   } while (!isValidNumber(age));
//   do {
//     restingHeartRate = parseInt(prompt("Enter your resting heart rate:"), 10);
//   } while (!isValidNumber(restingHeartRate));

//   return { age, restingHeartRate };
// }

// დაწერეთ თამაში Guess the Number, რომელსაც აქვს სირთულის სამი დონე. სირთულის პირველი დონე იქნება რიცხვი 1-დან 10-მდე; მეორე - 1-დან 100-მდე, ხოლო მესამე - 1-დან 1000-მდე. მოითხოვეთ სირთულის დონე და შემდეგ დაიწყეთ თამაში. კომპიუტერი ირჩევს შემთხვევით რიცხვს არჩეულ დიაპაზონში და სთხოვს მოთამაშეს ამ რიცხვის გამოცნობას. ყოველ ჯერზე, როცა მოთამაშე გამოიცნობს, პროგრამამ მას უნდა მიაწოდოს მინიშნება იმის შესახებ, არის თუ არა ეს რიცხვი გამოსაცნობ რიცხვზე მაღალი თუ დაბალი. კომპიუტერმა ასევე უნდა აკონტროლოს გამოცნობის მცდელობების რაოდენობა. როგორც კი მოთამაშე გამოიცნობს სწორ რიცხვს, კომპიუტერმა უნდა დაბეჭდოს, თუ რამდენი მცდელობა დასჭირდა მას სწორ პასუხამდე მისასვლელად და ჰკითხოს, სურს თუ არა ხელახლა თამაში.

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function playGuessMyNumberGame() {
//   let playAgain;

//   do {

//     const difficultyLevel = parseInt(
//       prompt(
//         "Choose the difficulty level (1 for 1-10, 2 for 1-100, 3 for 1-1000):"
//       ),
//       10
//     );

//     let minRange, maxRange;
//     if (difficultyLevel === 1) {
//       minRange = 1;
//       maxRange = 10;
//     } else if (difficultyLevel === 2) {
//       minRange = 1;
//       maxRange = 100;
//     } else if (difficultyLevel === 3) {
//       minRange = 1;
//       maxRange = 1000;
//     } else {
//       console.log("Invalid difficulty level. Exiting game.");
//       return;
//     }

//     const secretNumber = getRandomNumber(minRange, maxRange);

//     let guess,
//       tries = 0;
//     do {
//     guess = parseInt(
//         prompt(`Guess the number between ${minRange} and ${maxRange}:`),
//         10
//       );

//       if (isNaN(guess) || guess < minRange || guess > maxRange) {
//         console.log(
//           "Invalid input. Please enter a valid number within the specified range."
//         );
//         continue;
//       }

//       tries++;

//       if (guess === secretNumber) {
//         console.log(
//           `Congratulations! You guessed the number ${secretNumber} in ${tries} tries.`
//         );
//       } else if (guess < secretNumber) {
//         console.log("Too low! Try again.");
//       } else {
//         console.log("Too high! Try again.");
//       }
//     } while (guess !== secretNumber);

//     playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
//   } while (playAgain === "yes");

//   console.log("Thanks for playing! Goodbye.");
// }
// playGuessMyNumberGame();

//სავარჯიშოები:

// დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10 ის ჩათვლით.

// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// დაწერეთ პროგრამა წინადადებაში ყველაზე გრძელი სიტყვის სიგრძის საპოვნელად.
// const inputSentence = prompt("Enter a sentence: ");
// function findLongestWord(sentence) {
//   const words = sentence.split(" ");
//   const longestWord = words.reduce(
//     (acc, current) => (current.length > acc.length ? current : acc),
//     ""
//   );
//   return longestWord;
// }
// const result = findLongestWord(inputSentence);
// console.log("The longest word in the sentence is:", result);
// დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.
// for (i = 0; i <= 20; i += 2) {
//   console.log(i);
// }
// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!" იმდენჯერ რამდენსაც უდრის ეს შეყვანილი რიცხვი.
// const num = Number(prompt(`Enter the number: `));
// for (i = 0; i < num; i++) {
//   console.log(`Hello!`);
// }
// დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.
// let num = 0;
// for (i = 0; i <= 100; i++) {
//   num = num + i;
// }
// console.log(num);

// დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.
// function getDaysInMonth(monthNumber) {
//   switch (monthNumber) {
//     case 1: // January
//     case 3: // March
//     case 5: // May
//     case 7: // July
//     case 8: // August
//     case 10: // October
//     case 12: // December
//       return 31;
//     case 4: // April
//     case 6: // June
//     case 9: // September
//     case 11: // November
//       return 30;
//     case 2: // February
//       return 28;
//     default:
//       return "Invalid month number. Please enter a number between 1 and 12.";
//   }
// }
// const inputMonth = parseInt(prompt("Enter a month number (1-12):"));
// const result = getDaysInMonth(inputMonth);
// console.log(result);

// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის გამოყენებით.

// const targetNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess;

// while (true) {
//   userGuess = parseInt(prompt("Guess the number (between 1 and 10):"));

//   if (userGuess === targetNumber) {
//     console.log("Congratulations! You guessed the right number.");
//     break; // Exit the loop when the correct number is guessed
//   } else {
//     console.log("Incorrect guess. Try again!");
//   }
// }

// დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"
// function getGradeResult(grade) {
//   let result;

//   switch (grade.toUpperCase()) {
//     case "A":
//       result = "Excellent";
//       break;
//     case "B":
//       result = "Good";
//       break;
//     case "C":
//       result = "Average";
//       break;
//     case "D":
//       result = "Low";
//       break;
//     case "F":
//       result = "Failed";
//       break;
//     default:
//       result = "Invalid grade. Please enter A, B, C, D, or F.";
//       break;
//   }

//   return result;
// }
// const inputGrade = prompt("Enter your grade (A, B, C, D, F): ");
// const result = getGradeResult(inputGrade);
// console.log(result);

// დაწერეთ პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს პაროლი. პროგრამამ უნდა გააგრძელოს პაროლის მოთხოვნა სწორი პაროლის შეყვანამდე. სწორი პაროლის შეყვანის შემდეგ აჩვენეთ წარმატების შეტყობინება. სწორი პაროლი არის "12345".
// const correctPassword = "12345";
// let enteredPassword;

// while (true) {
//   enteredPassword = prompt("Enter the password: ");

//   if (enteredPassword === correctPassword) {
//     console.log("Congratulations! You entered the correct password.");
//     break;
//   } else {
//     console.log("Incorrect password. Please try again.");
//   }
// }

// დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.

// function sumOfDigits(number) {
//   let sum = 0;
//   const numberString = number.toString(); // Convert the number to a string

//   for (let i = 0; i < numberString.length; i++) {
//     sum += parseInt(numberString[i]);
//   }
//   return sum;
// }
// const inputNumber = parseInt(prompt("Enter a number:"));
// const result = sumOfDigits(inputNumber);
// console.log("The sum of digits is:", result);

// დაწერეთ ფუნქცია სახელად countBs, რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.

// function countCapitalBs(sentence) {
//   let count = 0;

//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] === "B") {
//       count++;
//     }
//   }
//   return count;
// }

// const inputSentence = prompt("Enter a sentence:");
// const result = countCapitalBs(inputSentence);
// console.log("The number of capital 'B' characters is:", result);
