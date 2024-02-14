// const prompt = require(`prompt-sync`)();

// Mad libs არის მარტივი თამაში, სადაც თქვენ ქმნით ამბის შაბლონს ცარიელ სიტყვებთან ერთად. მოთამაშე ადგენს სიტყვების სიას და მოთხრობაში განათავსებს, შედეგად კი ხშირად სულელურ ან სასაცილო ამბავს ვიღებთ. შექმენით მარტივი პროგრამა, რომელიც ითხოვს არსებით სახელს, ზმნას, ზმნიზედას და ზედსართავ სახელს და ამ სიტყვებს თქვენივე შექმნილ ისტორიაში სვამს.

// const noun = prompt("Enter a noun"); //cat
// const verb = prompt("Enter a verb"); //jumping
// const adj = prompt("Enter an adjective"); //white
// const adv = prompt("Enter an adverb"); //happily

// console.log(`The ${adj} ${noun} is ${verb}ing ${adv} on the way to home`);

// შექმენით მარტივი JavaScript პროგრამა, რომელიც ითვლის შეფასებას მოსწავლის ქულების მიხედვით. შეფასების სქემა შემდეგნაირია: A: 90-100 B: 80-89 C: 70-79 D: 60-69 F: 0-59

// პროგრამამ უნდა მოსთხოვოს მომხმარებელს შეიყვანოს რიცხვითი ქულა(0-დან 100-ის ჩათვლით ნებისმიერი რიცხვი).
// გამოიყენეთ პირობითი ოპერატორები შეყვანილი რიცხვის შეფასების დასადგენად.
// ეკრანზე გამოიტანეთ როგორც შეყვანილი რიცხვი ასევე შესაბამისი ასო.

// const score = Number(prompt("Enter the student's score "));
// let grade = countGrade(score);

// console.log(`Student's score is ${score}`);
// console.log(`Grade is ${grade}`);

// function countGrade(score) {
//   let grade;
//   if (score >= 90) {
//     grade = "A";
//   } else if (score >= 80 && score < 90) {
//     grade = "B";
//   } else if (score >= 70 && score < 80) {
//     grade = "C";
//   } else if (score >= 60 && score < 70) {
//     grade = "D";
//   } else {
//     grade = "F";
//   }
//   return grade;
// };

// თქვენ ხშირად დაწერთ პროგრამებს, რომლებიც ეხება რიცხვებს. ხშირად, პროგრამაში მიღებული მონაცემები (input )რიცხვით მონაცემების ტიპებად უნდა გარდაქმნათ. დაწერეთ პროგრამა, რომელიც მოგთხოვთ ორ რიცხვს. ამობეჭდეთ ამ რიცხვების ჯამი, სხვაობა, ნამრავლი და განაყოფი.

// const x = Number(prompt("what's your first number "));
// const y = Number(prompt("what's your second number "));

// console.log(`${x} + ${y} = ${x + y}`);
// console.log(`${x} - ${y} = ${x - y}`);
// console.log(`${x} * ${y} = ${x * y}`);
// console.log(`${x} / ${y} = ${x / y}`);

// შეიძლება გსმენიათ, რომ E = mc2, სადაც E წარმოადგენს ენერგიას (იზომება ჯოულებში), M წარმოადგენს მასას (იზომება კილოგრამებში), ხოლო C - სინათლის სიჩქარეს (დაახლოებით 300000000 მეტრი წამში). ეს ალბერტ აინშტაინის ფორმულაა, რაც არსებითად ნიშნავს, რომ მასა და ენერგია ეკვივალენტურია.
// შექმენით პროგრამა, რომელიც მომხმარებლისგან მასის კილოგრამებში შეყვანას მოითხოვს და დაბეჭდავს ამ მასის ეკვივალენტურ რაოდენობას ჯოულში. ეს ორივე რიცხვი უნდა იყოს მთელი (integer).
// მომხმარებლებისგან მიღებული მნიშვნელობა იქნება სტრიქონის (string) ტიპის. მათემატიკურ გამოთვლებამდე ეს მნიშვნელობები რიცხვებად უნდა გადააქციოთ.
// შემომავალი (input) და გამომავალი (output) მონაცემები კონვერტაციებისა და სხვა კალკულაციებისგან განცალკევებით უნდა გქონდეთ.

// const M = Number(prompt("put mass into kg"));
// const E = M * Math.pow(300000000, 2);
// console.log(`M = ${M}`);
// console.log(`E = ${E}`);

// პროექტი 11 - Tip Calculator - "ჩაის" კალკულატორი
// ჩვეულებრივ, რესტორანში სადილის შემდეგ სერვისისთვის "ჩაის" ტოვებენ, როგორც წესი, შეერთებულ შტატებში ეს თანხა კვების ღირებულების 15%-ს ან მეტს აღწევს. შექმენით პროგრამა, რომელიც მოითხოვს თანხისა და პროცენტის შეყვანას და გეტყვით, რამდენი დოლარი უნდა დატოვოთ "ჩაის" სახით.

// ასევე, პროგრამაში უნდა გქონდეთ ორი ფუნქცია:

// ერთი input-ად მიიღებს სტრიქონს (დაფორმატებულს, როგორც $##.##), თავში შლის $ ნიშანს და აბრუნებს თანხას ათწილადის სახით. მაგალითად, 50.00 დოლარის შემთხვევაში მან უნდა დააბრუნოს 50.0

// მეორე ფუნქცია input-ად მიიღებს ასევე სტრიქონს (დაფორმატებულს, როგორც ##%), ბოლოში შლის % ნიშანს და აბრუნებს პროცენტს ათწილადის სახით. მაგალითად, თუ input 15%-ია, ფუქცია 0.15-ს დააბრუნებს.

// მაგალითად:

// > How much was the meal? $50.00
// > What percentage would you like to tip? 15%
// > Leave $7.50

// const bill = prompt("How much was the meal? ");
// const per = prompt("What percentage would you like to tip? ");
// const formatedBill = formatBill(bill);
// const formatedPer = formatPer(per);
// const tip = formatedBill * formatedPer;
// console.log(`You should leave $${tip}`);

// function formatBill(bill) {
//   let billWithout$ = bill.replace("$", "");
//   let floatBill = parseFloat(billWithout$);
//   let billWithDecimal = floatBill.toFixed(2);
//   return billWithDecimal;
// }
// function formatPer(per) {
//   let perWithoutPercenSign = per.replace("%", "");
//   let decimalPer = parseFloat(perWithoutPercenSign) / 100;
//   return decimalPer;
// }

