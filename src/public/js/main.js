window.onload = function() {  //Antes de que cargue la pagina, cargar a traves de la función estos elementos del html
    animateprogress("#javascript",60); //id y val
    animateprogress("#html5",91);
    animateprogress("#css",80);
    animateprogress("#nodejs",50);
    animateprogress("#python",40);
    animateprogress("#arduino",70);
    
}
     function animateprogress (id, val){		//Creo la funcion progreso de animación con dos parametros el id ("nombre") y el valor de cuento es val("value")
        var getRequestAnimationFrame = function () {  /* <------- Declaro getRequestAnimationFrame intentando obtener la m�xima compatibilidad con todos los navegadores */
            return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||   
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function ( callback ){
                window.setTimeout(enroute, 1 / 60 * 1000);
            };  
        };
        var fpAnimationFrame = getRequestAnimationFrame();   
        var i = 0;
        var animacion = function () {       
        if (i<=val) 
            {
                document.querySelector(id).setAttribute("value",i);      /* <----  Incremento el valor de la barra de progreso */
                document.querySelector(id+"+ span").innerHTML = i+"%";     /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
                i++;
                fpAnimationFrame(animacion);          /* <------------------ Mientras que el contador no llega al porcentaje fijado la funci�n vuelve a llamarse con fpAnimationFrame     */
            }
        }
            fpAnimationFrame(animacion);   /*  <---- Llamo la funci�n animaci�n por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */               
    }
window.addEventListener("scroll",function(){ // Función para mostrar el about me
    function fade(direction){
    var imagen = document.querySelectorAll('.fade_'+direction);
    for(var i = 0; i < imagen.length; i++){
        var altura = window.innerHeight/1.3;
        var distancia = imagen[i].getBoundingClientRect().top;
        console.log("Altura: " + altura);
        console.log("Distancia: " + distancia);
        imagen[i].classList.add("transform_"+direction);
        if (distancia<=altura){
            imagen[i].classList.add("aparece");
        }
        else{
            imagen[i].classList.remove("aparece");
        }
    } 
    }
    fade("up");
    fade("down");
    fade("left");
    fade("right");
});
window.addEventListener("load", function(){
    // var init = document.querySelector("hola");
    // init.classList.add("tracking-in-contract");
    var init = document.getElementById("hola");
    init.classList.add("tracking-in-contract");
});



