document.getElementById('btnKejutan').addEventListener('click', function() {
    const musik = document.getElementById('myAudio');
    
    // 1. Memutar musik saat tombol diklik
    if (musik) {
        musik.play().catch(error => {
            console.log("Musik gagal otomatis berputar karena aturan browser, tapi tetap lanjut!");
        });
    }

    // 2. Jalankan efek hujan hati (tetap aktif!)
    createHearts();

    // 3. SEMBUNYIKAN tampilan pantun awal
    const tampilanAwal = document.getElementById('tampilan-awal');
    if (tampilanAwal) {
        tampilanAwal.style.display = 'none';
    }

    // 4. MUNCULKAN pesan kejutan, ayat, foto, dan tanda tangan Princes Anaaa
    const pesanRahasia = document.getElementById('special-message');
    if (pesanRahasia) {
        pesanRahasia.classList.remove('hidden');
    }
});

// Fungsi untuk membuat animasi hati berjatuhan (TETAP SAMA & TETAP JALAN)
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