// პროექტი 12 - Retirement Calculator - საპენსიო კალკულატორი
// თქვენმა კომპიუტერმა იცის, რომელია მიმდინარე წელი, ამიტომ ეს ინფორმაცია თქვენს პროგრამებში შეგიძლიათ, ჩართოთ. უბრალოდ, უნდა გაარკვიოთ, როგორ შეუძლია თქვენს პროგრამირების ენას ამ მონაცემის თქვენთვის მოწოდება.
// შექმენით პროგრამა, რომელიც მოითხოვს თქვენი ამჟამინდელი ასაკისა და იმ ასაკის შეყვანას, როცა გსურთ, პენსიაზე გახვიდეთ; შემდეგ კი განსაზღვრავს, რამდენი წელი დაგრჩათ პენსიაზე გასვლამდე და კონკრეტულად რომელ წელს შეგიძლიათ ამის გაკეთება.
// მაგალითად:
// > What is your current age? 25
// > At what age would you like to retire? 65
// > You have 40 years left until you can retire.
// > It's 2015, so you can retire in 2055.
// კიდევ ერთხელ, კალკულაციებამდე დარწმუნდით, რომ მონაცემები რიცხვით ტიპებში გქონდეთ
// თქვენს პროგრამაში მიმდინარე წელი ხელით არ ჩაწეროთ. ის თქვენი პროგრამირების ენის საშუალებით, სისტემური დროიდან უნდა მიიღოთ.

// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// const age = Number(prompt("What's your current age? "));
// const retireAge = Number(prompt("At what age would you like to retire? "));
// const yearsLeft = retireAge - age;

// console.log(`you have ${yearsLeft} years left until you can retire`);
// console.log(
//   `It's ${currentYear} now, so you can retire in ${currentYear + yearsLeft}`
// );

// პროექტი 13 - Area of a Rectangular Room - მართკუთხა ოთახის ფართობი
// გლობალურ გარემოში მუშაობისას, თქვენ მოგიწევთ ინფორმაციის წარდგენა როგორც მეტრულ, ასევე იმპერიულ საზომ ერთეულებში.
// შექმენით პროგრამა, რომელიც ითვლის ოთახის ფართობს. შესთავაზეთ მომხმარებელს ოთახის სიგრძე და სიგანე ფუტებში. შემდეგ აჩვენეთ ტერიტორია როგორც კვადრატულ ფუტში, ასევე - კვადრატულ მეტრში.
// მაგალითად:
// > What is the length of the room in feet? 15
// > What is the width of the room in feet? 20
// > You entered dimensions of 15 feet by 20 feet.
// > The area is
// > 300 square feet
// > 27.871 square meters
// კონვერტაციის ფორმულაა: m2 = f2 × 0.09290304

// const length = Number(prompt("What is the length of the room in feet? "));
// const width = Number(prompt("What is the width of the room in feet? "));
// const areaFeet = length * width;
// const areaM = areaFeet * 0.09290304;

// console.log(`You entered dimensions of ${length} feet by ${width} feet`);
// console.log(`The area is`);
// console.log(`${areaFeet} square feet`);
// console.log(`${areaM} square meters`);

// პროექტი 14 - Pizza Party - პიცის წვეულება
// გაყოფა ყოველთვის ზუსტი არ არის და ზოგჯერ ისეთი პროგრამები უნდა დავწეროთ, რომლებშიც ათწილადების ნაცვლად ნაშთი მთელ რიცხვში უნდა გადავაქციოთ. დაწერეთ პროგრამა პიცების თანაბრად გასაყოფად. პროგრამამ input-ებად უნდა მოგთხოვოთ ხალხის რაოდენობა, პიცების რაოდენობა და თითო პიცაზე - ნაჭრების რაოდენობა. ნაჭრების რაოდენობა თანაბარი უნდა იყოს. აჩვენეთ პიცის ნაჭრების რაოდენობა, რომელიც თითოეულმა ადამიანმა უნდა შეჭამოს. თუ ნარჩენები რჩება, დაბეჭდეთ დარჩენილი ნაჭრების რაოდენობა.
// მაგალითად:
// > How many people? 8
// > How many pizzas do you have? 2
// > 8 people with 2 pizzas
// > Each person gets 2 pieces of pizza.
// > There are 0 leftover pieces.
// დარწმუნდით, რომ input-ები რიცხვით ტიპებში იყოს.
// დაამატეთ პროგრამას ფუნქციონალი, რომლითაც output-ში პროგრამა სწორად მართავს მხოლობით და მრავლობით რიცხვს, მაგალითად:
// > Each person gets 2 pieces of pizza.
// > Each person gets 1 piece of pizza.

// const people = Number(prompt("How many people? "));
// const pizzas = Number(prompt("How many pizzas do you have? "));
// const slicesOnpizza = Number(prompt("How many slices does one pizzas have? "));
// const slicesPerPerson = Math.floor((slicesOnpizza * pizzas) / people);
// const leftover = (slicesOnpizza * pizzas) % people;
// const modifiedPlural = parsePlural(slicesPerPerson);

// console.log(`${people} people with ${pizzas}, ${slicesOnpizza}-sliced pizzas`);
// console.log(`Each person gets ${slicesPerPerson} ${modifiedPlural} of pizza`);
// console.log(`There are ${leftover} leftover pieces`);

// function parsePlural(x) {
//   if (x > 1) {
//     return "pieces";
//   } else {
//     return "pieces";
//   }
// }

// პროექტი 15 - Paint Calculator - საღებავის კალკულატორი
// ზოგჯერ, დამრგვალების სტანდარტული წესების ნაცვლად, გვიწევს, რიცხვი მომდევნო რიცხვზე დავამრგვალოთ. გამოთვალეთ საღებავი გალონებში, რომელიც ოთახის ჭერის შესაღებადაა საჭირო. პროგრამამ input-ად უნდა მოითხოვოს ოთახის სიგრძე და სიგანე. ჩავთვალოთ, რომ ერთი გალონი 350 კვადრატულ ფუტს მოიცავს. მთელი რიცხვით აჩვენეთ გალონების ის რაოდენობა, რაც საჭიროა ჭერის შესაღებად.
// მაგალითად:
// > You will need to purchase 2 gallons of paint to cover 360 square feet.
// გახსოვდეთ - გალონი საღებავის ნაწილის შეძენა არ შეგიძლიათ, რიცხვი მომდევნო მთელ რიცხვზე - მთელ გალონზე უნდა დაამრგვალოთ.

