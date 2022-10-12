/*CALCULADORA*/
$(function(){

  /*  ###########################################################################
  *   Ha pulsado un botón con un número
  *   ###########################################################################
  *   Selecionamos la clase que se llame .val y le agrego el evento .click
  *   para que cuando haga click en el elemento (no se sabe si es un botón, un div..etc)
  */
 $(".val").click(function(e){

  /*
  *   Con esta función lo que hacemos es eliminar el efecto por defecto del click,
  *   es decir, si fuera un botón de un formulario y le hago click, lo que hago es
  *   que no se haga la función normal, que es enviar el formulario. Hacemos otra cosa
  *   En este caso el <a href... lo que hace es abrir un link, y nosotros no queremos
  *   hacer un enlace, sino que cuando haga click en el botón se añada a la calculadora
  */
  e.preventDefault();

  /*  Voy a declara una variable para asociar código para hacer un código más limpio y
  *   menos extenso, para ello usamos $("selección").attr("atributo_a_leer")
  *   Cuando ponemos this, se refiere al elemento en cuestión al que llame al evento
  *   en este caso buscamos el atributo "href", si nos fijamos en cada boton teníamos
  *   <li><a class="val numeros" href="7">7</a></li>
  *   De ahí sacaríamos el atributo que tenga href el elemento que lo llama, en el 
  *   caso anterior el 7 por el href="7" no por el otro 7.
  */
  var a = $(this).attr("href");
  /*
  *   Seleccionamos los elementos que tenga la clase ".display", (al ser solo uno se podía
  *   haber usado un identificador, pero es indiferente porque al final es elegir el elento 
  *   HTML y añadir un valor, ¿qué valor? pues si recordamos habíamos cogido de href el valor
  *   7 (siguiendo el ejemplo). Si recordamos, en el fichero habíamos declarado un input de 
  *   la siguiente forma:
  *         <input type="text" class="display" pattern="[0-9]" placeholder="0"/>
  *   Con .append debemos recordar que lo que hace es escribir el valor en la etiqueta,
  *   en este caso añadiriamos un 7 al input llamado .display. ¿Y si tiene algun texto más
  *   pues lo que hacemos es dejamos lo que haya escrito + lo que le estamos agregando
  *   por eso hacemos $(".display").val() + a
  *   
  */
    $(".display").val($(".display").val() + a);
 });


  /*  ###########################################################################
  *   Ha pulsado el botón igual
  *   ###########################################################################
  *   En este caso, en vez de coger el valor del atributo lo que tengo es que
  *   realizar una operación ¿cual? pues evaluar lo que haya escrito en la calculadora
  *   Para ello usamos la función eval("operando1"operacion"operando2)..etc
  *   Si hago eval("5 + 4") me devolvería 9, por eso, conforme vamos añadiendo numeros
  *   en la calculadora se van agregando número y operandos, usando esta funcion nos
  *   daría el resultado. Ahora ¿como agregamos el resultado de lo que tenemos que
  *   sumar donde lo estoy sumando? pues tenemos que usar la función .val() que accede
  *   a ese valor, leeo lo que hay escrito con $(".display").val() y escribo el resultado
  *   de eval($(".display").val() en el propio valor $(".display").val("valorQuequieroMeter")
  */

 $(".igual").click(function(){
  $(".display").val(eval($(".display").val()));
 });

  /*  ###########################################################################
  *   Ha pulsado el botón porcentaje
  *   ###########################################################################
  *   Hace igual que el anterior solo que al valor evaluado se divide por 100
  */
 
 $(".porcentaje").click(function(){
  $(".display").val(eval($(".display").val())/100);
 });

  /*  ###########################################################################
  *   Ha pulsado el botón iva
  *   ###########################################################################
  *   Hace igual que el anterior solo que al valor evaluado se multiplica por 1.21
  */
 
$(".coniva").click(function(){
  $(".display").val(eval($(".display").val())*1.21);
})

  /*  ###########################################################################
  *   Ha pulsado la tecla C
  *   ###########################################################################
  *   Limpia lo que haya escrito, para ello accedemos al valor .display("Valor")
  *   pero le pasamos una cadena vacía "" para que no haya nada
  */
     
 $(".clear").click(function(){
  $(".display").val("");
  
 });
  /*  ###########################################################################
  *   Ha pulsado el icono para ocultar/mostrar la calculadora
  *   ###########################################################################
  *   Cogemos el evento .click y ocultamos o mostramos la clase .cal, en este caso
  *   corresponde al <div> que tiene toda la calculadora
  */
     
 $(".close").on('click',function(){
      $('.calculadora').toggle();
  })

})