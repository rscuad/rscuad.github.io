// link : https://s.id/rscuad-recrut
// <!-- <a class="btn btn-color text-dark" href="https://s.id/rscuad-recrut" role="button"> Join Now</a> -->
var width;
var progress;
var project;

// console.log(width);

window.onload = function() {
   width = $("html").width();
   let update_icon2= document.getElementById( 'animate-icon2');
   let update_icon3= document.getElementById( 'animate-icon3');
   let update_btn2= document.getElementById( 'animate-btn2');

   if(width <678){
      update_icon2.setAttribute('data-aos', 'fade-right');
      update_icon3.setAttribute('data-aos', 'fade-right');
      update_btn2.setAttribute('data-aos', 'fade-right');
   }
   else{
      update_icon2.setAttribute('data-aos', 'fade-up');
      update_icon3.setAttribute('data-aos', 'fade-left');
      update_btn2.setAttribute('data-aos', 'fade-left');
   }

   anime({
         targets: '.btn1',
         duration: 2000,
         delay:100,
         translateX: 400,});

   }

$(window).scroll(function(){
   width = $("html").width();
   let update_icon2= document.getElementById( 'animate-icon2');
   let update_icon3= document.getElementById( 'animate-icon3');
   let update_btn2= document.getElementById( 'animate-btn2');

   if(width <678){
      update_icon2.setAttribute('data-aos', 'fade-right');
      update_icon3.setAttribute('data-aos', 'fade-right');
      update_btn2.setAttribute('data-aos', 'fade-right');
   }
   else{
      update_icon2.setAttribute('data-aos', 'fade-up');
      update_icon3.setAttribute('data-aos', 'fade-left');
      update_btn2.setAttribute('data-aos', 'fade-left');
   }

   var scroll = $(window).scrollTop();
   if(scroll >=200){
         $("#home").addClass("nav-coloring");
         $("#profile").removeClass("nav-coloring");
         $("#mynav").addClass("background");
   }else{
         $("#home").removeClass("nav-coloring");
         $("#mynav").removeClass("background");
   }
   if(width >= 768){
         
         if(scroll >=650){
         $("#about").removeClass("nav-coloring");
         $("#home").removeClass("nav-coloring");
         $("#profile").addClass("nav-coloring");
         var tl = anime.timeline({
         
               duration: 1000,
               delay:100,
            });

            tl .add({
               targets: '.devisi1',
               translateX: 400,
               opacity: 1,
            })
            .add({
               targets: '.devisi2',
               opacity: 1,
               duration: 3000,
            }, 700) // relative offset
            .add({
               targets: '.devisi3',
               translateX: -400,
               opacity: 1,
            }, 400); // absolute offset
         }
         if(scroll >=900){
         anime({
            targets: '.icon-set',
            rotate: 360,
            // borderRadius: '50%',
            duration: 1500,
         });
         }
         if(scroll  >= 1300){
         $("#contact").removeClass("nav-coloring");
         $("#profile").removeClass("nav-coloring");
         $("#about").addClass("nav-coloring");
         anime({
            targets: '.btn2',
            translateX: -400,
            duration: 1000,
            delay:200,
         });
         }
         if(scroll  >= 1550){
         $("#contact").addClass("nav-coloring");
         $("#about").removeClass("nav-coloring");
         anime({
            targets: '.social-item',
            rotate: 360,
            delay:200,
            // borderRadius: '50%',
            duration: 1000,
         });
         }
   }
   else{
      if(scroll >=600){ //navbar
         $("#about").removeClass("nav-coloring");
         $("#home").removeClass("nav-coloring");
         $("#profile").addClass("nav-coloring");
      }
      if(scroll >=800){
   
         anime({
               duration: 1000,
               delay:100,
               targets: '.devisi1',
               translateX: 480,
            });
         anime({
            delay:800,
               targets: '.icon1',
               rotate: 360,
               // borderRadius: '50%',
               duration: 1000,
            });
         }
      if(scroll >=1250){
         anime({
               duration: 1000,
               delay:100,
               targets: '.devisi2',
               translateX: 480,
            });
         anime({
            delay:800,
               targets: '.icon2',
               rotate: 360,
               // borderRadius: '50%',
               duration: 1000,
            });
         }
      if(scroll >=1650){
         anime({
               duration: 1000,
               delay:100,
               targets: '.devisi3',
               translateX: 480,
            });
         anime({
            delay:800,
               targets: '.icon3',
               rotate: 360,
               // borderRadius: '50%',
               duration: 1000,
            });
         }
      if(scroll >= 1580){   //navbar
         $("#contact").removeClass("nav-coloring");
         $("#profile").removeClass("nav-coloring");
         $("#about").addClass("nav-coloring");
      }
      if(scroll  >= 2380){
         $("#contact").removeClass("nav-coloring");
         $("#profile").removeClass("nav-coloring");
         $("#about").addClass("nav-coloring");
         anime({
         targets: '.btn2',
         translateX: 300,
         duration: 1000,
         delay:100,
         });
      }
      if(scroll  >= 2560){
         $("#about").removeClass("nav-coloring");
         $("#contact").addClass("nav-coloring");
         anime({
            targets: '.social-item',
            rotate: 360,
            delay:200,
            // borderRadius: '50%',
            duration: 1000,
         });
      }
   }
   
});