// const length = Number(prompt("What is the length of the room in feet? "));
// const width = Number(prompt("What is the width of the room in feet? "));
// const area = length * width;
// const gallons = Math.ceil(area / 350);
// console.log(
//   `You will need to purchase ${gallons} gallons of paint to cover ${area} square feet`
// );

// შექმენით მარტივი გადახდის სისტემა, რომლითაც მომხმარებელი შეძენილი პროდუქტების ფასს გამოითვლის. პროგრამამ input-ად უნდა მოითხოვოს სამი ნივთის ფასები და თითოეულის რაოდენობა. გამოთვალეთ მათი საერთო ფასი. შემდეგ, გამოთვალეთ დამატებითი - 5.5%-იანი გადასახადი (tax). საბოლოოდ, პროგრამამ უნდა დაბეჭდოს პროდუქტების ფასი, გადასახადი და მთლიანი გადასახდელი თანხა - ანუ ფასისა და გადასახადის ჯამი.
// > Enter the price of item 1: 25
// > Enter the quantity of item 1: 2
// > Enter the price of item 2: 10
// > Enter the quantity of item 2: 1
// > Enter the price of item 3: 4
// > Enter the quantity of item 3: 1
// > Subtotal: $64.00
// > Tax: $3.52
// > Total: $67.52
// თქვენი პროგრამის input-ების, კალკულაციებისა და output-ების ნაწილები ერთმანეთისგან გამიჯნეთ.

//inputs
// const firstItemPrice = Number(prompt("Enter the price of item 1: "));
// const firstItemQuantity = Number(prompt("Enter the quantity of item 1: "));
// const secondItemPrice = Number(prompt("Enter the price of item 2: "));
// const secondItemQuantity = Number(prompt("Enter the quantity of item 2: "));
// const thirdItemPrice = Number(prompt("Enter the price of item 3: "));
// const thirdItemQuantity = Number(prompt("Enter the quantity of item 3: "));
// //calculations
// const subtotal =
//   firstItemPrice * firstItemQuantity +
//   secondItemPrice * secondItemQuantity +
//   thirdItemPrice * thirdItemQuantity;
// const tax = subtotal * 0.055;
// const total = subtotal + tax;
// //outputs
// console.log(`Subtotal: $${subtotal}`);
// console.log(`Tax: $${tax}`);
// console.log(`Total: $${total}`);

// ზოგჯერ შეიძლება დაგჭირდეთ ვალუტის გაცვლის კურსებთან შეხება და უნდა დარწმუნდეთ, რომ თქვენი გამოთვლები მაქსიმალურად ზუსტია.
// დაწერეთ პროგრამა, რომელიც გარდაქმნის ვალუტას. კერძოდ, გადააკეთეთ ევრო აშშ დოლარში. მოითხოვეთ თანხის რაოდენობა ევროში და ევროს მიმდინარე კურსი. ამობეჭდეთ ახალი თანხა დოლარში.
// ვალუტის კონცერტაციის ფორმულაა:
// amount to = (amount from × rate from ) / rate to
// სადაც:
// Amount to არის თანხა დოლარში
// Amount from არის თანხა ევროში
// rate from არის მიმდინარე გაცვლითი კურსი ევროში
// rate to არის აშშ დოლარის მიმდინარე გაცვლითი კურსი
// მაგალითად:
// > How many euros are you exchanging? 81
// > What is the exchange rate? 137.51
// > 81 euros at an exchange rate of 137.51 is 111.38 U.S. dollars..0

// const amounFrom = Number(prompt("How many euros are you exchanging? "));
// const rateFrom = Number(prompt("What is the exchange rate? "));

// const amount = ((amounFrom * rateFrom) / 100).toFixed(2);

// console.log(
//   `${amounFrom} euros at an exchange rate of ${rateFrom} is ${amount} U.S. dollars.`
// );

// პროექტი 18 - Computing Simple Interest - მარტივი პროცენტის გამოთვლა
// მარტივი პროცენტის გამოთვლა შესანიშნავი გზაა იმის სწრაფად გასარკვევად, აქვს თუ არა ინვესტიციას ღირებულება. შექმენით პროგრამა, რომელიც გამოითვლის მარტივ პროცენტს. Input-ად მოითხოვეთ ძირითადი თანხა, განაკვეთი პროცენტში და, შემდეგ კი აჩვენეთ დარიცხული თანხა (ძირი + პროცენტი). მარტივი პროცენტის ფორმულა არის A = P(1 + rt), სადაც P არის ძირითადი თანხა, r არის წლიური საპროცენტო განაკვეთი, t არის წლების რაოდენობა და A არის თანხა ინვესტიციის დასრულებისას.
// მაგალითად:
// > Enter the principal: 1500
// > Enter the rate of interest: 4.3
// > Enter the number of years: 4
// > After 4 years at 4.3%, the investment will be worth $1758.

// const startMoney = Number(prompt("Enter the principal: "));
// const rate = Number(prompt("Enter the rate of interest: "));
// const years = Number(prompt("Enter the number of years: "));

// const endMoney = startMoney * (1 + (rate / 100) * years);
// console.log(
//   `After ${years} years at ${rate}%, the investment will be worth $${endMoney}`
// );

// პროექტი 19 - Computing Simple Interest - მარტივი პროცენტის გამოთვლა
// ინვესტიციების უმეტესობა იყენებს რთული პროცენტის ფორმულას, რომელიც ბევრად უფრო ზუსტია. ეს ფორმულა მოითხოვს, რომ პროგრამებში ხარისხის მაჩვენებლები ჩავრთოთ. დაწერეთ პროგრამა, რომ გამოვთვალოთ ინვესტიციის ღირებულება დროთა განმავლობაში. პროგრამამ უნდა მოითხოვოს საწყისი თანხა, ინვესტიციის წლების რაოდენობა, საპროცენტო განაკვეთი და წლიური პერიოდების რაოდენობა. ფორმულა შემდეგია: A = P(1 + r/n)nt, სადაც:
// P არის ძირითადი თანხა.
// r არის წლიური საპროცენტო განაკვეთი.
// t არის წლების რაოდენობა.
// n არის პროცენტის დარიცხვის რაოდენობა წელიწადში.
// A არის თანხა ინვესტიციის ბოლოს.

// const startMoney = Number(prompt("Enter the principal: "));
// const rate = Number(prompt("Enter the rate of interest: "));
// const years = Number(prompt("Enter the number of years: "));
// const period = Number(prompt("Enter the number of periods: "));

// const endMoney = (
//   startMoney *
//   (1 + rate / 100 / period) ** (period * years)
// ).toFixed(2);
// console.log(
//   `After ${years} years at ${rate}%, with annual period ${period}, the investment will be worth $${endMoney}`
// );

