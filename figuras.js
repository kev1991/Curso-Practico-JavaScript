//Codigo del cuadrado
console.group("Cuadrados");

function perimetro_cuadrado(lado)
{
    return lado * 4;
}

function area_cuadrado()
{
    return lado * lado;
}  

console.groupEnd();


//Codigo del triángulo
console.group("Triángulos");

function perimetro_triangulo (lado1, lado2,base)
{
    return lado1 + lado2 + base;
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

// Circunferencia
function perimetro_circulo(radio)
{
    const diametro = diametro_circulo(radio);
    return diametro * PI;
} 

// Área
function area_circulo(radio, radio)
{
    return (radio * rario) * PI;
} 

console.groupEnd();
