// Task 4.1 async await

// async function cekNilai(nilai) {
//   const myPromise = new Promise((resolve, reject) => {
//     if (nilai >= 90) {
//       resolve("naik kelas");
//     } else {
//       reject("tinggal kelas");
//     }
//   });
//   document.getElementById("cek").innerHTML = myPromise;
//   console.log(myPromise);
// }

// cekNilai(90);

// TASK 4.1 promise
function displayResult(test) {
  document.getElementById("cek").innerHTML = test;
}
function cekNilai(nilai) {
  const promise = new Promise((resolve, reject) => {
    if (nilai >= 90) {
      resolve("Naik kelas");
    } else {
      reject("Tinggal kelas");
    }
  });

  promise
    .then((value) => {
      displayResult(value);
    })
    .catch((error) => {
      displayResult(error);
    });
}

cekNilai(90);

// Task 4.2

// -------------------------------------

async function foo() {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("1"))
  );
  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("2"))
  );
}
foo();