// პროექტი 20 - Deep Thought - ღრმა ფიქრი
// “All right,” said the computer, and settled into silence again. The two men fidgeted. The tension was unbearable. “You’re really not going to like it,” observed Deep Thought. “Tell us!” “All right,” said Deep Thought. “The Answer to the Great Question…” “Yes…!” “Of Life, the Universe and Everything…” said Deep Thought. “Yes…!” “Is…” said Deep Thought, and paused. “Yes…!” “Is…” “Yes…!!!…?” “Forty-two,” said Deep Thought, with infinite majesty and calm.” — The Hitchhiker’s Guide to the Galaxy, Douglas Adams
// შექმენით პროგრამა, რომელიც მომხმარებელს ცხოვრებაზე, სამყაროსაა და ყველაფერზე მნიშვნელოვან კითხვას დაუსვამს. თუ მომხმარებელი input-ად 42-ს შეიყვანს, რიცხვითი ან სტრიქონის ტიპით - forty-two ან forty two, პროგრამამ Yes უნდა დაბეჭდოს, ყველა სხვა შემთხვევაში კი - No.

// Example Output

// < What is the answer to the Great Question of Life, the Universe, and Everything? 42
// < Yes
// < What is the answer to the Great Question of Life, the Universe, and Everything? forty-two
// < Yes
// < What is the answer to the Great Question of Life, the Universe, and Everything? forty two
// < Yes
// პროგრამის output-ისთვის დიდ თუ პატარა ასოებს მნიშვნელობა არ უნდა ჰქონდეს.

// const input = prompt(
//   "What is the answer to the Great Question of Life, the Universe, and Everything? "
// );
// const result = answer(input);

// function answer(input) {
//   if (Number(input) === 42) {
//     return "Yes";
//   }
//   let formattedInput = input
//     .toString()
//     .toLowerCase()
//     .replace(/-/g, " ")
//     .replace(/\s+/g, " ");
//   if (formattedInput === "forty-two" || formattedInput === "forty two") {
//     return "yes";
//   }
// }
// console.log(result);

// Seinfeld-ის მე-7 სეზონის 24-ე ეპიზოდში, კრამერი სტუმრობს ბანკს, რომელიც 100 დოლარის ჩუქებას ჰპირდება ყველას, ვისაც მისალმების ნიშნად hello-ს არ ეტყვიან. კრამერს hey-ს ეუბნებიან, რაზეც ის ამბობს, რომ ეს hello არ არის და ამიტომ, ბანკისგან 100 დოლარს ითხოვს. ბანკის მენეჯერი მას კომპრომისს სთავაზობსს: "თქვენ მიიღეთ მისალმება, რომელიც იწყება "h"-ით, $20-ზე რას იტყვით?" კრამერი თანხას იღებს.

// შექმენით პროგრამა, რომელიც მომხმარებელს მისალმებას მოსთხოვს. თუ მისალმება hello-თი იწყება, დაბეჭდეთ $0; თუ input "h"-ით იწყება, მაგრამ სიტყვა hello არ არის, $20 დაბეჭდეთ; სხვა შემთხვევებში კი - $100.

// let userGreeting = prompt("Enter a greeting: ").trim().toLowerCase();
// let output;
// if (userGreeting === "hello") {
//   output = "$0";
// } else if (userGreeting.startsWith("h")) {
//   output = "$20";
// } else {
//   output = "$100";
// }
// console.log("Output:", output);

// პროექტი 22 - File Extensions - ფაილის ტიპები
// ფაილების უმეტესობას აქვს file extensions - სუფიქსები, რომელიც სახელწოდებაში წერტილის (.) შემდეგ წერია. მაგალითად, ფაილის სახელები GIF-ებისთვის მთავრდება .gif-ით, ხოლო JPEG-ების - .jpg ან .jpeg-ით.
// ვებ ბრაუზერები, თავის მხრივ, ეყრდნობიან მედიის ტიპებს, რომელიც ადრე ცნობილი იყო, როგორც MIME ტიპები - ამით დგინდება, როგორ უნდა იყოს ნაჩვენები ფაილები, რომლებიც ინტერნეტშია. როდესაც ვებ სერვერიდან ფაილს ტვირთავთ, ეს სერვერი ე.წ. HTTP header-ს თავად ფაილთან ერთად გზავნის, რომელიც ფაილის მედიის ტიპზე მიუთითებს. მაგალითად, მედიის ტიპი GIF-ისთვის არის image/gif, ხოლო მედიის ტიპი JPEG-ისთვის არის image/jpeg. ფაილის მედიის ტიპის დასადგენად, ვებ სერვერი, როგორც წესი, ფაილის გაფართოებას აკვირდება.
// იხილეთ developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types ფაილის ტიპები სიისთვის.

// შექმენით პროგრამა, რომელიც სთხოვს მომხმარებელს ფაილის სახელს და შემდეგ ბეჭდავს, იმ შემთხვევაში, თუ ფაილის სახელი ამ რომელიმე სუფისქით მთავრდება:

// .gif
// .jpg
// .jpeg
// .png
// .pdf
// .txt
// .zip
// თუ ფაილის სახელი მთავრდება სხვა სუფიქსით ან საერთოდ არ აქვს სუფიქსი, დაბეჭდეთ application/octet-stream.
// Example Output
// < File name: Cat.gif
// < image/gif
// < File name: Cat.jpg
// < image/jpeg
// < File name: Cat
// < application/octet-stream
// პროგრამისთვის დიდ თუ პატარა ასოებს მნიშვნელობა არ უნდა ჰქონდეს.

// const input = prompt("File name: ").trim().toLowerCase();
// const value = getValue(input);
// getMedia(value);

// function getValue(input) {
//   let parts = input.split(".");
//   let extension = parts[parts.length - 1];
//   return extension;
// }

// function getMedia(value) {
//   if (value == "gif" || value == "jpg" || value == "jpeg" || value == "png") {
//     console.log(`image/${value}`);
//   } else if (value == "pdf") {
//     console.log(`application/${value}`);
//   } else if (value == "txt") {
//     console.log(`text/plain`);
//   } else if (value == "zip") {
//     console.log(`application/${value}`);
//   } else {
//     console.log(`application/octet-stream`);
//   }
// };

