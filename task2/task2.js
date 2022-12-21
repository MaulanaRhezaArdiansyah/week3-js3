// Buatlah sambungan program menggunakan :
// a. then catch
// b. try catch
// untuk mengecek hari kerja dari kode Asynchronous disamping dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya

const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// USE BROWSER
// THEN CATCH
// then akan mengkonsumsi code promise
// cekHariKerja("sabtu")
//   .then((day) => {
//     const message = document.getElementById("message");
//     message.textContent = `Hari ini hari ${day}! Waktunya hari kerja!`;
//   })
//   .catch((err) => {
//     console.log(err);
//     message.textContent = err;
//   });

// TRY CATCH
// try catch digunakan untuk error handling pada async await
// async function cekHari(day) {
//   try {
//     const message = document.getElementById("message");
//     await cekHariKerja(day);
//     message.innerText = `Hari ini hari ${day} dan ini hari kerja! Kerja lembur bagai quda!`;
//   } catch (error) {
//     console.log(err);
//     message.innerText = error;
//   }
// }
// cekHari("rabu");
