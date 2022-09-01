// 'use strict';



// /**
//  * navbar toggle
//  */

// const navOpenBtn = document.querySelector("[data-nav-open-btn]");
// const navbar = document.querySelector("[data-navbar]");
// const navCloseBtn = document.querySelector("[data-nav-close-btn]");

// const navElems = [navOpenBtn, navCloseBtn];

// for (let i = 0; i < navElems.length; i++) {
//   navElems[i].addEventListener("click", function () {
//     navbar.classList.toggle("active");
//   });
// }



// /**
//  * search toggle
//  */

// const searchContainer = document.querySelector("[data-search-wrapper]");
// const searchBtn = document.querySelector("[data-search-btn]");

// searchBtn.addEventListener("click", function () {
//   searchContainer.classList.toggle("active");
// });



// /**
//  * whishlist & cart toggle
//  */

// const panelBtns = document.querySelectorAll("[data-panel-btn]");
// const sidePanels = document.querySelectorAll("[data-side-panel]");

// for (let i = 0; i < panelBtns.length; i++) {
//   panelBtns[i].addEventListener("click", function () {

//     let clickedElemDataValue = this.dataset.panelBtn;

//     for (let i = 0; i < sidePanels.length; i++) {

//       if (clickedElemDataValue === sidePanels[i].dataset.sidePanel) {
//         sidePanels[i].classList.toggle("active");
//       } else {
//         sidePanels[i].classList.remove("active");
//       }

//     }

//   });
// }



// /**
//  * back to top
//  */

// const backTopBtn = document.querySelector("[data-back-top-btn]");

// window.addEventListener("scroll", function () {
//   window.scrollY >= 100 ? backTopBtn.classList.add("active")
//     : backTopBtn.classList.remove("active");
// });



// /**
//  * product details page
//  */

// const productDisplay = document.querySelector("[data-product-display]");
// const productThumbnails = document.querySelectorAll("[data-product-thumbnail]");

// for (let i = 0; i < productThumbnails.length; i++) {
//   productThumbnails[i].addEventListener("click", function () {
//     productDisplay.src = this.src;
//     productDisplay.classList.add("fade-anim");

//     setTimeout(function () {
//       productDisplay.classList.remove("fade-anim");
//     }, 250);

//   });
// }

let navOpenBtn = document.querySelector(".nav-open-btn");
let navCloseBtn =document.querySelector(".nav-close-btn");
let navElems =document.querySelector(".nav-items")

navOpenBtn.addEventListener('click',()=>{
  
  navElems.style.left=0;
})

navCloseBtn.addEventListener('click',()=>{
  
  navElems.style.left='-300px';
})




// arrow back to up



let arrow = document.querySelector(".back-to-up");

window.onload = function(){
  arrow.classList.remove("show"); 
}

window.onscroll = function () {

    if(window.scrollY >= 1000){
        
      arrow.classList.add("show")  
    }else{
      arrow.classList.remove("show");
    }

    arrow.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
 };
}




// filtering products

let filterbtns = document.querySelectorAll(".filter-btn");
let productCard =document.querySelectorAll(".product-card");



filterbtns.forEach((btn)=>{

  btn.addEventListener('click',function(e){
    filterbtns.forEach((btn)=>{
       btn.classList.remove("active")
    })

     btn.classList.add("active");

     if(btn.classList.contains("active")){
        
            productCard.forEach((card)=>{
              if(card.hasAttribute("data-filter")){
                  
                  if( btn.getAttribute("data-filter") === card.getAttribute("data-filter")){
                      card.style.display="block";
                    }else{
                      card.style.display="none";
                    }

              }
            })
       }
  })
  


})