// koleksi motivasi
const motivations = {
    stress: [
        "Beristirahatlah sejenak. Semua akan baik-baik saja.",
        "Stres adalah tanda bahwa kamu sedang bertumbuh.",
        "Percayalah, setelah badai pasti ada pelangi.",
        "Tidak ada badai yang abadi; tenangkan pikiranmu dan hadapi setiap tantangan.",
        "Setiap langkah kecil membawa kita lebih dekat kepada tujuan; bersabarlah.",
        "Di balik setiap kesulitan, ada pelajaran berharga menunggu untuk ditemukan.",
        "Hiduplah satu hari pada satu waktu; fokus pada hal-hal positif.",
        "Kesalahan adalah bagian dari perjalanan; bangkitlah dan coba lagi.",
        "Jangan ragu untuk meminta bantuan; kita semua butuh dukungan.",
        "Bernafaslah dalam-dalam; ketenangan ada dalam dirimu.",
        "Ubah cara pandangmu; setiap masalah adalah peluang untuk tumbuh.",
        "Luangkan waktu untuk diri sendiri; kamu layak mendapatkan ketenangan.",
        "Setiap pengalaman membentukmu; terimalah perjalananmu dengan lapang dada.",
        "Kekuatanmu terletak pada ketahananmu; teruslah melangkah.",
        "Percayalah, badai akan berlalu; harapan selalu ada.",
        "Sibukkan dirimu dengan hal-hal yang kamu cintai.",
        "Fokus pada hal yang dapat kamu kendalikan; lepaskan yang tidak.",
        "Kesuksesan dimulai dari keyakinan; percayalah pada dirimu sendiri.",
        "Hargai dirimu; kamu lebih kuat dari yang kamu kira.",
        "Jangan bandingkan dirimu dengan orang lain; setiap perjalanan itu unik.",
        "Ciptakan momen kecil bahagia setiap hari; kebahagiaan itu sederhana.",
        "Ingat, kamu tidak sendirian; banyak yang peduli padamu.",
        "Setiap hari baru adalah kesempatan baru; sambutlah dengan positif.",
        "Jadilah pendorong bagi dirimu sendiri; kata-kata positif itu kuat."
 
        //tambahkan jika ada kata motivasi lagi
    ],
    galau: [
        "Jangan biarkan kegalauan menguasai. Setiap masalah ada jalan keluarnya.",
        "Kesedihan tidak abadu, Kebahagiaan sedang menantimu.",
        "Bangkitlah, hari esok penuh dengan peluang baru.",
        "Tidak ada rasa sakit yang abadi; waktu akan menyembuhkan.",
        "Setiap kesedihan mengajarkan kita arti kebahagiaan.",
        "Jangan biarkan kegelapan menutupi cahaya dalam dirimu.",
        "Perjalanan hidup penuh liku; temukan keindahan di dalamnya.",
        "Saat merasa hilang, ingatlah kamu selalu bisa menemukan jalan kembali.",
        "Jadilah pahlawan bagi dirimu sendiri; berjuanglah untuk kebahagiaan.",
        "Setiap perpisahan adalah langkah menuju sesuatu yang lebih baik.",
        "Perasaan ini juga akan berlalu; izinkan dirimu merasakannya.",
        "Jangan takut untuk bermimpi; masa depan masih cerah.",
        "Hidup ini penuh kemungkinan; tetaplah berharap.",
        "Setiap pengalaman, baik atau buruk, membentuk dirimu.",
        "Luangkan waktu untuk merenung; temukan jati dirimu.",
        "Ketika satu pintu tertutup, yang lain akan terbuka.",
        "Fokus pada apa yang bisa kamu kendalikan; lepaskan yang tidak.",
        "Jadilah berani untuk memulai kembali; setiap hari adalah kesempatan.",
        "Setiap langkah kecil menuju kebahagiaan itu berarti.",
        "Biarkan dirimu merasakan; itu bagian dari proses penyembuhan.",
        "Jangan terlalu keras pada dirimu; semua orang memiliki masa sulit.",
        "Sibukkan dirimu dengan hal-hal yang kamu cintai."

        //tambahkan lainnya
    ],
    putus_cinta: [
        "Jangan menangisi sesuatu yang hilang. Bersyukurlah untuk pelajaran yang kau dapat.",
        "Cinta sejati tak pernah pergi, dia hanya menunggu waktu yang tepat.",
        "Kadang-kadang, perpisahan adalah awal dari kebahagiaan baru.",
        "Tidak ada cinta yang sia-sia; setiap hubungan mengajarkan pelajaran.",
        "Rasa sakit ini adalah bagian dari perjalanan menuju kebahagiaan.",
        "Setiap akhir adalah awal baru; sambutlah kesempatan baru.",
        "Jadilah kuat; kamu lebih tangguh dari yang kamu kira.",
        "Luangkan waktu untuk menyembuhkan; itu proses yang penting.",
        "Jangan menyesali apa yang terjadi; hargai kenangan indahnya.",
        "Ketika satu pintu tertutup, yang lain akan terbuka.",
        "Cintamu layak mendapatkan seseorang yang sejalan denganmu.",
        "Fokus pada dirimu sendiri; kamu pantas bahagia.",
        "Setiap pengalaman membentukmu menjadi lebih baik.",
        "Jangan takut untuk mencintai lagi; cinta itu indah.",
        "Rasa sakit ini akan memudar; waktu adalah sahabatmu.",
        "Beranilah melepaskan; sesuatu yang lebih baik menantimu.",
        "Temukan kekuatan dalam dirimu; kamu mampu bangkit.",
        "Hidup terus berjalan; ikuti aliran dan temukan kebahagiaan.",
        "Jadilah pahlawan bagi dirimu sendiri; bangkitlah dari kesedihan.",
        "Setiap hari baru adalah kesempatan untuk mulai lagi.",
        "Biarkan dirimu merasakan; semua perasaan itu valid.",
        "Jangan ragu untuk mencari dukungan dari teman."
        //tambahkan lainnya
    ],
    kuliah: [
        "Pejuang akademis, jangan menyerah. Usahamu akan terbayar lunas!",
        "Tidak ada yang sia-sia. Setiap langkah adalah bagian dari kesuksesanmu",
        "Fokuslah pada impianmu, jangan biarkan kegagalan kecil menghentikanmu.",
        "Setiap tantangan adalah peluang untuk tumbuh; hadapi dengan semangat.",
        "Jangan takut untuk bertanya; belajar adalah proses tanpa akhir.",
        "Fokus pada tujuanmu; setiap langkah membawa kamu lebih dekat.",
        "Luangkan waktu untuk diri sendiri; keseimbangan itu penting.",
        "Kesalahan adalah bagian dari belajar; jangan takut untuk mencoba.",
        "Temukan passionmu; itu akan memudahkan perjalananmu.",
        "Jadilah proaktif; peluang sering datang kepada mereka yang mencari.",
        "Bersosialisasi dengan teman sekelas dapat membuka banyak pintu.",
        "Manfaatkan setiap sumber daya yang ada; jangan ragu untuk meminta bantuan.",
        "Disiplin adalah kunci; tetapkan jadwal dan patuhi itu.",
        "Setiap hari baru adalah kesempatan untuk belajar sesuatu yang baru.",
        "Jangan bandingkan dirimu dengan orang lain; fokus pada perjalananmu.",
        "Selalu ingat tujuan akhir; itu yang memotivasi kamu.",
        "Setiap tugas adalah batu loncatan menuju masa depanmu.",
        "Berani bermimpi besar; impianmu bisa jadi kenyataan.",
        "Luangkan waktu untuk beristirahat; pikiran yang segar lebih produktif.",
        "Networking adalah investasi; bangun hubungan yang berarti.",
        "Jangan ragu untuk mengeksplorasi minat di luar kelas.",
        "Jadilah diri sendiri; keunikanmu adalah kekuatanmu."

        //tambahkan llainnya
    ],
    kerja: [
        "Kerja kerasmu akan membuahkan hasil yang luar biasa",
        "Jangan berhenti saat lelah, berhentilah ketika pekerjaan selesaii.",
        "Sukses besar dimulaii dari langkah-langkah kecil.",
        "Setiap langkah kecil menuju tujuan besar sangat berarti.",
        "Jadilah proaktif; inisiatifmu akan membawamu jauh.",
        "Fokus pada kualitas, bukan hanya kuantitas; hasil terbaik datang dari usaha maksimal.",
        "Jangan ragu untuk berkolaborasi; tim yang solid lebih kuat.",
        "Setiap tantangan adalah kesempatan untuk belajar dan tumbuh.",
        "Luangkan waktu untuk merenung; refleksi meningkatkan produktivitas.",
        "Kesuksesan bukan hanya tentang hasil, tetapi juga tentang perjalanan.",
        "Jadilah solusi, bukan masalah; sikap positif menarik peluang.",
        "Manfaatkan setiap kesempatan untuk berkembang; belajar itu sepanjang hayat.",
        "Bersyukurlah atas setiap pencapaian, sekecil apapun itu.",
        "Berani mengambil risiko; inovasi sering lahir dari keberanian.",
        "Jaga keseimbangan antara kerja dan kehidupan pribadi; itu penting.",
        "Temukan passionmu dalam pekerjaan; itu akan membuatmu lebih bersemangat.",
        "Selalu cari umpan balik; itu membantu pertumbuhan profesionalmu.",
        "Jadilah mentor bagi rekan kerja; berbagi pengetahuan memperkuat tim.",
        "Disiplin dan konsistensi adalah kunci untuk mencapai tujuan.",
        "Luangkan waktu untuk bersantai; istirahat akan menyegarkan pikiran.",
        "Setiap hari baru membawa peluang baru; sambutlah dengan semangat."

        //tambahkan lainnya
    ],
    keluarga: [
        "Keluarga adalah kekuatan terbesar dalam hidupmu.",
        "Setiap pengorbanan untuk keluarga adalah investasi kebahagiaanmu.",
        "Bersyukurlah jika keluarga masih lengkap, karena keluarga adalah segalanya.",
        "Tidak ada pengorbanan yang sia-sia; cinta untuk keluarga adalah yang terpenting.",
        "Setiap usaha untuk keluarga adalah langkah menuju kebahagiaan bersama.",
        "Kesulitan hari ini akan menguatkan ikatan keluarga di masa depan.",
        "Luangkan waktu untuk mendengarkan; komunikasi adalah kunci keharmonisan.",
        "Jadilah teladan; tindakanmu menginspirasi anggota keluarga lainnya.",
        "Berjuang bersama-sama membuat setiap tantangan lebih ringan.",
        "Kenangan indah tercipta dari kebersamaan; hargai setiap momen.",
        "Ketika satu jatuh, yang lain harus mengangkat; dukunglah satu sama lain.",
        "Cintailah tanpa syarat; itu kekuatan terbesar dalam keluarga.",
        "Jadilah sumber inspirasi; semangatmu menular kepada orang yang kamu cintai.",
        "Setiap masalah adalah peluang untuk bersatu dan bertumbuh.",
        "Perjuanganmu hari ini akan membentuk masa depan yang lebih baik.",
        "Jadilah pendengar yang baik; mendengarkan adalah bentuk cinta.",
        "Rayakan pencapaian kecil bersama; kebahagiaan terletak pada hal-hal sederhana.",
        "Jangan takut untuk meminta bantuan; bersama kita lebih kuat.",
        "Setiap anggota keluarga memiliki perannya masing-masing; hargai kontribusi mereka.",
        "Jaga komunikasi yang terbuka; kejujuran membangun kepercayaan.",
        "Temukan cara untuk bersenang-senang bersama; kebahagiaan ada di momen kecil.",
        "Berjuanglah untuk menciptakan lingkungan yang penuh kasih.",
        "Luangkan waktu untuk merenung; refleksi memperkuat ikatan."

        //tambahkan lainnya
    ],
    lainnya: [
        "Selalu ada harapan, asalkan kamu tidak menyerah.",
        "Jangan berhenti bermimpi, karena mimpi akan membawamu terbang tinggi.",
        "Tantangan adalah kesempatan untuk tumbuh lebih kuat.",
        "Tetaplah berfokus pada tujuan; konsistensi adalah kunci kesuksesan.",
        "Setiap tantangan adalah kesempatan untuk menunjukkan kemampuanmu.",
        "Jadilah yang terbaik dalam pekerjaanmu; kualitas selalu diingat.",
        "Ambil waktu untuk merencanakan; strategi yang baik membawa hasil.",
        "Luangkan waktu untuk berterima kasih kepada rekan kerja.",
        "Kesuksesan bukan hanya hasil, tapi juga proses belajar.",
        "Jangan biarkan kegagalan menghalangi langkahmu; bangkitlah lebih kuat.",
        "Selalu cari cara untuk berinovasi; perubahan adalah bagian dari pertumbuhan.",
        "Berani meminta bantuan; kolaborasi memperkuat tim.",
        "Bersikap positif akan menarik peluang baru.",
        "Jadilah contoh yang baik; kepemimpinan dimulai dari diri sendiri.",
        "Temukan kebahagiaan dalam pekerjaanmu; passion adalah kunci.",
        "Jangan lupakan kesehatan mental; istirahatlah jika perlu.",
        "Fokus pada solusi, bukan masalah; itu cara terbaik untuk maju.",
        "Setiap langkah kecil adalah kemajuan; rayakan pencapaianmu."

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
