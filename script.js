let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");
menuIcon.onclick=()=> {
     menuIcon.classList.toggle("fa-xmark");
     navBar.classList.toggle("active"); 
}

let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("header nav a");
window.onscroll=()=>{
      sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');
        if(top >=offset && top< offset + height){
            navLinks.forEach.apply(links =>{
                 links.classList.remove('active');
                 document.querySelector("header nav a[href='#" + id + "']").classList.add('active');
            });
        };
      });

let header= document.querySelector('header');
header.classList.toggle('sticky' , window.scrollY >100);

menuIcon.classList.remove('fa-xmark');
navBar.classList.remove('active');
};

ScrollReveal({
  distance:'80px',
  duration:2000,
  delay:200,
});
ScrollReveal().reveal('.home-content, heading',{origin:'top'});
ScrollReveal().reveal('.home-img ,.services-container, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin:'right'});

document.addEventListener('DOMContentLoaded', function() {
  const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Data Analyst'],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
  });
});
function toggleExtraContent() {
  var extraContent = document.getElementById("extraContent");
  var readMoreBtn = document.getElementById("readMoreBtn");
  
  if (extraContent.style.display === "none") {
      extraContent.style.display = "block";
      readMoreBtn.innerText = "Read less";
  } else {
      extraContent.style.display = "none";
      readMoreBtn.innerText = "Read more";
  }
}

