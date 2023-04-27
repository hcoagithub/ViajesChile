$(document).ready(function(){
    // Agregando Scroll Smooth a todos los tags "a"
    $("a").on('click', function(event) {
  
      // Asegurando que this.has tenga un valor 
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Usando el metodo animate() de Jquery para el Scroll Smooth
        // El valor de (2000) especifica el numero de milisegundos en que tarda en en finalizar el Scroll Smooth
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        },2000, function(){
    
          // Agrega hash (#) a la URL cuando se haya hecho el scrolling
          window.location.hash = hash;
        });
      }
    });
  });


$(document).ready(function(){
    var $nav = $('#navbar');
    var previousScroll = 0;
    $(window).scroll(function(event){
       var scroll = $(this).scrollTop();
       if (scroll > previousScroll && scroll > 350){
           $nav.addClass('navOnOff');
       } else {
          $nav.removeClass('navOnOff');
       }
       });
 
  });