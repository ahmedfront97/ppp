let up_icon = document.getElementById('up-icon');
let show_mobile_nav_icon = document.getElementById('show-mobile-nav-icon');
let mobile_nav = document.getElementById('mobile-nav');
let all_li = document.querySelectorAll('.mobile-nav li')


show_mobile_nav_icon.onclick = function(){
  mobile_nav.classList.toggle('show-mobile-nav')
}






function myFunc (){
  let x ;
  for(let i = 0 ; i < all_li.length ; i++){
    console.log(all_li[i]);
    all_li[i].onclick = function(){
      mobile_nav.classList.remove('show-mobile-nav')
    }
  }
  
  
}
myFunc ();

// show up icon when scroll > 800px 



// window.addEventListener('scroll', function() {
//     if (document.body.scrollTop > 400) {
//       var currScrollPos2 = document.body.scrollTop;
//       document.getElementById('test').style.opacity = -currScrollPos2 / 400 + 2;
//     }
//   }
// };


// window.addEventListener('scroll' , function(){
//     console.log(my_scroll);
//     if(my_scroll > 800){
//         up_icon.style.opacity = '1';
//     }
// });
up_icon.style.opacity = "1";

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      up_icon.style.opacity = "1";
    } else {
      up_icon.style.opacity = "0";
    }
}


window.onscroll = function() {scrollFunction()};