

// 1. Función para calcular la suma de tres valores
function calcularSuma() {
    // Obtener los valores de los campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    // Verificamos que los valores ingresados sean numeros 
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("ingresa numeros");
        return;
    }
    
    // Calculando la suma
    const suma = num1 + num2 + num3;

    const resultadoElemento = document.getElementById('resultado-suma');
    resultadoElemento.textContent = `La suma de los valores ingresados es:${suma}`;
    resultadoElemento.style.display = 'block';
}

// 2. calcular el cuadrado
function calcularCuadrado() {

    const numero = parseFloat(document.getElementById('numero-cuadrado').value);
    
    if (isNaN(numero)) {
        alert("INGRESA SOLO UN NUMERO");
        return;
    }
    
    // Calcular el cuadrado
    const cuadrado = numero * numero;
    
    const resultadoElemento = document.getElementById('resultado-cuadrado');
    resultadoElemento.textContent = `El cuadrado del numero ${numero} es: ${cuadrado}`;
    resultadoElemento.style.display = 'block';
}

// 3. calcular el promedio
function calcularPromedio() {
    const nombre = document.getElementById('nombre-estudiante').value;
    const calif1 = parseFloat(document.getElementById('calif1').value);
    const calif2 = parseFloat(document.getElementById('calif2').value);
    const calif3 = parseFloat(document.getElementById('calif3').value);
    
    // Verificar que todos los campos tengan valores válidos
    if (nombre.trim() === "" || isNaN(calif1) || isNaN(calif2) || isNaN(calif3)) {
        alert("Llena todos los campos");
        return;
    }
    
    if (calif1 < 0 || calif1 > 100 || calif2 < 0 || calif2 > 100 || calif3 < 0 || calif3 > 100) {
        alert("Las calificaciones deben estar entre 0 y 100, OJO");
        return;
    }
    
    // Calcular el promedio
    const promedio = (calif1 + calif2 + calif3) / 3;
    
    const resultadoElemento = document.getElementById('resultado-promedio');
    resultadoElemento.textContent = `${nombre} tiene un promedio de: ${promedio.toFixed(2)} puntos`;
    resultadoElemento.style.display = 'block';
}

// 4. convertir los metros
function convertirUnidades() {
    const metros = parseFloat(document.getElementById('metros').value);
    

    if (isNaN(metros)) {
        alert("Por favor, ingrese un valor vAlido en metros");
        return;
    }
    
    // operaciones
    const centimetros = metros * 100;
    const kilometros = metros / 1000;
    
    const metrosFormateados = metros.toLocaleString();
    const centimetrosFormateados = centimetros.toLocaleString();
    

    const resultadoElemento = document.getElementById('resultado-conversion');
    resultadoElemento.textContent = `${metrosFormateados} metros equivalen a ${centimetrosFormateados} centimetros y ${kilometros} kilometros`;
    resultadoElemento.style.display = 'block';
}

// 5. comparacion de valores
function compararValores() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    
    // Verificar que ambos tengan numeros REALES

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("ingresa unicamente numeros");
        return;
    }
    
    // Determinar major y menor
    let mayor, menor;
    if (valor1 > valor2) {
        mayor = valor1;
        menor = valor2;
    } else if (valor2 > valor1) {
        mayor = valor2;
        menor = valor1;
    } else {

        const resultadoElemento = document.getElementById('resultado-comparacion');
        resultadoElemento.textContent = `Ambos nums son iguales: ${valor1}`;
        resultadoElemento.style.display = 'block';
        return;
    }
    
    // Calculo la diferencia
    const diferencia = mayor - menor;
    

    const resultadoElemento = document.getElementById('resultado-comparacion');
    resultadoElemento.textContent = `${mayor}Es el mayor, ${menor}es el menor y la diferencia entre los dos es de: ${diferencia}`;
    resultadoElemento.style.display = 'block';
}