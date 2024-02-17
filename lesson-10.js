// პროექტი 56 - Bitcoin Price Index - ბიტკოინის ფასის ინდექსი
// ბიტკოინი არის ციფრული ვალუტის ფორმა, სხვაგვარად ცნობილი, როგორც კრიპტოვალუტა. ცენტრალურ ხელისუფლებაზე დაყრდნობის ნაცვლად, ბიტკოინი ტრანზაქციებისთვის ეყრდნობა ქსელ ბლოკჩეინს.
// ბიტკოინზე მოთხოვნის არსებობის გამო, მომხმარებლები მზად არიან, გადაცვალონ ის სხვა ვალუტაზე (მაგ. დოლარზე).
// დაწერეთ პროგრამა, რომელიც:
// ელის, რომ მომხმარებელი მიუთითებს სასურველი ბიტკოინების რაოდენობას. თუ ეს არგუმენტი ვერ გადაიქცევა float-ად, პროგრამამ მუშაობა უნდა შეწყვიტოს შეცდომის შეტყობინების (error message) დართვით.
// მოაქვს ინფორმაცია API-დან CoinDesk Bitcoin-ის ფასის ინდექსისთვის: https://api.coindesk.com/v1/bpi/currentprice.json , რომელიც აბრუნებს JSON ობიექტს, რომლის თვისებებს შორის არის ბიტკოინის მიმდინარე ფასი, როგორც float. დარწმუნდით, რომ "დაიჭირეთ" ნებისმიერი გამონაკლისი/შეცდომა ინფორმაციის წამოღების დროს:
// პროგრამამ output-ად უნდა გამოიტანოს USD-ში ბიტკოინის ამჟამინდელი ღირებულება ოთხი თანრიგის ათწილადამდე (მეათასედი).

const axios = require("axios");

async function getBitcoinPrice() {
  try {
    const response = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = response.data;
    return {
      USD: parseFloat(data.bpi.USD.rate.replace(",", "")),
      EUR: parseFloat(data.bpi.EUR.rate.replace(",", "")),
      GBP: parseFloat(data.bpi.GBP.rate.replace(",", "")),
    };
  } catch (error) {
    console.error("Error occurred:", error.message);
    return null;
  }
}

async function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Choose the currency for conversion:");
  console.log("1. USD");
  console.log("2. EUR");
  console.log("3. GBP");

  readline.question("Enter the currency number: ", async (currencyChoice) => {
    try {
      currencyChoice = parseInt(currencyChoice);
      if (![1, 2, 3].includes(currencyChoice)) {
        console.log(
          "Invalid choice. Please enter a valid currency number (1, 2, or 3)."
        );
        readline.close();
        return;
      }

      const currencyMap = { 1: "USD", 2: "EUR", 3: "GBP" };
      const currency = currencyMap[currencyChoice];

      const bitcoins = parseFloat(
        await new Promise((resolve) => {
          readline.question("Enter the desired amount of bitcoins: ", resolve);
        })
      );

      if (isNaN(bitcoins)) {
        console.log("Invalid input. Please enter a valid number of bitcoins.");
        readline.close();
        return;
      }

      const bitcoinPrices = await getBitcoinPrice();
      if (bitcoinPrices !== null) {
        const valueInChosenCurrency = bitcoins * bitcoinPrices[currency];
        console.log(
          `The current value of ${bitcoins.toFixed(
            4
          )} bitcoins is ${valueInChosenCurrency.toFixed(4)} ${currency}`
        );
      }
    } catch (error) {
      console.error("Error occurred:", error.message);
    } finally {
      readline.close();
    }
  });
}

main();
