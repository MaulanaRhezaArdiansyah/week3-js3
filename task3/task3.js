// Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map

// Contoh : getMonth(showMonth?)

// MENGGUNAKAN CONSOLE LOG
const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry, Data Not Found"), []);
    }
  }, 2000);
};

const showMonth = async (error, data) => {
  if (!error) {
    await data.map((month) => {
      console.log(month);
    });
  } else {
    console.log(error);
  }
};

getMonth(showMonth);