// პროექტი 23 - Math Interpreter - მათემატიკური ინტერპრეტატორი
// შექმენით პროგრამა, რომელიც მომხმარებლისგან იღებსარითმეტიკულ გამოთვლას, რომელსაც შემდეგ ახორციელებს და შედეგს ათწილადის სახით ბეჭდავს. დაუშვით, რომ მომხმარებლის input დაფორმატებული იქნება, როგორც x y z, თითო გამოტოვებით (space) x-სა და y-ს შორის, ისევე, როგორც y-სა და z-ს შორის. ამ გამოთვლაში:
// x არის მთელი რიცხვი
// y არის +, -, *, ან /
// z არის მთელი რიცხვი
// მაგალითად, თუ input-ია 1 + 1, თქვენი პროგრამის output უნდა იყოს 2.0. დაუშვით, რომ თუ y არის /, მაშინ z არ იქნება 0.
// Example Output
// < Expression: 1 + 1
// < 2.0
// < Expression: 4/3
// < 1.3
// < Expression: 100 - 1
// < 99.0
// პროგრამისთვის დიდ თუ პატარა ასოებს მნიშვნელობა არ უნდა ჰქონდეს.

// const input = prompt("Expression: ").trim().toLowerCase();
// let firstNum;
// let operator;
// let secondNum;
// parseMathExpression(input);
// const answer = performMathOperation(firstNum, operator, secondNum);
// console.log(answer);

// function parseMathExpression(input) {
//   let regex = /(\d+)\s*([\+\-\*\/])\s*(\d+)/;
//   let match = input.match(regex);
//   if (match) {
//     firstNum = parseInt(match[1], 10);
//     operator = match[2];
//     secondNum = parseInt(match[3], 10);
//     return { firstNum, operator, secondNum };
//   } else {
//     console.log("Invalid expression format");
//     return null;
//   }
// }

// function performMathOperation(firstNum, operator, secondNum) {
//   switch (operator) {
//     case "+":
//       return (firstNum + secondNum).toFixed(1);
//     case "-":
//       return (firstNum - secondNum).toFixed(1);
//     case "*":
//       return (firstNum * secondNum).toFixed(1);
//     case "/":
//       // Check for division by zero
//       if (secondNum !== 0) {
//         return (firstNum / secondNum).toFixed(1);
//       } else {
//         console.log("Error: Division by zero");
//         return null;
//       }
//     default:
//       console.log("Error: Invalid operator");
//       return null;
//   }
// }

// პროექტი 24 - Meal Time - კვების დრო
// დავუშვათ, იმყოფებით ქვეყანაში, სადაც ჩვეულებრივ, საუზმეს 7:00-დან 8:00 საათამდე მიირთმევენ, ლანჩს - 12:00-დან 13:00 საათამდე, ხოლო ვახშამს - 18:00-დან 19:00 საათამდე. იქნებ კარგი იყოს ისეთი პროგრამის ქონა, რომელიც გეტყვით, როდის რა ჭამოთ?
// შექმენით პროგრამა, რომელიც მომხმარებელს სთხოვს დროის შეყვანას და დაუბეჭდავს, საუზმის დროა, ლანჩის თუ - ვახშმის. თუ კვების დრო არაა, output საერთოდ არაფერი იქნება. ვივარაუდოთ, რომ მომხმარებლის input-ის ფორმატირება მოხდება 24 საათში, როგორც: #:## ან ##:##. ასევე, დაუშვით, რომ თითოეული კვების ინტერვალი ითვლება, ანუ, იქნება ეს 7:00, 7:01, 7:59, თუ 8:00, ან 7:00-სა და 8:00 საათს შორის ნებისმიერ დროს, თითოეულ შემთხვევაში საუზმის დროა.
// შექმენით თქვენი პროგრამა ქვემოთ მოცემულის მიხედვით, სადაც კონვერტირება არის ფუნქცია (რომელიც შეიძლება გამოიძახოს main-ით), რომელიც გარდაქმნის დროს, str 24-საათიან ფორმატში, საათების შესაბამის რაოდენობაზე, როგორც float. მაგალითად, „7:30“ მსგავსი დროის გათვალისწინებით (ანუ 7 საათი და 30 წუთი), კონვერტაცია უნდა დააბრუნოს 7.5 (ანუ 7.5 საათი).
// პროგრამაში შექმენით ფუნქცია სახელწოდებით convert, რომელიც დროის დაკონვერტირებაზე იზრუნებს - 24-საათიანი ფორმატის სტრიქონს (string) გადაიყვანს შესაბამის საათობრივ რიცხვში, ათწილადის გამოყენებით. მაგალითად, "7:30" - 7 საათი და 30 წუთი, კონვერტაციის დროს 7.5 უნდა გახდეს.

// const timeString = prompt("what time is it? ").trim();
// let timeDec = convertTimeToDecimal(timeString).toFixed(2);
// mealTime(timeDec);

// function convertTimeToDecimal(timeString) {
//   let [hours, minutes] = timeString.split(":").map(Number);
//   let decimalValue = hours + minutes / 60;
//   return decimalValue;
// }

// function mealTime(time) {
//   if (time >= 7 && time <= 8) {
//     console.log(`Breakfast time`);
//   } else if (time >= 12 && time <= 13) {
//     console.log(`Lunch time`);
//   } else if (time >= 18 && time <= 19) {
//     console.log(`Dinner time`);
//   } else {
//     console.log("");
//   }
// }

// Write a program that prompts the user for five numbers and computes the total of the numbers. Example Output
// Enter a number: 1
// Enter a number: 2
// Enter a number: 3
// Enter a number: 4
// Enter a number: 5
// The total is 15.
// he prompting must use repetition, such as a counted loop, not three separate prompts.
// Create a flowchart before writing the program.

// let total = 0;
// for (let i = 1; i <= 5; i++) {
//   let userInput = prompt("Enter a number:");
//   let number = parseFloat(userInput);
//   if (!isNaN(number)) {
//     total += number;
//   } else {
//     console.log("Invalid input. Please enter a valid number.");
//     i--;
//   }
// }
// console.log("The total is:", total);

// მარტივი პრობლემების გადასაჭრელად ყოველთვის ჩახლართული საკონტროლო სტრუქტურა არაა საჭირო. ზოგჯერ პროგრამა ერთ შემთხვევაში დამატებით ნაბიჯს მოითხოვს, მაგრამ ყველა სხვა შემთხვევაში სხვა არაფერია გასაკეთებელი. დაწერეთ მარტივი პროგრამა შეკვეთის ოდენობისთვის დამატებითი გადასახადის (tax) გამოსათვლელად. პროგრამამ უნდა მოითხოვოს შეკვეთის ოდენობა და შტატი. თუ შტატი არის „WI“, მაშინ შეკვეთას უნდა დაერიცხოს 5.5% გადასახადი. პროგრამამ უნდა დაბეჭდოს ქვეჯამი, გადასახადი და ჯამური გადასახდელი თანხა ვისკონსინის მცხოვრებლებისთვის, ხოლო სხვებისთვის - მხოლოდ ჯამური თანხა.
// Example Output
// < What is the order amount? 10
// < What is the state? WI
// < The subtotal is $10.00.
// < The tax is $0.55.
// < The total is $10.55.

