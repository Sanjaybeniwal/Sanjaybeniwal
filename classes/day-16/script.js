
// // Promise.resolve("Hello Resolve!")
// //     .then(data => console.log(data))
// //     .catch(err => console.log(err))
// //     .finally(() => console.log("Finally Called!"));

// // Promise.reject("Hello Reject!")
// //     .then(data => console.log(data))
// //     .catch(err => console.log(err))
// //     .finally(() => console.log("Finally Called!"));

// // async & await

// // const promise1 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         reject("Promise Rejected!");
// //     }, 500);
// // })

// console.log("started....");

// // async function resolve() {
// //     try {
// //         const result = await promise1;
// //         console.log(result);
// //     } catch(err) {
// //         console.log(err);
// //     }
// // }
// //
// // resolve();


// const fetchRecords = async () => {
//      // fetch("https://jsonplaceholder.typicode.com/posts")
//      //     .then(res => res.json())
//      //     .then(data => console.log(data))
//      //     .catch((error) => console.log(error));

//     try {
//         const result = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const value = await result.json();
//         console.log(value);
//         // if (result.ok || result.status === 200) {
//         //     const value = await result.json();
//         //     console.log(value);
//         // }
//     } catch(err) {
//         console.log(err);
//     } finally {
//         console.log("Finished fetching records...");
//     }


// }

// fetchRecords();


// console.log("completed....");


function fetchUserData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ name: "John", age: 25 });
      }, 1000);
    });
  }

  console.log('>>>>>this', this);

  
  async function showUserData() {
    console.log("Fetching user...");
    console.log('>>>>>this', this);
    const data = this.fetchUserData();
    const user = await data; // waits for the promise
    console.log("User data:", user);
  }
  
  showUserData();
  