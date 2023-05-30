
//Ejerecicio 1//
function capturarEdad(){
    let edad = document.querySelector('#edad_usuario');

    document.write(edad.value >= 18 ? "Eres mayor de edad" : "Eres menor de edad");

}

//Ejerecicio 2//

function calcularNota(){
    let nombreEstudiante = document.querySelector('.estudent_name');
    let carnetEstudiante = document.querySelector('.estudent_carnet');
    let notaExamen = document.querySelector('.nota_examen');
    let notaTareas = document.querySelector('.nota_tareas');
    let notaAsistencia = document.querySelector('.nota_asistencia');
    let notaInvestigacion = document.querySelector('.nota_investigacion');
    let textResult = document.querySelector('#text_result');
    
    let notaFinal = notaExamen.value*0.20 + notaTareas.value*0.40 + notaAsistencia.value*0.10 + notaInvestigacion.value*0.30;

   textResult.innerHTML = `Nombre:${nombreEstudiante.value} <br>  Carnet: ${carnetEstudiante.value} <br> Nota final: ${notaFinal}`;
}

//Ejerecicio 3//

function selectCategoria(){
     let nombreEmpleado = document.querySelector('#nombre_empleado');
     let salarioEmpleado = document.querySelector('#salario_empleado');
     let categoria = document.querySelector('#categoria');
     let datosEmpleado = document.querySelector('#datos_empleado');

     let salarioAumento = 0;

     switch(categoria.value){
        case "A":
            salarioAumento = salarioEmpleado.value*1.15;
            break;

        case "B":
            salarioAumento = salarioEmpleado.value*1.30;
            break;

        case "C":
            salarioAumento = salarioEmpleado.value*1.10;
            break;
        
        case "D":
            salarioAumento = salarioEmpleado.value*1.20;
            break;    
    }
    
    datosEmpleado.innerHTML = `Nombre: ${nombreEmpleado.value} <br> Categoria: ${categoria.value} <br> Salario aumentado: ${salarioAumento}`;


}


//Ejercicio 4

function calculateNumber(){
    let primerNumero = document.querySelector('#primer_numero');
    let segundoNumero = document.querySelector('#segundo_numero');
    let imprimirMayor = document.querySelector('#numero_mayor');
    let numeroMayor = 0;

    if(primerNumero.value > segundoNumero.value){
        numeroMayor = primerNumero.value;}
    else{ numeroMayor = segundoNumero.value;}

    imprimirMayor.textContent = `Numero mayor: ${numeroMayor}`;
}

//Ejercicio 5

function descuentoCarros(){
    const marca = "Ford";
    let modelo = document.querySelector('#modelos');
    let precio = document.querySelector('#precio');
    let datosModelo = document.querySelector('#datos_modelos');
    let precioDescuento = 0;
    
    switch(modelo.value){
        case "Fiesta":
            precioDescuento = precio.value*0.95;
            break;
        case "Focus":
            precioDescuento = precio.value*0.90;
            break;
        case "Escape":
            precioDescuento = precio.value*0.80;
            break;
    }

    datosModelo.innerHTML = `Marca: ${marca} <br> Modelo: ${modelo.value} <br> Precio: $${precio.value} <br> Precio con descuento: $${precioDescuento}`;
}


//Ejercicio 6 


function calcularViaje(){
    let costo = document.querySelector('#costo');
    let origen = document.querySelector('#origen');
    let destino = document.querySelector('#destino');
    let imprimirViaje = document.querySelector('#imprimir_destino');
    let descuentoViaje = 0;

    switch(destino.value){
        case "Costa del sol":
            descuentoViaje = costo.value*0.95;
            break;
        case "Panchimalco":
            descuentoViaje = costo.value*0.90;
            break;
        case "Puerto el triunfo":
            descuentoViaje = costo.value*0.85;
            break;
    }

    imprimirViaje.innerHTML = `Ciudad de origen: ${origen.value} <br> Ciudad de destino ${destino.value} <br> Costo sin descuento: $${costo.value} <br> Costo con descuento: $${descuentoViaje}`;

}

 
//Ejercicio 7

function promediarNotas(){
    let nota1 = document.querySelector('#nota1');
    let ponderacion1 = document.querySelector('#ponderacion1');
    let nota2 = document.querySelector('#nota2');
    let ponderacion2 = document.querySelector('#ponderacion2');
    let imprimirNotas = document.querySelector('#imprimir_notas');

    let notaPonderada1 = nota1.value * (ponderacion1.value/100);
    let notaPonderada2 = nota2.value * (ponderacion2.value/100);

    let notaPonderadaF = notaPonderada1 + notaPonderada2;

    imprimirNotas.innerHTML = `Nota ponderada: ${notaPonderadaF}`;
}

//Ejercicio 8 

function calcularTempt(){
    let centigrados = document.querySelector('#centigrados');
    let fahrenheit = (centigrados.value*(9/5))+32;
    let mensajeTempt = document.querySelector('#mensaje_tempt');

   if(fahrenheit >= 14 && fahrenheit <= 32){
    mensajeTempt.innerHTML = `${fahrenheit}°F <br> Temperatura baja`;
   } else if(fahrenheit >= 32 && fahrenheit <= 68){
    mensajeTempt.innerHTML = `${fahrenheit}°F <br> Temperatura adecuada`;
   } else if(fahrenheit >= 68 && fahrenheit <= 96){
    mensajeTempt.innerHTML = `${fahrenheit}°F <br> Temperatura alta`;
   }else{mensajeTempt.innerHTML= `Temperatura desconocida`};

}  

//Ejercicio 9

function numerosEnteros(){
    let arregloNumero = document.querySelector('#ingreso_numeros');
    let arregloSplit = arregloNumero.value.split(',');
    let imprimirNumber = document.querySelector('#imprimir_numero');
    let sumaPar = 0;

    let arregloPar = arregloSplit.map(numero =>{
        if(numero % 2 === 0){console.log(numero); sumaPar += numero;}});
    let arregloInpar = arregloSplit.filter(numero => numero % 15 === 0);
    let arregloPostive = arregloSplit.filter(numero => numero > 0);
    let arregloNegative = arregloSplit.filter(numero => numero < 0);

    imprimirNumber.innerHTML = `Numeros negativos: ${arregloNegative.length} <br> Numeros positivos: ${arregloPostive.length} <br> Numero multiplos de 15: ${arregloInpar.length} <br> Suma de numero pares: ${sumaPar}`; 

} 

//Ejercicio 10

function promediarEdades(){
    let morning = document.querySelector('#morning');
    let tarde = document.querySelector('#tarde');
    let noche = document.querySelector('#noche');
    let arregloSplitM = morning.value.split(',');
    let arregloSplitT = morning.value.split(',');
    let arregloSplitN = morning.value.split(',');
}