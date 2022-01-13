// Helpers
function is_par(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana

function mediana_salary(lista) {
    const mitad = parseInt(lista.length / 2);   
    if (is_par(lista.length)) {
        const persona_mitad1 = lista [mitad - 1];
        const persona_mitad2 = lista [mitad];

        const mediana = calcularMediaAritmetica([persona_mitad1, persona_mitad2]);
        return mediana;
    }else{
        const persona_mitad = lista [mitad];
        return persona_mitad;
    }
}



// Mediana general

const salary_Col = colombia.map(
    function (person){
        return person.salary;
    }
);

const salary_Col_Sorted = salary_Col.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB
    }
);




const madianaGeneralCol = mediana_salary(salary_Col_Sorted);

// Mediana del Top 10%

const spliceStart = (salary_Col_Sorted.length * 90 /100);
const spliceCount = salary_Col_Sorted.length - spliceStart;

const salriosColTop10 = salary_Col_Sorted.splice(
    spliceStart,
    spliceCount,
);

const madianaTop10Col = mediana_salary(salriosColTop10);


console.log({
    madianaGeneralCol,
    madianaTop10Col,
});