// const prompt = require(`prompt-sync`)();

/* პროექტი 1 - Saying Hello - გამარჯობა
შექმენით პროგრამა რომელიც გკითხავთ "რა გქვია?", 
დაელოდება თქვენს პასუხს და გიპახუსებთ 
"გამარჯობა, თქვენი სახელი"

sollution

const yourname = prompt("What's your name");
console.log(`Hello ${yourname}, nice to meet you`);

*/
/* პროექტი 2 - Counting the Number of 
Characters - სიმბოლოების რაოდენობის დათვლა
შექმენით პროგრამა, რომელიც მოგთხოვთ 
სიტყვის ან წინადადების (string) შეყვანას 
და შემდეგ გიჩვენებთ, თუ რამდენი 
სიმბოლოსგან შედგება თქვენი ჩანაწერი.

sollution 

const yourstring = prompt("What's your string?");
const stringlength = yourstring.length;
console.log(`${yourstring} has ${stringlength} characters`);
*/

/*პროექტი 3 - Printing Quotes - ციტატების ბეჭდვა
ბრჭყალები ხშირად სტრიქონის (string) 
დასაწყისისა და დასასრულის აღსანიშნავად 
გამოიყენება, მაგრამ ზოგჯერ, 
ე.წ. escape characters-ის დახმარებით, 
ამ წინადადებაში ციტატა ცალკე, 
ისევ ბრჭყალებით უნდა გამოვყოთ. 
შექმენით პროგრამა, რომელიც მოგთხოვთ 
ციტატისა და მისი ავტორის ჩაწერას, 
შემდეგ კი გაჩვენებთ ორივეს ისე, 
როგორც მაგალითშია. 

sollution

const quote = prompt("What's the quote?");
const author = prompt("Who said that?");
console.log(`${author} said, "${quote}"`);
*/

/*პროექტი 4 - Indoor Voice - ჩუმი ხმა
შექმენით პროგრამა, რომელიც მოგთხოვთ 
სტრიქონის ჩაწერას და შემდეგ იმავე 
ჩანაწერს მხოლოდ პატარა ასოებით 
გაჩვენებთ. პუნქტუაცია და სიმბოლოებს 
შორის სივრცეები (whitespace) უცვლელი 
უნდა დარჩეს.

sollution 

const yourstring = prompt("What's your string");
const indoorvoice = yourstring.toLowerCase();
console.log(yourstring);
console.log(indoorvoice);
*/

/* პროექტი 5 - Playback Speed - 
საუბრის სიჩქარე
ზოგიერთი ადამიანი ლექციებს საკმაოდ 
სწრაფად კითხულობს; მათი შენელება 
ან თუნდაც, სიტყვებს შორის პაუზის 
გაკეთება კარგი იქნებოდა... 
შექმენით პროგრამა, რომელიც 
წინადადების ჩაწერას მოგთხოვთ, 
შემდეგ კი იმავე ჩანაწერს გაჩვენებთ, 
ოღონდ იმ განსხვავებით, რომ ამჯერად 
ასოებს შორის ყველა სივრცე 
(whitespace) მრავალწერტილით (...) 
იქნება ჩანაცვლებული. 

sollution 

const yourSentence = prompt("What's your sentence");
const modifiedSentence = yourSentence.replace(/\s+/g, '...');
console.log(yourSentence);
console.log(modifiedSentence);
*/

/* პროექტი 6 - Making Faces - 
სახეების მიღება
emoji-მდე არსებობდა emoticon-ები, 
სადაც სიმბოლოების ერთობლიობა - ":)" 
გაღიმებულ სახეს აღნიშნავდა, ხოლო ":(" 
- მოწყენილს. დღეს პროგრამებში ეს 
სიმბოლოები emoji-დ ავტომატურად 
გარდაიქმნება.

შექმენით პროგრამაში, სადაც დაწერთ 
ფუნქციას სახელწოდებით convert, 
რომელიც პარამეტრად იღებს სტრიქონს 
(str), შემდეგ კი იმავე სტრიქონს 
აბრუნებს, იმ განსხვავებით, რომ 
ნებისმიერ ამგვარ ჩანაწერს - ":)" 🙂-ით, 
ხოლო ":(" - 🙁-ით შეცვლის. დანარჩენი 
ტექსტი უცვლელი უნდა დარჩეს.

იმავე პროგრამაში, დაწერეთ მეორე 
ფუნქცია - main, რომელიც სტრიქონის 
შეყვანას გთხოვთ, შემდეგ convert 
ფუნქციას იძახებს და ბოლოს, 
შედეგს გაჩვენებთ.

sollution 

const emojiStr = prompt("Write sentence with emoji");

function main() {
  const convertedStr = convert(emojiStr);
  console.log(convertedStr);
};
function convert(str){
 return str.replaceAll(":)", "🙂").replaceAll(":(", "🙁");
};
main();
*/

/* დაწერეთ პროგრამა რომელიც 
კონსოლში გამოიტანს "Hello World" -ს.

console.log("Hello World"); */

/* შექმენით ცვლადი და მიანიჭეთ მას 
რიცხვი. დაბეჭდეთ ცვლადის 
მნიშვნელობა. 

const num = 5;
console.log(num); */

/* დაწერეთ პროგრამა ორი რიცხვის 
შესაკრებად და შედეგის გამოსატანად. 

function addNumbers(x, y){
  return x + y;
};

const sum = addNumbers(5, 6);
console.log(sum);
*/

/* დაწერეთ პროგრამა რომელიც 
გამოაკლებს ორ რიცხვს ერთმანეთს და 
აჩვენებს შედეგს.

function minusNumbers(x, y){
  return x - y;
};

const result = minusNumbers(25, 10);
console.log(result);
*/

/* დაწერეთ პროგრამა ორი რიცხვის 
გასამრავლებლად და შედეგის 
გამოსატანად. 

function multiplyNumbers(x, y){
  return x * y;
};

const result = multiplyNumbers(25, 10);
console.log(result);
*/

/* დაწერეთ პროგრამა ორი რიცხვის 
გასაყოფად და შედეგის გამოსატანად.


function divideNumbers(x, y){
  return x / y;
};

const result = divideNumbers(20, 5);
console.log(result);
*/

/* დაწერეთ პროგრამა ორი რიცხვის 
გაყოფის ნაშთის გამოსათვლელად.

function nashti(x, y){
  return x % y;
};

const result = nashti(43, 7);
console.log(result);
*/

/* შექმენით ცვლადი და მიანიჭეთ 
მას სტრიქონი. ამობეჭდეთ სტრიქონის 
სიგრძე. 

let striqoni;
striqoni = "I Love You";
console.log(striqoni.length);
*/

/* დაწერეთ პროგრამა სტრიქონის 
დიდ ასოებზე გადასაყვანად.

const striqoni = "i love you";
console.log(striqoni.toUpperCase());
*/

/* დაწერეთ პროგრამა სტრიქონის 
მცირე ასოზე გადასაყვანად.

const striqoni = "I LOVE YOU";
console.log(striqoni.toLowerCase());
*/
