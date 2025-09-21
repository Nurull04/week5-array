const temanKelas = [
  "Nurul", "Fatimah", "Lee Heeseung", "Jungwon ", "Jongseong",
  "Jaeyun", "Sunghoon", "Sunoo", "Nishimura", "Caesar", "Alexandrovich", "Sergeyev"
];

// map()
const upperCaseNames = temanKelas.map(nama => nama.toUpperCase());
console.log("map() = Semua nama jadi huruf besar:", upperCaseNames);

// filter()
const panjangNama = temanKelas.filter(nama => nama.length > 5);
console.log("\nfilter() = Nama lebih dari 5 huruf:", panjangNama);

// reduce()
const totalPanjang = temanKelas.reduce((total, nama) => total + nama.length, 0);
console.log("\nreduce() = Total panjang semua nama:", totalPanjang);

// find()
const cariNamaN = temanKelas.find(nama => nama.startsWith("N"));
console.log("\nfind() = Nama pertama dengan huruf depan 'N':", cariNamaN);

// tambahan
const semuaNamaN = temanKelas.filter(nama => nama.startsWith("N"));
console.log("filter(N) = Semua nama dengan huruf depan 'N':", semuaNamaN);

// some()
const adaNamaPanjang = temanKelas.some(nama => nama.length > 10);
const namaPanjang = temanKelas.filter(nama => nama.length > 10);
console.log("\nsome() = Ada nama lebih dari 10 huruf:", adaNamaPanjang);
console.log("Nama yang lebih dari 10 huruf:", namaPanjang);

// every()
const semuaLebih3 = temanKelas.every(nama => nama.length > 3);
console.log("\nevery() = Semua nama lebih dari 3 huruf:", semuaLebih3);