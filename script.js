/* ===== NAMA TAMU DARI URL ===== */
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");
if(nama){
  document.getElementById("namaTamu").innerText =
    decodeURIComponent(nama.replace(/\+/g," "));
}

/* ===== SPLASH ===== */
function bukaUndangan(){
  const splash = document.getElementById("splash");
  splash.style.opacity = "0";
  splash.style.transition = "opacity 0.8s ease";
  setTimeout(()=> splash.style.display="none",800);
}

/* ===== COUNTDOWN (FORMAT AMAN ANDROID) ===== */
const tanggalNikah = new Date(2026,1,15,10,0,0).getTime();

setInterval(()=>{
  const sekarang = new Date().getTime();
  const sisa = tanggalNikah - sekarang;
  if(sisa <= 0) return;

  document.getElementById("hari").innerText =
    Math.floor(sisa / (1000*60*60*24));
  document.getElementById("jam").innerText =
    Math.floor((sisa/(1000*60*60))%24);
  document.getElementById("menit").innerText =
    Math.floor((sisa/(1000*60))%60);
  document.getElementById("detik").innerText =
    Math.floor((sisa/1000)%60);

  buatBunga();
},1000);

/* ===== BUNGA ===== */
function buatBunga(){
  const b = document.createElement("div");
  b.className="bunga";
  b.innerHTML="🌸";
  b.style.left=Math.random()*100+"vw";
  b.style.animationDuration=(4+Math.random()*3)+"s";
  document.querySelector(".bunga-container").appendChild(b);
  setTimeout(()=>b.remove(),7000);
}

/* ===== TOMBOL ===== */
function kirimWA(){
  window.open("https://wa.me/6281234567890","_blank");
}
function lihatLokasi(){
  window.open("https://maps.google.com","_blank");
}
