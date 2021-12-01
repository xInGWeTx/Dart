const swiper = new Swiper('.what_right', {
    speed: 400,
    spaceBetween: 10,
    direction:"vertical",
    slidesPerView: 2,
    loop:true,
  });
  let topSlide=document.querySelector('.but_top');
  topSlide.onclick=()=>{swiper.slideNext()};

  let bottomSlide=document.querySelector('.but_bottom');
  bottomSlide.onclick=()=>{swiper.slidePrev()};
  
  const swiper2 = new Swiper('.main_img_our', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1,
    loop:true,
    autoplay:{
      delay:4000,
    }
  });
  let dropdowns= document.querySelectorAll('.quest_item');
dropdowns.forEach(function(dropdown){
    dropdown.addEventListener('click',function(e){
    this.classList.toggle('active')
    
})
})