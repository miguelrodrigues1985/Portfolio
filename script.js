//Função para selecionar elementos da animação
const selectElement = (s) =>/*return *.* */document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");



selectElement(".burger-menu-icon").addEventListener("click", ()=>{
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")
    
    navLinks.forEach((link,index)=>{
        if(link.getElementsByClassName.animation){
            link.style.animation=""
    }else{
        link.style.animation=`navLinkAnimate 0.5s ease forwards ${index/6 +0.5}s`
        console.log(index/6 +0.5)
    }
    })
}); 

navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");

        navLinks.forEach((link,index)=>{
            if(link.getElementsByClassName.animation){
                link.style.animation=""
        }else{
            link.style.animation=`navLinkAnimate 0.5s ease forwards ${index/6 +0.5}s`
            console.log(index/6 +0.5)
        }
        })
    })
})
//Função para o slide and show
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i< slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1
    }
  slides[slideIndex-1].style.display = "block"; 
  
  setTimeout(showSlides, 3000);/*criar variável para invocar noutra função para aquando parar os slides auto, e limpar o cronómotro, o clearTimeout() ou seTimeout()?*/
}
var slideIndex = 0;
showSlides();
//Função para as imagens
var galeria=document.getElementById("galeria");
var img = document.getElementsByClassName("myImages");
var galeriaImg = document.getElementById("img01");
var showgaleria = function(){
    galeria.style.display = "block";
    galeriaImg.src = this.src;
}
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showgaleria);
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    galeria.style.display = "none";
  }