// < What is the order amount? 10
// < What is the state? MN
// < The total is $10.00

// const amount = Number(prompt("What is the order amount? "));
// const state = prompt("What is the state? ").trim().toUpperCase();
// convertTotal(amount, state);

// function convertTotal(amount, state) {
//   if (state === "WI") {
//     let tax = amount * 0.055;
//     let total = amount + tax;
//     console.log(`The tax is $${tax}`);
//     console.log(`The total is $${total}`);
//   } else {
//     console.log(`The total is $${amount}`);
//   }
// }

// პაროლის ვალიდაცია ხდება მომხმარებლის მიერ მოწოდებული მნიშვნელობის შედარებით შენახულ მნიშვნელობასთან. პაროლი ან სწორია, ან არა. შექმენით მარტივი პროგრამა, რომელიც პაროლის ვალიდაციას აკეთებს. პროგრამამ უნდა მოითხოვოს მომხმარებლის სახელი და პაროლი, უნდა შეადაროს მომხმარებლის მიერ ჩაწერილი პაროლი ცნობილ პაროლს. თუ ეს ორი ერთმანეთს ემთხვევა, პროგრამამ უნდა აჩვენოს "Welcome!", თუ არ ემთხვევა, უნდა გამოჩნდეს „I don't know you“.
// Example Output
// < What is the password? 12345
// < I don't know you.
// < What is the password? abc$123
// < Welcome!

// const password = "abc$123";

// const userName = prompt("What's your name? ").trim();
// const userPass = prompt("What's the password? ").trim();
// comparision(userPass);

// function comparision(pass) {
//   if (pass === password) {
//     console.log(`Welcome ${userName}!`);
//   } else {
//     console.log(`I don't know you`);
//   }
// }

// თქვენ შეგიძლიათ შეამოწმოთ, თანაბარია თუ არა ორი რიცხვი, მაგრამ შეიძლება დაგჭირდეთ ასევე იმის გატესტვა, როგორ დარდება input-ის რიცხვი ცნობილ მნიშვნელობას, ხოლო ამის მიხედვით აჩვენოთ შეტყობინება, მოცემული რიცხვი მეტისმეტად დაბალია თუ - მაღალი. დაწერეთ პროგრამა, რომელიც კითხულობს მომხმარებელს ასაკს და შეადარეთ ის კანონიერად მართვის ასაკს - 16-ს. თუ მომხმარებელი არის 16 წლის ან მეტის, მაშინ პროგრამაში უნდა გამოჩნდეს „You are old enough to legally drive.“. თუ მომხმარებელი 16 წელზე ნაკლები ასაკისაა, პროგრამამ უნდა აჩვენოს: „You are not old enough to legally drive.“
// Example Output
// < What is your age? 15
// < You are not old enough to legally drive.
// < What is your age? 35
// < You are old enough to legally drive.

// const age = Number(prompt("What is your age? "));
// islegal(age);

// function islegal(age) {
//   if (age >= 16) {
//     console.log(`You are old enough to legally drive.`);
//   } else {
//     console.log(`You are not old enough to legally drive.`);
//   }
// }

// ზოგჯერ ჩახლართული გამოთვლები გვჭირდება, რომელიც არაერთი მოწოდებული მონაცემის საფუძველზე სრულდება და შედეგს სწორედ ასე ვიღებთ. შექმენით პროგრამა, რომელიც მოგთხოვთ თქვენს წონას, სქესს, ჭიქების რაოდენობას, დალეული სასმელის მოცულობის მიხედვით ალკოჰოლის რაოდენობას და ბოლო ჭიქის მიღების შემდეგ გასული დროის მონაკვეთს. გამოთვალეთ თქვენს სისხლში ალკოჰოლის შემცველობა (BAC) შემდეგი ფორმულის გამოყენებით:

// BAC = (A × 5.14 / W × r) − .015 × H

// სადაც:

// A არის მთლიანი მოხმარებული ალკოჰოლი, უნციაში (oz).
// W არის სხეულის წონა ფუნტებში.
// r არის ალკოჰოლის განაწილების თანაფარდობა: – 0,73 მამაკაცებისთვის – 0,66 ქალებისთვის
// H არის გასული საათების რაოდენობა ბოლო ჭიქის დალევის მერე.
// პროგრამამ უნდა დაბეჭდოს, შეიძლება თუ არა ავტომობილის მართვა, სისხლში ალკოჰოლის შემცველობის 0,08-სთან შედარებით.

// Example Output

// < Your BAC is 0.08
// < It is not legal for you to drive.

// const A = Number(prompt("How much alcohol did you get? (in oz) "));
// const W = Number(prompt("Enter you weight in funt "));
// const gender = prompt("Please enter your gender (e.g., Male, Female):")
//   .toLowerCase()
//   .trim();
// const H = Number(prompt("How many hours past after last drink: "));

// function getR(gender) {
//   if (gender === "male") {
//     r = 0.73;
//   } else if (gender === "female") {
//     r = 0.66;
//   }
//   return r;
// }
// function countBAC() {
//   // BAC = (A × 5.14 / W × r) − .015 × H
//   let r = getR(gender);
//   let BAC = (((A * 5.14) / W) * r - 0.015 * H).toFixed(2);
//   let legal;
//   if (BAC >= 0.08) {
//     legal = "is not";
//   } else {
//     legal = "is";
//   }
//   console.log(`Your BAC is ${BAC}`);
//   console.log(`It ${legal} legal for you to drive.`);
// }
// countBAC();

// const choiceinput = prompt(
//   "Press C to convert from Fahrenheit to Celsius.\nPress F to convert from Celsius to Fahrenheit.\nYour choice:"
// );
// const choice = choiceinput ? choiceinput.toUpperCase() : "";

// if (choice === "C") {
//   let fahrenheitInput = parseFloat(
//     prompt("Enter the temperature in Fahrenheit: ")
//   );
//   let celsiusOutput = fahrenheitToCelsius(fahrenheitInput);
//   console.log(`Result: ${fahrenheitInput}°F is ${celsiusOutput.toFixed(2)}°C`);
// } else if (choice === "F") {
//   let celsiusInput = parseFloat(prompt("Enter the temperature in Celsius:"));
//   let fahrenheitOutput = celsiusToFahrenheit(celsiusInput);
//   console.log(`Result: ${celsiusInput}°C is ${fahrenheitOutput.toFixed(2)}°F`);
// } else {
//   console.log("Invalid choice. Please choose either C or F.");
// }

