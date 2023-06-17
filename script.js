window.onscroll = function() {
   var scrolled = document.documentElement.scrollTop; // Получаем положение скролла
   if(scrolled !== 0){
     document.querySelector('.top').style.opacity = '0.95';
   }else{
     document.querySelector('.top').style.opacity = '1';
   };
 };