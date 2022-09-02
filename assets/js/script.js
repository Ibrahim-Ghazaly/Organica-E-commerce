// sidebar navegation

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