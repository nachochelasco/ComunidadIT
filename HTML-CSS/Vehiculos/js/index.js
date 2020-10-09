$(document).ready(function() {
  
  $('.btn-primary').on('click', function() {
    var auto = prompt('Ingresar vehículo');
    
    var autos = 0;
    var acumuladorAños = 0;

    while(auto){
      autos++;
      var años = parseInt(prompt('Ingresar antigüedad'));
      acumuladorAños += años;
      $('#tablaVehiculos').append("<tr><td>" + auto + "</td><td>" + años + "</td></tr>")
      if(pagaPatente(años, 10))
      {
        alert('Paga patente');
      }
      else{
        alert('No paga patente');
      }
  
      auto = prompt('Ingresar vehículo');
     
    }

  $('.btn-success').on('click',function() {
    
    if(autos > 0){
      resultado = acumuladorAños / autos;
      alert('El promedio de antigüedad es: ' + resultado);
    }
    else{
      alert('No se ingresaron vehículos');
    }
    })
  })  
})




function pagaPatente(antiguedad, limiteAños){
	return antiguedad < limiteAños;
}

function mostrarPromedioVehiculos(cantidadAutos, añosTotales){
	if(cantidadAutos > 0){
  	resultado = añosTotales / cantidadAutos;
    alert('El promedio de antigüedad es: ' + resultado);
  }
	else{
  	alert('No se ingresaron vehículos');
  }
}
