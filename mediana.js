function Media_Aritmetica(Lista){
    
    const Suma_Lista = Lista.reduce(
        function (Valor_Acumolado = 0, Nuevo_Elemento){
            return Valor_Acumolado + Nuevo_Elemento;
        }
    );

    const Promedio_Lista = Suma_Lista / Lista.length ;
    return Promedio_Lista;

}




const list1 = [
    100,
    200,
    500,
    40000,
    800
];

 const mid_list1 = parseInt(list1.length / 2);

 function is_par(number) {
     if (number % 2 === 0) {
         return true;
     } else {
         return false;
     }
 }

 let median ;

 if (is_par(list1.length) ) {
     const element1 = list1[mid_list1 - 1];
     const element2 = list1[mid_list1];

     const promedio_element_1y2 = Media_Aritmetica([
        element1,
        element2,
     ]);
     median = promedio_element_1y2;
 }else{
    median  = list1[mid_list1];
 }
