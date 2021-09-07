//Codigo del cuadrado

console.group("Cuadrados");

const lado_cuadrado = 5;
console.log("los lados del cuadrado miden: " + lado_cuadrado + "cm");

const perimetro_cuadrado = lado_cuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetro_cuadrado + "cm");

const area_cuadrado = lado_cuadrado * lado_cuadrado;
console.log("El área del cuadrado es: " + area_cuadrado + "cm^2");

console.groupEnd();

//Codigo del triángulo

console.group("Triángulos");

const lado_triamgulo_1 = 6;
const lado_triamgulo_2 = 6;
const base_triamgulo = 4;

console.log("los lados del triámgulo miden: "
    + lado_triamgulo_1+ "cm, "
    + lado_triamgulo_2 +"cm, "
    + base_triamgulo + "cm"
);

const altura_triamgulo = 5.5;
console.log("La altura del triámgulo es de: " + altura_triamgulo + "cm");

const perimetro_triangulo = lado_triamgulo_1 + lado_triamgulo_2 + base_triamgulo;
console.log("El perimetro del triángulo e de: " + perimetro_triangulo + "cm");

const area_triangulo = (base_triamgulo * altura_triamgulo) / 2;
console.log("El área del triángulo es: " + area_triangulo + "cm^2");

console.groupEnd();

//Codigo del Círculo

console.group("Círculos");

// Radio
const radio_circulo = 4;
console.log("El radio del círculo es de: " +  radio_circulo + "cm");

// Diametro
const diametro_circulo = radio_circulo * 2;
console.log("El diametro del círculo es de: " + diametro_circulo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: "+ PI);

// Circunferencia
const perimetro_circulo = diametro_circulo * PI;
console.log("El perimetro del círculo es de: " + perimetro_circulo + "cm");

// Área
const area_circulo = (radio_circulo * radio_circulo) * PI;
console.log("El área del círculo es de: " + area_circulo + "cm^2");

console.groupEnd();
