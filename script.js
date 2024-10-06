// koleksi motivasi
const motivations = {
    stress: [
        "Beristirahatlah sejenak. Semua akan baik-baik saja.",
        "Stres adalah tanda bahwa kamu sedang bertumbuh.",
        "Percayalah, setelah badai pasti ada pelangi.",
        //tambahkan jika ada kata motivasi lagi
    ],
    galau: [
        "Jangan biarkan kegalauan menguasai. Setiap masalah ada jalan keluarnya.",
        "Kesedihan tidak abadu, Kebahagiaan sedang menantimu.",
        "Bangkitlah, hari esok penuh dengan peluang baru.",
        //tambahkan lainnya
    ],
    putus_cinta: [
        "Jangan menangisi sesuatu yang hilang. Bersyukurlah untuk pelajaran yang kau dapat.",
        "Cinta sejati tak pernah pergi, dia hanya menunggu waktu yang tepat.",
        "Kadang-kadang, perpisahan adalah awal dari kebahagiaan baru.",
        //tambahkan lainnya
    ],
    kuliah: [
        "Pejuang akademis, jangan menyerah. Usahamu akan terbayar lunas!",
        "Tidak ada yang sia-sia. Setiap langkah adalah bagian dari kesuksesanmu",
        "Fokuslah pada impianmu, jangan biarkan kegagalan kecil menghentikanmu.",
        //tambahkan llainnya
    ],
    kerja: [
        "Kerja kerasmu akan membuahkan hasil yang luar biasa",
        "Jangan berhenti saat lelah, berhentilah ketika pekerjaan selesaii.",
        "Sukses besar dimulaii dari langkah-langkah kecil.",
        //tambahkan lainnya
    ],
    keluarga: [
        "Keluarga adalah kekuatan terbesar dalam hidupmu.",
        "Setiap pengorbanan untuk keluarga adalah investasi kebahagiaanmu.",
        "Bersyukurlah jika keluarga masih lengkap, karena keluarga adalah segalanya.",
        //tambahkan lainnya
    ],
    lainnya: [
        "Selalu ada harapan, asalkan kamu tidak menyerah.",
        "Jangan berhenti bermimpi, karena mimpi akan membawamu terbang tinggi.",
        "Tantangan adalah kesempatan untuk tumbuh lebih kuat.",
        //tambahkan lainnya
    ]
};

//fungsi untuk papitai motivasi sesuai kategori lipittte e
function getMotivation(category) {
    //tampilakn efk loading
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    //simulasi loading 2 dtik
    setTimeout(() => {
        //pilih motivasi acak dari kategori lipite e
        const motivationList = motivations[category];
        const randomMotivation = motivationList[Math.floor(Math.random() * motivationList.length)];

        //sembunyikan loading,tampilakn motivasi
        document.getElementById('loading').style.display = 'none';
        document.getElementById('motivation-result').style.display = 'block';
        document.getElementById('motivational-quote').innerText = randomMotivation;
    }, 2000);
}

//fungsi untuk palisui lo menu e
function backToMenu() {
    document.getElementById('motivation-result').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}
