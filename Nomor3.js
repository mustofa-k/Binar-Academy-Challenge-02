function getAngkaTerbesarKedua(dataNumbers) {
  if (!Array.isArray(dataNumbers)) {
    return "Error: Parameter harus berupa array";
  }

  const sortedNumbers = dataNumbers.slice().sort((a, b) => b - a);

  if (sortedNumbers.length >= 2) {
    return sortedNumbers[1];
  } else {
    return "Error: Tidak ada angka terbesar kedua dalam array";
  }
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));

console.log(getAngkaTerbesarKedua(0));

console.log(getAngkaTerbesarKedua());
