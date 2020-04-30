const navIcon= document.querySelector(".nav-icon");
const mobileNav=document.querySelector(".nav");

let navFlag=true;

const showNav = () => {
  if(navFlag){
    mobileNav.style.left="0";
    navFlag=false;
  }else {
    mobileNav.style.left="-900px";
    navFlag=true;
  }
}


navIcon.addEventListener('click',showNav);