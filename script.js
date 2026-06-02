document.getElementById('btnKejutan').addEventListener('click', function() {
    const musik = document.getElementById('myAudio');
    
    // Memutar musik saat tombol diklik
    if (musik) {
        musik.play().catch(error => {
            console.log("Musik gagal otomatis berputar karena aturan browser, tapi tetap lanjut!");
        });
    }

    // Jalankan efek hujan hati
    createHearts();

    // Memunculkan pesan kejutan (bisa berupa voucher/janji manis)
    const pesanRahasia = document.getElementById('special-message');
    if (pesanRahasia) {
        pesanRahasia.classList.toggle('hidden');
    }
    
    // Mengubah teks tombol agar lebih interaktif
    this.textContent = 'Click for more love ❤️❤️';
});

// Fungsi untuk membuat animasi hati berjatuhan
function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-pop');
        heart.innerHTML = '❤️';
        
        // Mengatur posisi acak dari kiri ke kanan layar
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Mengatur kecepatan jatuh yang acak biar estetik
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        
        document.body.appendChild(heart);

        // Hapus elemen hati setelah selesai animasi agar laptop tidak lemot
        setTimeout(() => { 
            heart.remove(); 
        }, 5000);
    }
}