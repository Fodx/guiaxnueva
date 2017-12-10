$(document).ready( function() {
  $(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1
  });

	$(document).click(function() {
	  $(".resultados-busqueda").removeClass("visible");
	  $(".resultados-busqueda").addClass("oculto");
	  $(".buscador-home input").removeClass("no-radius");	
	});

	$(".buscador-home").click(function(event) {
	  $(".resultados-busqueda").addClass("visible");
	  $(".resultados-busqueda").removeClass("oculto");
	  $(".buscador-home input").addClass("no-radius");	
	  return false;
	});
	$(".boton-usuario").on("click", function () {
		$(".boton-usuario").removeClass("active");
		$(this).addClass("active");
	});
});
