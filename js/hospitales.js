$(document).ready(function(){
    $("#posadas").click(function(){
        $(".popup-posadas").show();
    });
    $("#italiano").click(function(){
        $(".popup-italiano").show();
    });
    $("#pirovano").click(function(){
        $(".popup-pirovano").show();
    });
    $(".cerrar").click(function(){
        $(".popup-posadas, .popup-italiano, .popup-pirovano").hide();
    });

});