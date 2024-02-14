// Callback Basics: Write a function that takes a callback as an argument and calls it after a delay of 1 second.
// function delayedCallback(callback) {
//   setTimeout(callback, 1000);
// }
// function myCallback() {
//   console.log("Callback called after 1 second");
// }
// delayedCallback(myCallback);

// Promise Basics: Create a promise that resolves after 2 seconds and logs a success message.

// const delayedPromise = new Promise((resolve, reject) => {
//   const simulateError = false; //change into ,,true" if want to see reject error
//   setTimeout(() => {
//     if (simulateError) {
//       reject("Promise rejected due to an error");
//     } else {
//       resolve("Promise resolved after 2 seconds");
//     }
//   }, 2000);
// });
// delayedPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise Chain: Create a chain of promises where each resolves after 1 second and logs a message.

// Function to create a delayed promise
// const createDelayedPromise = (message, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve();
//     }, delay);
//   });
// };
// createDelayedPromise("Promise 1 resolved after 1 second", 1000)
//   .then(() => createDelayedPromise("Promise 2 resolved after 1 second", 1000))
//   .then(() => createDelayedPromise("Promise 3 resolved after 1 second", 1000))
//   .then(() => {
//     console.log("Promise chain completed");
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });

//Async/Await: Write an asynchronous function using async/await that simulates fetching data from an API after 2 seconds.
// const fetchDataFromApi = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const fakeData = { message: "Data from API" };
//       resolve(fakeData);
//     }, 2000);
//   });
// };
// const fetchData = async () => {
//   try {
//     console.log("Fetching data...");
//     const data = await fetchDataFromApi();
//     console.log("Data received:", data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
// fetchData();

// Error Handling: Modify the previous example to include error handling using try/catch.
// Function to simulate fetching data from an API after 2 seconds
//

//Fetch API: Use the Fetch API to make a simple GET request to a mock API and log the response.
// const apiUrl = "https://jsonplaceholder.typicode.com/todos/1"; //fake API
// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Response:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

// Async Function with Fetch: Create an asynchronous function that uses the Fetch API to get data from an API and log it.
// const fetchData = async () => {
//   const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Response:", data);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// };
// fetchData();
