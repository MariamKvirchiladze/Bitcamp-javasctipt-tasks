const prompt = require(`prompt-sync`)();

// დაწერეთ ფუნქცია generateRandomNumber, რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.

// const minNum = Number(prompt("Enter the minimum number: "));
// const maxNum = Number(prompt("Enter the maximum number: "));
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const randomNum = getRandomNumber(minNum, maxNum);
// console.log(`Random number between ${minNum} and ${maxNum} is: ${randomNum}`);

// დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.

// function capitalizeFirstLetter(sentence) {
//   const words = sentence.split(" ");
//   const capitalizedWords = words.map(
//     (word) => word.charAt(0).toUpperCase() + word.slice(1)
//   );
//   const capitalizedSentence = capitalizedWords.join(" ");

//   return capitalizedSentence;
// }
// const inputSentence = "hello bitcamp! this is an example sentence.";
// const outputSentence = capitalizeFirstLetter(inputSentence);
// console.log(outputSentence);

// დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.

// function getUniquePropertyValues(objects, propertyName) {
//   const uniqueValuesSet = new Set();
//   objects.forEach((object) => {
//     if (object.hasOwnProperty(propertyName)) {
//       uniqueValuesSet.add(object[propertyName]);
//     }
//   });
//   const uniqueValuesArray = Array.from(uniqueValuesSet);
//   return uniqueValuesArray;
// }
// const arrayOfObjects = [
//   { id: 1, name: "Mary" },
//   { id: 2, name: "Temur" },
//   { id: 3, name: "Oto" },
//   { id: 4, name: "Mary" },
//   { id: 4, name: "Oto" },
//   { id: 4, name: "Anna" },
//   { id: 4, name: "Temur" },
//   { id: 4, name: "Beqa" },
// ];

// const uniqueNames = getUniquePropertyValues(arrayOfObjects, "name");
// console.log(uniqueNames);

// დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.
// function isPangram(inputString) {
//   const lowercaseString = inputString.toLowerCase();
//   const alphabetStatus = Array(26).fill(false);
//   for (const char of lowercaseString) {
//     if (/^[a-z]$/.test(char)) {
//       const index = char.charCodeAt(0) - "a".charCodeAt(0);
//       alphabetStatus[index] = true;
//     }
//   }
//   return alphabetStatus.every((status) => status);
// }
// const pangramString = "The quick brown fox jumps over the lazy dog.";
// const notpangram = "I love coding and coding loves me";
// const isPangramResult = isPangram(pangramString);
// const isPangramResult2 = isPangram(notpangram);
// console.log(isPangramResult);
// console.log(isPangramResult2);

// დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".
// function uniqueWordsInSentence(sentence) {
//   const words = sentence.toLowerCase().split(/\s+/);
//   const commonWords = new Set(["the", "a", "is", "am", "i"]);
//   const uniqueWords = Array.from(
//     new Set(words.filter((word) => !commonWords.has(word)))
//   );
//   uniqueWords.sort();
//   return uniqueWords;
// }
// const inputSentence1 =
//   "I am learning programming in Bitcamp academy, This is the best place for learning, and I am so happy that I am the part of it.";
// const result1 = uniqueWordsInSentence(inputSentence1);
// console.log(result1);

// დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.
// function removeFalseValues(array) {
//   const filteredArray = array.filter((value) => Boolean(value));

//   return filteredArray;
// }
// const inputArray = [1, 0, true, false, "hello", "", null, undefined];
// const resultArray = removeFalseValues(inputArray);

// console.log(resultArray);

// დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად.
// function reverseWords(sentence) {
//   const words = sentence.split(" ");
//   const reversedWords = words.reverse();
//   const reversedSentence = reversedWords.join(" ");

//   return reversedSentence;
// }
// const inputSentence = "Hello Bitcamp, This is an example sentence.";
// const reversedResult = reverseWords(inputSentence);
// console.log(reversedResult);

// დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.
// function isPalindrome(str) {
//   const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   const reversedStr = cleanStr.split("").reverse().join("");
//   return cleanStr === reversedStr;
// }
// const palindromeExample = "A man, a plan, a canal, Panama!";
// const isPalindromeResultTrue = isPalindrome(palindromeExample);
// console.log(`"${palindromeExample}" is palindrome?: ${isPalindromeResultTrue}`);
// const nonPalindromeExample = "This is not a palindrome";
// const isPalindromeResultFalse = isPalindrome(nonPalindromeExample);
// console.log(
//   `"${nonPalindromeExample}" is palindrome?: ${isPalindromeResultFalse}`
// );

// დაწერეთ პროგრამა,რომელიც იპოვის მასივში ყველაზე დიდ რიცხვს(არ გამოვიყენოთ სორტი).
// function findLargestNumber(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }
//   let maxNumber = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i];
//     }
//   }
//   return maxNumber;
// }
// const numbersArray = [3, 9, 2, 17, 8, 12];
// const largestNumber = findLargestNumber(numbersArray);

// console.log(`The largest number is: ${largestNumber}`);

// დაწერეთ პროგრამა,რომელიც შეკრიბავს მასივის ყველა რიცხვს(არ გამოვიყენოთ reduce).
// function sumArrayNumbers(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// const numbersArray = [3, 9, 2, 17, 8, 12];
// const arraySum = sumArrayNumbers(numbersArray);

// console.log(`The sum of all numbers in the array is: ${arraySum}`);
