// Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

// 1. PROGRAM CEK NILAI
// USE CONSOLE LOG
// function cekNilai(nilai) {
//   return new Promise((resolve, reject) => {
//     if (nilai >= 90) {
//       resolve("Selamat! Kamu lulus!");
//     } else {
//       reject("Mohon maaf, kamu belum lulus!");
//     }
//   });
// }
// async function cekNilaiSiswa(nilai) {
//   try {
//     const cek = await cekNilai(nilai);
//     console.log(cek);
//   } catch (error) {
//     console.log(error);
//   }
// }
// cekNilaiSiswa(80);

// 2. PROGRAM SIMULASI TOKO ES KRIM
// USE CONSOLE LOG

const tokoEsKrim = () => {
  let stok = {
    buah: ["strawberry", "anggur", "pisang", "apel"],
    liquid: ["air", "es batu"],
    wadah: ["cone", "cup", "stick"],
    topping: ["coklat", "kacang"],
  };

  let tokoBuka = true;

  const waktu = (ms) => {
    return new Promise((resolve, reject) => {
      if (tokoBuka) {
        setTimeout(() => {
          resolve();
        }, ms);
      } else {
        reject(error);
      }
    });
  };

  const dapur = async () => {
    try {
      await waktu(2000);
      console.log(`${stok.buah[0]} telah dipilih`);

      await waktu(0000);
      console.log("produksi dimulai");

      await waktu(2000);
      console.log(`${stok.buah[0]} dipotong-potong`);

      await waktu(1000);
      console.log(`${stok.liquid[0]} and ${stok.liquid[1]} ditambahkan`);

      await waktu(1000);
      console.log("nyalakan mesin");

      await waktu(2000);
      console.log(`es krim diletakkan di atas ${stok.wadah[0]}`);

      await waktu(3000);
      console.log(`${stok.topping[0]} ditambahkan`);

      await waktu(2000);
      console.log("es krim siap dihidangkan");
    } catch (error) {
      console.log("customer pergi");
    } finally {
      console.log("waktunya tutup toko");
    }
  };

  dapur();
};

tokoEsKrim();
