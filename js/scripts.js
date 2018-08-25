 $(document).ready(function() {
     $('#myCarousel').carousel({interval:1000});
     $('#carouselButton').click(function() {
         if ($('#carouselButton').children('span').hasClass('fa-play')) {
          $('#myCarousel').carousel('pause');
          $('#carouselButtonIcon').removeClass('fa-play');
          $('#carouselButtonIcon').addClass('fa-pause');
         }
         else if ($('#carouselButton').children('span').hasClass('fa-pause')) {
          $('#myCarousel').carousel('cycle');
          $('#carouselButtonIcon').removeClass('fa-pause');
          $('#carouselButtonIcon').addClass('fa-play');
         }
     });
     $('#logInBtn').click(function(){
          $('#logInModal').modal('toggle');
     });

     $('#reserveBtn').click(function(){
          $('#reserveModal').modal('toggle');
     });

 });

