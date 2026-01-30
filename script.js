/* NAMA TAMU DARI URL */
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");
if (nama) {
  document.getElementById("namaTamu").innerText =
    decodeURIComponent(nama.replace(/\+/g," "));
}

/* TANGGAL NIKAH (AMAN ANDROID) */
const tanggalNikah = new Date(2026, 1, 20, 8, 0, 0).getTime();

/* COUNTDOWN + BUNGA SINKRON */
setInterval(() => {
  const sekarang = new Date().getTime();
  const selisih = tanggalNikah - sekarang;
  if (selisih <= 0) return;

  const hari = Math.floor(selisih / (1000*60*60*24));
  const jam = Math.floor((selisih / (1000*60*60)) % 24);
  const menit = Math.floor((selisih / (1000*60)) % 60);
  const detik = Math.floor((selisih / 1000) % 60);

  animasi("hari", hari);
  animasi("jam", jam);
  animasi("menit", menit);
  animasi("detik", detik);

  buatBunga();
}, 1000);

/* ANIMASI ANGKA */
function animasi(id, nilai){
  const el = document.getElementById(id);
  if(el.innerText != nilai){
    el.innerText = nilai;
    el.style.transform = "scale(1.3)";
    setTimeout(()=>{ el.style.transform="scale(1)"; },300);
  }
}

/* BUNGA */
function buatBunga(){
  const bunga = document.createElement("div");
  bunga.className = "bunga";
  bunga.innerHTML = "🌸";
  bunga.style.left = Math.random() * 100 + "vw";
  bunga.style.animationDuration = (4 + Math.random()*3) + "s";
  document.querySelector(".bunga-container").appendChild(bunga);
  setTimeout(()=>{ bunga.remove(); },7000);
}

/* TOMBOL */
function kirimWA(){
  window.open(
    "https://wa.me/6287772622126?text=Saya%20akan%20hadir",
    "_blank"
  );
}
function lihatLokasi(){
  window.open("https://maps.google.com","_blank");
}
