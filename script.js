// 1. Memilih tombol berdasarkan atribut ID-nya
const tombolSapa = document.getElementById('sapaButton');

// 2. Menambahkan 'event listener' untuk mendeteksi aksi klik (memperbaiki typo addEventLiatener)
tombolSapa.addEventListener('click', function() {
    // 3. Menjalankan kode ini ketika tombol diklik (memperbaiki tanda kutip string yang kurang)
    alert('Halo! Terima kasih sudah berkunjung!');
});