// function fahrenheitToCelsius(fahrenheit) {
//   return (fahrenheit - 32) * (5 / 9);
// }
// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// შექმენით პროგრამა სხეულის მასის ინდექსის (BMI) გამოთვლისთვის. ადამიანის სიმაღლე დუიმებში უნდა იყოს, ხოლო წონა - ფუნტებში. პროგრამამ უნდა სთხოვოს მომხმარებელს წონის და სიმაღლის მითითება. გამოთვალეთ BMI შემდეგი ფორმულის გამოყენებით:
// bmi = (weight / (height × height))* 703
// თუ BMI არის 18,5-დან 25-მდე, აჩვენეთ, რომ ადამიანის წონა ნორმაშია. თუ BMI ამ შუალედს სცილდება, დაბეჭდეთ, ადამიანს მცირე წონა აქვს თუ ჭარბი და მიუთითეთ, რომ მიმართოს ექიმს.
// Example Output
// < Your BMI is 19.5.
// < You are within the ideal weight range.

// < Your BMI is 32.5.
// < You are overweight. You should see your doctor.

// const weight = Number(prompt("Enter your weight in funt: "));
// const height = Number(prompt("Enter your height in inches: "));
// const BMI = calculateBMI(weight, height);
// result();

// function calculateBMI(x, y) {
//   return ((x / y ** 2) * 703).toFixed(2);
// }

// function result() {
//   console.log(`Your BMI is ${BMI}`);
//   if (BMI >= 18.5 && BMI <= 25) {
//     console.log(`You are within the ideal weight range.`);
//   } else if (BMI < 18.5) {
//     console.log(`You are underweight. You should see your doctor.`);
//   } else if (BMI > 25) {
//     console.log(`You are overweight. You should see your doctor.`);
//   }
// }

// კომპლექსურ პროგრამებს შეიძლება გადაწყვეტილებებში კიდევ სხვა გადაწყვეტილებები ჰქონდეთ ჩაშენებული, ასე რომ, როდესაც ერთი გადაწყვეტილება მიიღება, დამატებითი გადაწყვეტილებებიც უნდა იქნას მიღებული. შექმენით საგადასახადო კალკულატორი, რომელიც ამუშავებს მრავალ შტატს და მრავალ დაბას თითოეულ შტატში. პროგრამა მოუწოდებს მომხმარებელს შეკვეთის ოდენობას და შტატს, სადაც შეკვეთა გაიგზავნება. ვისკონსინის მკვიდრთათვის, მოითხოვეთ საცხოვრებელი ადგილი.
// • Eau Claire-ის მცხოვრებლებს დამატებით დააკისრეთ 0.005 გადასახადი. • Dunn-ის მცხოვრებლების კი დამატებით დააკისრეთ 0.004 გადასახადი.
// ილინოისის მცხოვრებლებს 8% გაყიდვების გადასახადი უნდა დაეკისროთ, დაბის დონის დამატებითი გადასახადის გარეშე. არც ერთ სხვა შტატს გადასახადი არ ეკისრება. შესაბამისად, პროგრამა აჩვენებს გადასახადს (tax) და ჯამს (total - (საწყისი ფასი + გადასახადი)) ვისკონსინისა და ილინოისის მცხოვრებლებისთვის, ყველა დანარჩენი შტატისთვის კი - მხოლოდ ჯამს.
// Example Output
// < What is the order amount? $100
// < What state do you live in? Wisconsin
// < What county do you live in? Dunn
// < The tax is $0.40.
// < The total is $100.40.

// < What is the order amount? $75
// < What state do you live in? Illinois
// < The tax is 8%.
// < The total is $81.00.

// < What is the order amount? 200
// < What state do you live in? California
// < The total is $200.00.

// const amount = Number(prompt("What is the order amount? "));
// const state = prompt("What state do you live in?").trim().toLowerCase();

// if (state === "wisconsin") {
//   let country = prompt("What county do you live in? ")
//     .trim()
//     .toLowerCase()
//     .replace(/\s+/g, "");
//   if (country === "eauclaire") {
//     let tax = amount * 0.005;
//     let total = amount + tax;
//     console.log(`The tax is $${tax}`);
//     console.log(`The total is $${total}`);
//   } else if (country === "dunn") {
//     let tax = amount * 0.004;
//     let total = amount + tax;
//     console.log(`The tax is $${tax}`);
//     console.log(`The total is $${total}`);
//   }
// } else if (state === "illinois") {
//   let tax = amount * 0.08;
//   let total = amount + tax;
//   console.log(`The tax is 8%`);
//   console.log(`The total is $${total}`);
// } else {
//   console.log(`The total is ${amount}`);
// };

// ბევრი პროგრამა ინფორმაციას მომხმარებლისთვის ერთი ფორმით აჩვენებს, მაგრამ იყენებს სხვა ფორმას პროგრამის შიგნით. მაგალითად, შეგიძლიათ აჩვენოთ სიტყვა Blue ეკრანზე, მაგრამ ეკრანს მიღმა გექნებათ ამ ფერის რიცხვითი ან ტექსტუალური მნიშვნელობა, რადგან შეიძლება, სიტყვიერი აღწერილობის წარმოდგენა სხვა ენაზე - ესპანურენოვანი ვიზიტორებისთვის გჭირდებოდეთ. დაწერეთ პროგრამა, რომელიც გადააქცევს რიცხვს 1-დან 12-მდე შესაბამის თვეში. მოითხოვეთ ნომერი და აჩვენეთ შესაბამისი კალენდარული თვე, სადაც 1 იქნება იანვარი, ხოლო 12 - დეკემბერი. ამ დიაპაზონის გარეთ ნებისმიერი მნიშვნელობისთვის დაბეჭდეთ შესაბამისი შეცდომის შეტყობინება.
// Example Output
// < Please enter the number of the month: 3
// < The name of the month is March.
// ამ პროგრამისთვის გამოიყენეთ switch/case statement.

// const input = Number(prompt("Please enter the number of the month: "));

