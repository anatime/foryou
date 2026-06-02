document.getElementById('btnKejutan').addEventListener('click', function() {
    const musik = document.getElementById('myAudio');
    
    // 1. Memutar musik
    if (musik) {
        musik.play().catch(error => {
            console.log("Musik gagal otomatis berputar!");
        });
    }

    // 2. JALANKAN HUJAN HATI TERUS-MENERUS (SETIAP 1 DETIK)
    createHearts(); // Munculkan pertama kali
    setInterval(createHearts, 1000); // Munculkan lagi setiap 1000ms (1 detik)

    // 3. Sembunyikan pantun awal
    const tampilanAwal = document.getElementById('tampilan-awal');
    if (tampilanAwal) {
        tampilanAwal.style.display = 'none';
    }

    // 4. Munculkan kejutan utama
    const pesanRahasia = document.getElementById('special-message');
    if (pesanRahasia) {
        pesanRahasia.classList.remove('hidden');
    }
});

// Fungsi pembuat hati (Tetap sama desainnya)
function createHearts() {
    for (let i = 0; i < 15; i++) { // Kita kurangi jumlah per detiknya biar tidak lag
        const heart = document.createElement('div');
        heart.classList.add('heart-pop');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);

        setTimeout(() => { 
            heart.remove(); 
        }, 5000);
    }
}
