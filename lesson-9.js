// პროექტი 50 - Outdated - ვადაგასული
// შეერთებულ შტატებში, თარიღები, როგორც წესი, ფორმატდება თვე-დღე-წლის თანმიმდევრობით (MM/DD/YYYY). ამ ფორმატში თარიღების დალაგება ძნელია, რადგან წელი პირველის ნაცვლად, ბოლოშია. სცადეთ ქრონოლოგიურად დალაგება, მაგალითად, 2/2/1800-ის, 3/3/1900-ის და 1/1/2000-ის ნებისმიერ პროგრამაში (მაგ., ცხრილებში). ამ ფორმატის თარიღები ასევე ბუნდოვანია. ჰარვარდი დაარსდა 1636 წლის 8 სექტემბერს, მაგრამ 9/8/1636 შეიძლება წავიკითხოთ, როგორც 1636 წლის 9 აგვისტოც.

// საბედნიეროდ, კომპიუტერები იყენებენ ISO 8601-ს, საერთაშორისო სტანდარტს, რომელიც აწესებს, რომ თარიღები უნდა იყოს ფორმატირებული წელიწადი-თვე-დღე (YYYY-MM-DD) თანმიმდევრობით. არ აქვს მნიშვნელობა ქვეყანას - დღეები და თვეები ორი ციფრით უნდა იყოს დაფორმატებული, ამიტომ იმ შემთხვევაში, როცა საჭიროა, თითოეული წინ ნულებით უნდა „შეავსოთ“.

// შექმენით პროგრამა, რომელიც მოუწოდებს მომხმარებელს, ჩაწეროს თარიღი - თვე-დღე-წლის თანმიმდევრობით, დაფორმატებული, როგორიცაა 9/8/1636 ან September 8, 1636, სადაც ამ უკანასკნელის თვე შეიძლება იყოს შემდგომი სიის რომელიმე მნიშვნელობა:

// [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

// შემდეგ გამოიტანეთ იგივე თარიღი YYYY-MM-DD ფორმატში. თუ მომხმარებლის input-ი არ არის მოქმედი თარიღი არც ერთ ფორმატში, კვლავ სთხოვეთ მას ჩაწერა. დავუშვათ, რომ ყოველ თვეს აქვს არაუმეტეს 31 დღისა; არ არის საჭირო იმის გადამოწმება, აქვს თუ არა თვეს 28, 29, 30 ან 31 დღე.

// მაგალითად:

// $ Date: 9/8/1636
// $ 1636-09-08

// $ Date: 8 September 1636
// $ Date: September 8, 1636
// $ 1636-09-08

// $ Date: 8/9/1636
// $ 1636-08-09

const prompt = require(`prompt-sync`)();

function isValidDate(month, day, year) {
  const date = new Date(year, month, day);
  return !isNaN(date.getTime()) && date.getMonth() === month;
}

function getValidDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  while (true) {
    const user_input = prompt(
      "Enter a date (month-day-year or Month day, year):"
    ).replace(",", "");

    try {
      let [month, day, year] = user_input.includes("/")
        ? user_input.split("/")
        : user_input.split(" ");
      if (month.length > 2) {
        for (let i = 0; i < months.length; i++) {
          if (month == months[i]) {
            month = i + 1;
          }
        }
      } else {
        month = parseInt(month);
      }

      day = parseInt(day);
      year = parseInt(year);

      if (isValidDate(month, day, year)) {
        return `${year}-${month.toString().padStart(2, "0")}-${day
          .toString()
          .padStart(2, "0")}`;
      } else {
        console.log("Invalid date. Please enter a valid date.");
      }
    } catch (error) {
      console.log("Invalid format. Please enter a valid date.");
    }
  }
}

const result = getValidDate();
console.log(`Formatted date: ${result}`);
