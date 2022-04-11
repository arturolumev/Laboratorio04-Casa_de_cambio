//Funcion para cotizar el cambio a soles del monto en la moneda que seleccionemos
function cotizar(){
    dolar = 3.70;
    euro = 4.03;
    monto = parseInt(document.getElementById("monto").value);
    //console.log(monto);
    
    tipo=document.formulario.moneda.value;
    
    if (tipo.length == 0){
      tipo="ninguno";
    }
    alert("Moneda seleccionada: " + tipo);
    if (tipo == "Dolar"){
      cotizacion = monto * dolar;
      alert("cotizacion es: "+cotizacion.toFixed(2)+ " soles");
    }else if (tipo == "Euro"){
      cotizacion = monto * euro;
      alert("cotizacion es: "+cotizacion.toFixed(2)+ " soles");
    }
    
  }

//Funcion para validar que solo se ingresen numeros positivos  
function validarNumeros(event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }
    return false;
}