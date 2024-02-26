// პროექტი 56 - Bitcoin Price Index - ბიტკოინის ფასის ინდექსი
// ბიტკოინი არის ციფრული ვალუტის ფორმა, სხვაგვარად ცნობილი, როგორც კრიპტოვალუტა. ცენტრალურ ხელისუფლებაზე დაყრდნობის ნაცვლად, ბიტკოინი ტრანზაქციებისთვის ეყრდნობა ქსელ ბლოკჩეინს.
// ბიტკოინზე მოთხოვნის არსებობის გამო, მომხმარებლები მზად არიან, გადაცვალონ ის სხვა ვალუტაზე (მაგ. დოლარზე).
// დაწერეთ პროგრამა, რომელიც:
// ელის, რომ მომხმარებელი მიუთითებს სასურველი ბიტკოინების რაოდენობას. თუ ეს არგუმენტი ვერ გადაიქცევა float-ად, პროგრამამ მუშაობა უნდა შეწყვიტოს შეცდომის შეტყობინების (error message) დართვით.
// მოაქვს ინფორმაცია API-დან CoinDesk Bitcoin-ის ფასის ინდექსისთვის: https://api.coindesk.com/v1/bpi/currentprice.json , რომელიც აბრუნებს JSON ობიექტს, რომლის თვისებებს შორის არის ბიტკოინის მიმდინარე ფასი, როგორც float. დარწმუნდით, რომ "დაიჭირეთ" ნებისმიერი გამონაკლისი/შეცდომა ინფორმაციის წამოღების დროს:
// პროგრამამ output-ად უნდა გამოიტანოს USD-ში ბიტკოინის ამჟამინდელი ღირებულება ოთხი თანრიგის ათწილადამდე (მეათასედი).

// const axios = require("axios");

// async function getBitcoinPrice() {
//   try {
//     const response = await axios.get(
//       "https://api.coindesk.com/v1/bpi/currentprice.json"
//     );
//     const data = response.data;
//     return {
//       USD: parseFloat(data.bpi.USD.rate.replace(",", "")),
//       EUR: parseFloat(data.bpi.EUR.rate.replace(",", "")),
//       GBP: parseFloat(data.bpi.GBP.rate.replace(",", "")),
//     };
//   } catch (error) {
//     console.error("Error occurred:", error.message);
//     return null;
//   }
// }

// async function main() {
//   const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   console.log("Choose the currency for conversion:");
//   console.log("1. USD");
//   console.log("2. EUR");
//   console.log("3. GBP");

//   readline.question("Enter the currency number: ", async (currencyChoice) => {
//     try {
//       currencyChoice = parseInt(currencyChoice);
//       if (![1, 2, 3].includes(currencyChoice)) {
//         console.log(
//           "Invalid choice. Please enter a valid currency number (1, 2, or 3)."
//         );
//         readline.close();
//         return;
//       }

//       const currencyMap = { 1: "USD", 2: "EUR", 3: "GBP" };
//       const currency = currencyMap[currencyChoice];

//       const bitcoins = parseFloat(
//         await new Promise((resolve) => {
//           readline.question("Enter the desired amount of bitcoins: ", resolve);
//         })
//       );

//       if (isNaN(bitcoins)) {
//         console.log("Invalid input. Please enter a valid number of bitcoins.");
//         readline.close();
//         return;
//       }

//       const bitcoinPrices = await getBitcoinPrice();
//       if (bitcoinPrices !== null) {
//         const valueInChosenCurrency = bitcoins * bitcoinPrices[currency];
//         console.log(
//           `The current value of ${bitcoins.toFixed(
//             4
//           )} bitcoins is ${valueInChosenCurrency.toFixed(4)} ${currency}`
//         );
//       }
//     } catch (error) {
//       console.error("Error occurred:", error.message);
//     } finally {
//       readline.close();
//     }
//   });
// }

// main();

// Retrieve User Profile: Create a function using Fetch API to retrieve a user's profile information from the server

// function getUserProfile(username) {
//   const url = `https://api.github.com/users/${username}`;

//   return fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       console.error("There was a problem fetching the user profile:", error);
//     });
// }

// // Example usage:
// const username = "mariamkvirchiladze";
// getUserProfile(username).then((profileData) => {
//   console.log(profileData);
// });

// Add New Blog Post: Implement a function to add a new blog post using Fetch API, sending the post data to the server.

// function addNewBlogPost(postData) {
//   const url = "https://jsonplaceholder.typicode.com/posts"; // JSONPlaceholder fake API URL

//   return fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(postData),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("New blog post added:", data);
//       return data;
//     })
//     .catch((error) => {
//       console.error("There was a problem adding the new blog post:", error);
//     });
// }

// // Example usage:
// const newPostData = {
//   title: "New Blog Post Title",
//   body: "This is the content of the new blog post.",
//   userId: 1,
// };

// addNewBlogPost(newPostData).then(() => {
//   console.log("New blog post added successfully!");
// });

// Delete Product from Inventory: Write a function that uses Fetch API to delete a specific product from the inventory by sending a DELETE request.
// async function deleteProductFromInventory(productId) {
//   const apiUrl = `https://jsonplaceholder.typicode.com/posts/${productId}`;

//   try {
//     // Fetch the current product data
//     const responseBefore = await fetch(apiUrl);
//     const productBefore = await responseBefore.json();
//     console.log("Product Before Delete:", productBefore);

//     // Make DELETE request to remove the product
//     const responseDelete = await fetch(apiUrl, {
//       method: "DELETE",
//     });

//     if (!responseDelete.ok) {
//       throw new Error("Failed to delete product");
//     }

//     console.log("Product Deleted Successfully.");

//     // Fetching the deleted product should now result in a 404 error
//     const responseAfter = await fetch(apiUrl);
//     if (responseAfter.status === 404) {
//       console.log("Product has been successfully deleted.");
//     } else {
//       console.log("Error: Product still exists after deletion.");
//     }
//   } catch (error) {
//     console.error("Error deleting product:", error.message);
//   }
// }

// // Example usage: Delete product with ID '1'
// deleteProductFromInventory(1);

// Update Contact Details: Create a function to update contact details on the server using Fetch API, sending the updated data for a specific contact.

// function updateContactDetails(contactId, updatedData) {
//   const apiUrl = "https://jsonplaceholder.typicode.com/users/" + contactId; // JSONPlaceholder endpoint for updating user details

//   const requestOptions = {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedData),
//   };

//   fetch(apiUrl, requestOptions)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to update contact details");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Contact details updated successfully:", data);
//     })
//     .catch((error) => {
//       console.error("Error updating contact details:", error.message);
//     });
// }

// // Example usage:
// const contactId = 1; // Using contact ID 1 for testing purposes
// const updatedData = {
//   name: "Updated Name",
//   email: "updated@example.com",
//   phone: "123-456-7890",
// };

// updateContactDetails(contactId, updatedData);
