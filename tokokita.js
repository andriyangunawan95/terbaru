const text={
id:{
navHome:"Beranda",navAbout:"Tentang Kami",navLinks:"Website Lain",navHelp:"Pusat Bantuan",
badge:"TOKO ONLINE TERPERCAYA",heroTitle:'Belanja Mudah,<br><span>Hidup Lebih Praktis.</span>',
heroText:"Selamat datang di TokoKita. Temukan produk pilihan, informasi toko, dan layanan bantuan dalam satu tempat.",
btnAbout:"Tentang Toko",btnHelp:"Butuh Bantuan?",cardTitle:"TokoKita",cardText:"Mudah • Cepat • Bersahabat",
stat1:"Bantuan",stat2:"Responsif",stat3:"Terpercaya",aboutTitle:"Tentang Toko Kami",
about1Title:"Toko Modern",about1Text:"TokoKita dibuat untuk memberikan pengalaman belanja yang simpel, nyaman, dan modern.",
about2Title:"Pelayanan Cepat",about2Text:"Hubungi admin kapan saja melalui WhatsApp untuk mendapatkan bantuan atau informasi.",
about3Title:"Nyaman & Aman",about3Text:"Kami mengutamakan kemudahan pelanggan saat mencari informasi dan menghubungi toko.",
linksTitle:"Website Lain",linksText:"Kunjungi website lain yang kami sediakan.",linkNote:"*Ganti alamat website di file HTML sesuai kebutuhan toko Anda.",
helpTitle:"Ada kesulitan?",helpText:"Jangan khawatir. Pusat bantuan kami siap membantu menjawab pertanyaan Anda.",
adminLabel:"Admin Penjual",chatBtn:"Chat Pusat Bantuan",faqBtn:"❓ FAQ",footerText:"Belanja mudah, layanan bersahabat."
},
en:{
navHome:"Home",navAbout:"About Us",navLinks:"Other Websites",navHelp:"Help Center",
badge:"TRUSTED ONLINE STORE",heroTitle:'Easy Shopping,<br><span>Life Made Simpler.</span>',
heroText:"Welcome to TokoKita. Find selected products, store information, and customer support in one place.",
btnAbout:"About Store",btnHelp:"Need Help?",cardTitle:"TokoKita",cardText:"Easy • Fast • Friendly",
stat1:"Support",stat2:"Responsive",stat3:"Trusted",aboutTitle:"About Our Store",
about1Title:"Modern Store",about1Text:"TokoKita is designed to provide a simple, comfortable, and modern shopping experience.",
about2Title:"Fast Service",about2Text:"Contact our admin anytime via WhatsApp for assistance or information.",
about3Title:"Safe & Easy",about3Text:"We prioritize customer convenience when finding information and contacting the store.",
linksTitle:"Other Websites",linksText:"Visit the other websites we provide.",linkNote:"*Change the website addresses in the HTML file to match your store.",
helpTitle:"Need some help?",helpText:"Don't worry. Our help center is ready to answer your questions.",
adminLabel:"Store Admin",chatBtn:"Chat with Help Center",faqBtn:"❓ FAQ",footerText:"Easy shopping, friendly service."
}};

const language=document.getElementById("language");
function setLanguage(lang){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-id]").forEach(el=>{
    const key=el.dataset.id;if(text[lang][key])el.innerHTML=text[lang][key];
  });
  localStorage.setItem("tokokita-language",lang);
}
language.addEventListener("change",e=>setLanguage(e.target.value));
setLanguage(localStorage.getItem("tokokita-language")||"id");

document.getElementById("year").textContent=new Date().getFullYear();

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>topBtn.style.display=scrollY>450?"block":"none");
topBtn.onclick=()=>scrollTo({top:0,behavior:"smooth"});

document.getElementById("faqBtn").onclick=()=>{
  const lang=language.value;
  const msg=lang==="id"
    ?"FAQ: Untuk bantuan pesanan, informasi produk, atau pertanyaan lainnya, silakan klik tombol Chat Pusat Bantuan."
    :"FAQ: For order help, product information, or other questions, click the Help Center chat button.";
  const toast=document.getElementById("toast");toast.textContent=msg;toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),4000);
};
