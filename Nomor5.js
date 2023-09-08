const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduct: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduct: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduct: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5
  },
  {
    idProduct: 'BOOK002421',
    namaProduct: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56
  },
];

const formatRupiah = angka => {
  const reverse = angka.toString().split('').reverse().join('');
  const ribuanFormatted = reverse.match(/\d{1,3}/g);
  return 'Rp ' + ribuanFormatted.join('.').split('').reverse().join('');
}


const getInfoPenjualan = dataPenjualan => {
  if (!Array.isArray(dataPenjualan)) {
    throw new Error('Data penjualan harus berupa array');
  }

  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = '';
  let maxTerjual = 0;
  const penulisTerlaris = {};

  dataPenjualan.forEach(product => {
    if (
      typeof product.hargaBeli !== 'number' ||
      typeof product.hargaJual !== 'number' ||
      typeof product.totalTerjual !== 'number' ||
      typeof product.sisaStok !== 'number'
    ) {
      throw new Error('Data penjualan harus memiliki tipe data yang valid');
    }

    const modal = product.hargaBeli * (product.totalTerjual + product.sisaStok);
    const keuntungan = (product.hargaJual - product.hargaBeli) * product.totalTerjual;

    totalModal += modal;
    totalKeuntungan += keuntungan;

    if (product.totalTerjual > maxTerjual) {
      maxTerjual = product.totalTerjual;
      produkBukuTerlaris = product.namaProduct;
    }

    if (!penulisTerlaris[product.penulis]) {
      penulisTerlaris[product.penulis] = 0;
    }

    penulisTerlaris[product.penulis] += product.totalTerjual;
  });

  let maxPenulisTerlaris = 0;
  let penulisNama = '';

  for (const penulis in penulisTerlaris) {
    if (penulisTerlaris[penulis] > maxPenulisTerlaris) {
      maxPenulisTerlaris = penulisTerlaris[penulis];
      penulisNama = penulis;
    }
  }

  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2);

  return {
    totalKeuntungan: formatRupiah(totalKeuntungan),
    totalModal: formatRupiah(totalModal),
    produkBukuTerlaris,
    penulisTerlaris: penulisNama,
    persentaseKeuntungan: persentaseKeuntungan + '%',
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));
