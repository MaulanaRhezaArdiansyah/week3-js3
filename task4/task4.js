// Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

// 1.
// USE CONSOLE LOG
function cekNilai(nilai) {
  return new Promise((resolve, reject) => {
    if (nilai >= 90) {
      resolve("Selamat! Kamu lulus!");
    } else {
      reject("Mohon maaf, kamu belum lulus!");
    }
  });
}
async function cekNilaiSiswa(nilai) {
  try {
    const cek = await cekNilai(nilai);
    console.log(cek);
  } catch (error) {
    console.log(error);
  }
}
cekNilaiSiswa(80);

// 2.
// USE CONSOLE LOG

// function iceCreamShop() {
//   let stocks = {
//     fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
//   };

//   let isShopOpen = false;

//   function time(ms) {
//     return new Promise((resolve, reject) => {
//       if (isShopOpen) {
//         setTimeout(resolve, ms);
//       } else {
//         reject(console.log("shop is closed"));
//       }
//     });
//   }

//   async function kitchen() {
//     try {
//       await time(2000);
//       console.log(`${stocks.fruits[0]} was selected`);

//       await time(0000);
//       console.log("production has been started");

//       await time(2000);
//       console.log(`${stocks.fruits[0]} was chopped`);

//       await time(1000);
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//       await time(1000);
//       console.log("start the machine");

//       await time(2000);
//       console.log(`ice cream placed on ${stocks.holder[0]}`);

//       await time(3000);
//       console.log(`${stocks.toppings[0]} was added`);

//       await time(2000);
//       console.log("ice cream ready to serve");
//     } catch (error) {
//       console.log("customer left");
//     } finally {
//       console.log("day ended, shop is closed");
//     }
//   }

//   kitchen();
// }

// iceCreamShop();
