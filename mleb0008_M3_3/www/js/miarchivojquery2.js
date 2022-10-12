$(document).ready(function() {
	$menu = $('#menu').find('ul').find('li');

	$menu.hover(function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideDown();
	}, function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideUp();
	});
});

//SLIDER EDAD

$(document).ready(function(){
 var miSelect = $( "#misHabitaciones" );
    var miSlider = $( "<div id='slider1'></div>" ).insertAfter( miSelect ).slider({
      min: 18,
      max: 70,
      range: "min",
      value: miSelect[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        miSelect[ 0 ].selectedIndex = ui.value - 1;
      }
    });
    $( "#misHabitaciones" ).change(function() {
      miSlider.slider( "value", this.selectedIndex + 1 );
    });

});//fin de la lectura del documento


//calendario
$(document).ready(function(){


   $( "#miCalendario" ).datepicker();


});//fin de la lectura del documento



//formulario BARRA DE PROGRESO
$(document).ready(function(){
	var miProgressbar = $( "#miBarraProgreso2" ),
      progressLabel = $( ".progress-label" );
 
    miProgressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( miProgressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "¡datos enviados!" );
      }
    });
 
    function progreso() {
      var val = miProgressbar.progressbar( "value" ) || 0;
 
      miProgressbar.progressbar( "value", val + 2 );
 
      if ( val < 99 ) {
        setTimeout( progreso, 80 );
      }
    }
 
    setTimeout( progreso, 3500 );
  
 


});//fin de la lectura del documento

//Pais
$(document).ready(function(){

    $( "#idioma" ).selectmenu();

});//fin de la lectura del documento
