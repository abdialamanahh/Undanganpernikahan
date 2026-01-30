document.addEventListener('DOMContentLoaded', function(){

  // Ambil nama dari URL
  const params = new URLSearchParams(window.location.search);
  const nama = params.get("tamu");
  document.getElementById("namaTamu").textContent = nama ? decodeURIComponent(nama.replace(/\+/g,' ')) : "Tamu Undangan";

  const splash = document.getElementById('splashScreen');
  const openBtn = document.getElementById('openBtn');
  const tab1 = document.getElementById('tab1');

  // Buka splash otomatis setelah 3 detik
  setTimeout(()=> {
    splash.style.display = 'none';
    tab1.style.display = 'block';
  }, 3000); // ganti 3000 = 3 detik

  // Opsional: buka manual jika klik tombol
  openBtn.addEventListener('click', ()=>{
    splash.style.display = 'none';
    tab1.style.display = 'block';
  });

});
document.addEventListener('DOMContentLoaded', function(){

  const container = document.querySelector('.bunga-container');
  const bungaCount = 20; // jumlah bunga

  for(let i=0;i<bungaCount;i++){
    const bunga = document.createElement('div');
    bunga.classList.add('bunga');
    bunga.textContent = "🌼"; // emoji bunga
    bunga.style.left = Math.random()*100 + "vw"; // posisi horizontal random
    bunga.style.animationDuration = (5 + Math.random()*5) + "s"; // durasi jatuh random
    bunga.style.animationDelay = Math.random()*5 + "s"; // delay random
    container.appendChild(bunga);
  }

});
function openTab(index){
  const tabs = document.querySelectorAll('.tab-content');
  const btns = document.querySelectorAll('.tab-btn');

  tabs.forEach(t => t.classList.remove('active'));
  btns.forEach(b => b.classList.remove('active'));

  tabs[index].classList.add('active');
  btns[index].classList.add('active');
}
const container = document.querySelector('.bunga-container');
const bungaCount = 15; // jumlah bunga

for(let i=0; i<bungaCount; i++){
  const bunga = document.createElement('div');
  bunga.classList.add('bunga');
  bunga.style.left = Math.random() * 100 + 'vw';
  bunga.style.top = -50 + 'px'; // mulai di atas layar
  bunga.style.animationDuration = 5 + Math.random()*5 + 's'; // durasi random
  bunga.style.animationDelay = Math.random()*5 + 's';
  container.appendChild(bunga);
}

document.head.appendChild(style);
window.addEventListener('load', () => {
    const bgMusic = document.getElementById('bgMusic');
    
    // Coba play otomatis
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('Musik mulai otomatis');
        }).catch(error => {
            console.log('Autoplay diblokir, menunggu interaksi user');
        });
    }
    
});