



function descuentos (precio, descuento){
    // const precio_con_descuento = (precio_original * (100 - descuento))/ 100;
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = descuentos(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    
    resultP.innerText = "El precio del producto es de: $ " + priceValue + " " + " El precio con descuento son: $" + precioConDescuento;
  }

// function calcularPrecioConDescuento(precio, descuento) {
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
//     return precioConDescuento;
//   }
  
//   function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
    
//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;
  
//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//   }