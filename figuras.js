//Codigo del cuadrado
console.group("Cuadrados");

function perimetro_cuadrado(lado)
{
    return lado * 4;
}

function area_cuadrado(lado)
{
    return lado * lado;
}  

console.groupEnd();


//Codigo del triángulo
console.group("Triángulos");

function perimetro_triangulo (lado1, lado2, base) {
    return (lado1 + lado2) + base;
}

function area_triangulo (base , altura) 
{
    return (base * altura) / 2;
}

console.groupEnd();


//Codigo del Círculo
console.group("Círculos");

// Diametro
function diametro_circulo (radio)
{
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetro_circulo(radio)
{
    const diametro = diametro_circulo(radio);
    return diametro * PI;
} 

// Área
function area_circulo(radio) 
{
    return (radio * radio) * PI;
} 

console.groupEnd();


// comensamos a unir el JS con HTML

//Codigo del cuadrado
function calcular_perimetro_cuadrado(){
    const lado = parseInt(document.getElementById("cuadrado").value);

    const perimetro = perimetro_cuadrado(lado);
    alert (perimetro);
}

function calcular_area_cuadrado(){
    const lado = parseInt(document.getElementById("cuadrado").value);

    const area = area_cuadrado(lado);
    alert (area);
}

//Codigo del triángulo
function calcular_perimetro_triangulo(){
    const lado1 =  parseInt(document.getElementById("lado1").value);

    const lado2 =  parseInt(document.getElementById("lado2").value);

    const base = parseInt(document.getElementById("base").value);
   
    const perimetro = perimetro_triangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcular_area_triangulo(){
    const base = parseInt(document.getElementById("base").value);

    const altura = parseInt(document.getElementById("altura").value);
    
    const area = area_triangulo(base, altura);
    alert(area);
}


//Codigó circulo
function calcular_perimetro_circulo(){
    const radio = parseInt(document.getElementById("radio").value);
    
    const perimetro = perimetro_circulo(radio);
    alert(perimetro + " cm");
}

function calcular_area_circulo(){
    const radio = parseInt(document.getElementById("radio").value);
    
    const area = area_circulo (radio);
    alert(area  + " cm");
}

function calcular_diametro_circulo(){
    const radio = parseInt(document.getElementById("radio").value);
    
    const diametro = diametro_circulo(radio);
    alert(diametro + " cm y ");
}