// if (!isNaN(input) && input >= 1 && input <= 12) {
//   // Convert the number to the corresponding month using switch
//   let monthName;
//   switch (input) {
//     case 1:
//       monthName = "January";
//       break;
//     case 2:
//       monthName = "February";
//       break;
//     case 3:
//       monthName = "March";
//       break;
//     case 4:
//       monthName = "April";
//       break;
//     case 5:
//       monthName = "May";
//       break;
//     case 6:
//       monthName = "June";
//       break;
//     case 7:
//       monthName = "July";
//       break;
//     case 8:
//       monthName = "August";
//       break;
//     case 9:
//       monthName = "September";
//       break;
//     case 10:
//       monthName = "October";
//       break;
//     case 11:
//       monthName = "November";
//       break;
//     case 12:
//       monthName = "December";
//       break;
//     default:
//       console.log("Invalid input. Please enter a number between 1 and 12.");
//       break;
//   }
//   if (monthName) {
//     console.log(`The name of the month is ${monthName}.`);
//   }
// } else {
//   console.log("Invalid input. Please enter a valid number between 1 and 12.");
// }

// პროექტი 34 - Comparing Numbers - რიცხვების შედარება
// ერთი Input მნიშვნელობის შედარება ცნობილ მნიშვნელობასთან საკმაოდ ხშირია, მაგრამ ასევე ხშირად დაგჭირდებათ input-ების კრებულის დამუშავება. დაწერეთ პროგრამა, რომელიც ითხოვს სამ რიცხვს. ჯერ დარწმუნდით, რომ ყველა რიცხვი განსხვავებულია და თუ ისინი არ განსხვავდებიან, მაშინ პროგრამის მუშაობა შეჩერდეს. წინააღმდეგ შემთხვევაში, აჩვენეთ ამ სამიდან ყველაზე დიდი რიცხვი.
// Example Output
// < Enter the first number: 1
// < Enter the second number: 51
// < Enter the third number: 2
// < The largest number is 51.
// დაწერეთ ალგორითმი ხელით. ნუ გამოიყენებთ ჩაშენებულ ფუნქციას სიაში ყველაზე დიდი რიცხვის საპოვნელად.

// let largest = 0;
// const firstnum = Number(prompt("Enter the first number: "));
// largest = firstnum;
// const secondnum = Number(prompt("Enter the second number: "));
// if (secondnum > firstnum) {
//   largest = secondnum;
// }
// const thirdnum = Number(prompt("Enter the third number: "));
// if (thirdnum > largest) {
//   largest = thirdnum;
// }
// console.log(`The largest number is ${largest}`);

// საექსპერტო სისტემა (expert system) ხელოვნური ინტელექტის პროგრამის ტიპია, რომელიც იყენებს გარკვეული ცოდნის ბაზას და წესების ერთობლიობას იმ დავალების შესასრულებლად, რომელიც შეიძლება შეასრულოს ადამიანმა ექსპერტმა. მაგალითად, ბევრი ისეთი ვებსაიტია ხელმისაწვდომი, რომელიც კითხვებზე პასუხების გაცემით გარკვეული სამედიცინო პრობლემის თვითდიაგნოსტიკაში გვეხმარებიან; ტექნიკისა და პროგრამული უზრუნველყოფის მრავალი კომპანია გვთავაზობს პრობლემების მოგვარების ონლაინ ინსტრუმენტებს, რომელიც ადამიანებს მარტივი ტექნიკური საკითხების გადაჭრაში სხვა ადამიანთან დარეკვამდე ეხმარება. შექმენით პროგრამა, რომელიც მომხმარებელს მანქანის პრობლემების მოგვარებაში ეხმარება. თითოეულ კითხვაზე მომხმარებელს "კი/არა" პასუხის გაცემა შეეძლება, პროგრამა კი შესაბამისი კითხვების დასმას ამ პასუხების მიხედვით განაგრძობს.
// Example Output
// < Is the car silent when you turn the key? y
// < Are the battery terminals corroded? n
// < The battery cables may be damaged.
// < Replace cables and try again.

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function askQuestion(question, callback) {
//   rl.question(`${question} (yes/no): `, (answer) => {
//     callback(answer.toLowerCase() === "yes");
//   });
// }

// // Function to display a result based on user responses
// function displayResult(isCarStarting, isEngineRunning, hasFuel) {
//   if (isCarStarting && isEngineRunning && hasFuel) {
//     console.log("Your car is running well. No issues detected!");
//   } else {
//     console.log(
//       "There may be issues with your car. Consider checking the following:"
//     );

//     if (!isCarStarting) {
//       console.log("- Check the battery and starter.");
//     }

//     if (!isEngineRunning) {
//       console.log("- Inspect the ignition system.");
//     }

//     if (!hasFuel) {
//       console.log("- Ensure there is enough fuel in the tank.");
//     }
//   }

//   rl.close();
// }

// askQuestion("Is your car starting?", (isCarStarting) => {
//   askQuestion("Is the engine running?", (isEngineRunning) => {
//     askQuestion("Do you have enough fuel?", (hasFuel) => {
//       displayResult(isCarStarting, isEngineRunning, hasFuel);
//     });
//   });
// });

//სავარჯიშოები
// დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.

// const num = Number(prompt("Enter your number: "));
// if (num % 2 == 0) {
//   console.log(`Your number is even`);
// } else {
//   console.log(`Your number is odd`);
// }

// დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.
// const num = Number(prompt("Enter your number: "));
// if (num < 0) {
//   console.log(`Your number is negative`);
// } else if (num > 0) {
//   console.log(`Your number is positive`);
// } else {
//   console.log(`Your number is 0`);
// }

// დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა რიცხვი გასაყოფი სხვა რიცხვზე.

// const num = Number(prompt("Enter your number: "));
// const divider = Number(prompt("Enter divider number: "));
// if (num % divider == 0) {
//   console.log(`Your number is dividing by divider without reminder`);
// } else {
//   console.log(`Your number is not dividing by divider without reminder`);
// }

// დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.

// const str = prompt("Enter your sentence: ").trim();
// if (str.length > 0) {
//   console.log("your sentence is not empty");
// } else {
//   console.log("your sentence is empty");
// }

// დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.

// const inputSentence = prompt("Enter a sentence: ").trim().toLowerCase();
// const targetWord = prompt("Enter the word to check for: ").trim().toLowerCase();
// if (inputSentence.includes(targetWord)) {
//   console.log(`Your sentence contains the word - ${targetWord}`);
// } else {
//   console.log(`Your sentence does not contain the word - ${targetWord}`);
// }

// დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.

// let lowest;
// const firstnum = Number(prompt("Enter first number: "));
// lowest = firstnum;
// const secondnum = Number(prompt("Enter second number: "));
// if (secondnum < firstnum) {
//   lowest = secondnum;
// }
// console.log(`The lowest number is ${lowest}`);
