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