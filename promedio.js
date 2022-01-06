//MEDIA ARITMETICA

function Media_Aritmetica(Lista){
    // let Suma_Lista = 0;

    // for (let kev = 0; kev < Lista.length; kev++) {
    //     Suma_Lista = Suma_Lista + Lista[kev];
    // }

    const Suma_Lista = Lista.reduce(
        function (Valor_Acumolado = 0, Nuevo_Elemento){
            return Valor_Acumolado + Nuevo_Elemento;
        }
    );

    const Promedio_Lista = Suma_Lista / Lista.length ;
    return Promedio_Lista;

}