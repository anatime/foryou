document.getElementById('btnKejutan').addEventListener('click', function() {
    const musik = document.getElementById('myAudio');
    
    if (musik) {
        musik.play().catch(error => {
            console.log("Musik gagal otomatis berputar!");
        });
    }

    // MUNCULKAN HUJAN HATI YANG LEBIH KALEM
    createHearts(); // Munculkan pertama kali
    setInterval(createHearts, 3000); // Munculkan lagi setiap 3 detik (biar gak ganggu baca)

    const tampilanAwal = document.getElementById('tampilan-awal');
    if (tampilanAwal) {
        tampilanAwal.style.display = 'none';
    }

    const pesanRahasia = document.getElementById('special-message');
    if (pesanRahasia) {
        pesanRahasia.classList.remove('hidden');
    }
});

function createHearts() {
    // Kita kurangi jumlahnya jadi 5 saja setiap muncul
    for (let i = 0; i < 5; i++) { 
        const heart = document.createElement('div');
        heart.classList.add('heart-pop');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Kita bikin jatuhnya lebih lambat (4 sampai 7 detik)
        heart.style.animationDuration = Math.random() * 3 + 4 + 's';
        
        // Kita bikin transparan sedikit biar gak terlalu "ngejreng" di depan teks
        heart.style.opacity = "0.6";
        
        document.body.appendChild(heart);

        setTimeout(() => { 
            heart.remove(); 
        }, 7000);
    }
}
