//  ---------------- TIDAK TERPAKAI -----------------
// THEN CATCH
// 1.1
// function cobaCek(day) {
//   cekHariKerja(day)
//     .then((response) =>
//       console.log(`OK! Hari ini adalah hari ${response} dan hari kerja`)
//     )
//     .catch((response) => console.log(response));
// }

// cobaCek("sabtu");

// THEN CATCH
// 1.2
// function cobaCek(day) {
//   const message = document.getElementById("message");
//   cekHariKerja(day)
//     .then((response) => {
//       message.textContent = `Hari ini hari ${response}! Waktunya kerja!`;
//     })
//     .catch((response) => {
//       message.textContent = response;
//     });
// }
// cobaCek("senin");

// TRY CATCH
// 2.1
// async function cobaCek(day) {
//   try {
//     const coba = await cekHariKerja(day);
//     console.log(coba);
//   } catch (err) {
//     console.log(err);
//   }
// }
// cobaCek("senin");

// TRY CATCH
// 2.2
// async function cobaCek(day) {
//   try {
//     const message = document.getElementById("message");
//     const cekDay = await cekHariKerja(day);
//     message.textContent = `Hari ini hari ${cekDay}. Waktunya kerja!`;
//   } catch (error) {
//     message.textContent = error;
//   }
// }
// cobaCek("senin");

// TASK 4
// ----------------- TIDAK TERPAKAI -----------------
// 3.
// function displayResult(test) {
//   document.getElementById("cek").innerHTML = test;
// }
// function cekNilai(nilai) {
//   const promise = new Promise((resolve, reject) => {
//     if (nilai >= 90) {
//       resolve("Naik kelas");
//     } else {
//       reject("Tinggal kelas");
//     }
//   });

//   promise
//     .then((value) => {
//       displayResult(value);
//     })
//     .catch((error) => {
//       displayResult(error);
//     });
// }

// cekNilai(90);

// 1.
// let ditepati = false;
// const janji = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati agak telat.");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati habis janjian 2 detik.");
//     }, 2000);
//   }
// });

// janji
//   .then((response) => console.log("OK!" + response))
//   .catch((response) => console.log("NOT OK!" + response));

// 2.
// const film = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         judul: "Tendangan si Madun",
//         sutradara: "Ronaldikin",
//         aktor: "Madun",
//       },
//     ]);
//   }, 3000);
// });

// const cuaca = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         kota: "Denpasar",
//         suhu: 26,
//         kondisi: "Cerah berawan",
//       },
//     ]);
//   }, 4500);
// });

// Promise.all([film, cuaca]).then((response) => {
//   const [film, cuaca] = response;
//   console.log(film);
//   console.log(cuaca);
// });

// TASK 5
// CARA CONSOLE LOG
// CARA 1
// function getUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) =>
//       json.map((item) => {
//         return item.name;
//       })
//     )
//     .catch((e) => {
//       return e.responseText;
//     });
// }

// async function getNameUsers() {
//   try {
//     const coba = await getUsers();
//     coba.forEach((n) => {
//       console.log(n);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// getNameUsers();

// CARA CONSOLE LOG
// CARA 2

// const getNameButton = document.getElementById("get-name-users");
// getNameButton.addEventListener("click", function () {
//   setTimeout(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((user) =>
//         user.map((i) => {
//           console.log(i.name);
//         })
//       );
//   }, 2000);
// });

// ------------ TIDAK TERPAKAI ----------
// CARA 1

// function getUsers() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((response) =>
//       response.map((item) => {
//         console.log(item);
//       })
//     )
//     .catch((e) => {
//       console.log(e.responseText);
//     });
// }

// getUsers();

// TASK 4
// 1.
// let ditepati = false;
// const film = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve([
//       {
//         judul: "Captain Tsubasa",
//         sutradara: "Masashi Kishimoto",
//         aktor: "Tsubasa",
//       },
//     ]);
//   } else {
//     reject("Film tidak jadi tayang!");
//   }
// });

// 2.
// const cuaca = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve([
//       {
//         kota: "Denpasar",
//         suhu: 15,
//       },
//     ]);
//   } else {
//     reject("Aplikasi cuaca sedang bermasalah!");
//   }
// });

// film
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// cuaca
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// TASK 4
// function iceCreamShop() {
//     let stocks = {
//       fruits: ["strawberry", "grapes", "banana", "apple"],
//       liquid: ["water", "ice"],
//       holder: ["cone", "cup", "stick"],
//       toppings: ["chocolate", "peanuts"],
//     };

//     let isShopOpen = true;

//     function time(ms) {
//       return new Promise((resolve, reject) => {
//         if (isShopOpen) {
//           setTimeout(() => {
//             resolve();
//           }, ms);
//           // setTimeout(resolve, ms);
//         } else {
//           reject(error);
//         }
//       });
//     }

//     async function kitchen() {
//       try {
//         await time(2000);
//         console.log(`${stocks.fruits[0]} was selected`);

//         await time(0000);
//         console.log("production has been started");

//         await time(2000);
//         console.log(`${stocks.fruits[0]} was chopped`);

//         await time(1000);
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//         await time(1000);
//         console.log("start the machine");

//         await time(2000);
//         console.log(`ice cream placed on ${stocks.holder[0]}`);

//         await time(3000);
//         console.log(`${stocks.toppings[0]} was added`);

//         await time(2000);
//         console.log("ice cream ready to serve");
//       } catch (error) {
//         console.log("customer left");
//       } finally {
//         console.log("day ended, shop is closed");
//       }
//     }

//     kitchen();
//   }

iceCreamShop();
