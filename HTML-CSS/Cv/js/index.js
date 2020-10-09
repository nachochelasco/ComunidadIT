$(document).ready(function() {

    $('#boton').on('click', function(){
        var textoActual = $(this).text()
        if (textoActual == "Mostrar carousel") {
            $(this).text("Sacar carousel")
        } else {
            $(this).text("Mostrar carousel")
        }
        $('#carouselExampleIndicators').toggle();
    });  


    $('#commit').on('click', function() {
		$('.body').css('background-color','grey');
	});
})