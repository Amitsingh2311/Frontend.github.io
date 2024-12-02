const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})


// const menuBtn = document.getElementById("menuList")
// menuBtn.style.maxHeight="0px";

// function toggleEvent(){
//     if(menuBtn.style.maxHeight === "0px"){
//         menuBtn.style.maxHeight = "500px";
//     }
//     else{
//         menuBtn.style.maxHeight = "0px";
//     }
// }