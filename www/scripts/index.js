// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en dispositivos/emuladores Ripple o Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Controlar la pausa de Cordova y reanudar eventos
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova se ha cargado. Haga aquí las inicializaciones que necesiten Cordova.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };

})();
$(document).ready(function() {  
    var progressbar = $('#progressbar'),  
        max = progressbar.attr('max'),  
        time = (1000/max)*5,      
        value = progressbar.val();  
 
    var loading = function() {  
        value += 1;  
        addValue = progressbar.val(value);  
         
        $('.progress-value').html(value + '%');  
 
        if (value == max) {  
            clearInterval(animate);
            setTimeout("location.href = 'menu.html';", 2000);
            //location.href = "menu.html";
        }  
    };  
 
    var animate = setInterval(function() {  
        loading();  
    }, time);  
});