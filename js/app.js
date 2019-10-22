new fullpage('#fullpage', {
    navigation: true,
    // responsiveWidth: 700,
   
    parallax: true,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
});

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     autoplayTimeout:3000,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });
$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
    animateOut: "zoomOut",
    animateIn: "zoomIn",
    });
  });