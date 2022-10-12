//declaramos las variables de los diferentes botones que cambiaran el estilo css y activaran la animación
$(function() { 
  var botond = $("#degradado"),
      botonb = $("#borde"),
      botonp = $("#posicion"),
      botont = $("#tipo"),
      parrafo = $("#encabezado");
 //función que cambia el background por el degradado 
  botond.on("click", function() {
    parrafo.css({'background-color':'black','background':' -webkit-gradient(linear, left top, left bottom, color-stop(0,#414444), color-stop(0.5, #121919), color-stop(0.51,#1A1B1B),color-stop(1, #6D7676))'});
  });
  //función que cambia el borde del encabezado
  botonb.on("click", function() {
    parrafo.css({'border':'1px solid black'});
  });
 //función que cambia el posicionamiento hacia la derecha
   botonp.on("click", function() {
    parrafo.css({'margin-left': '450px'});
  });
//función que cambia la fuente
   botont.on("click", function() {
    parrafo.css({'font-family':'Arial'});
  });
});

//función de la cola de efectos



$(function(){
	var boton = $("#cola"),
	parrafo = $ ("#encabezado");
	boton.on("click", function() {
    parrafo.hide(2000);
    parrafo.show(2000);
    parrafo.animate({"margin-left": "450px", "marging-top": "70px"}, 2000);
	parrafo.animate({"font-size": "5pt"}, 2500);
	parrafo.animate({"font-size": "27pt"}, 2500);

  }); 
});


