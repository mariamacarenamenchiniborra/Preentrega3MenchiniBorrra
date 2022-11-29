//promociones de black friday - calculadora de descuento 

let productoDescuento, precioFinal; 
let producto = parseFloat(prompt("Ingresa el precio del producto"));

if (producto>0 && producto<1000){ 

   productoDescuento = (producto * 0.05)  ;
   precioFinal = (producto - productoDescuento);
   alert (`El precio del producto con el descuento realizado del 5% es ${precioFinal}`);

}else if (producto > 1000 && producto <= 2500){

    console.log ( productoDescuento = (producto * 0.15) );
    precioFinal = (producto - productoDescuento);
   alert (`El precio del producto con el descuento realizado del 15% es ${ precioFinal }`);

}else if (producto > 2500 ) {

    console.log ( productoDescuento = (producto * 0.25) );
    precioFinal = (producto - productoDescuento);
    alert (`El precio del producto con el descuento realizado del 25% es ${ precioFinal } `);

}else{ 

    alert ("Error ingrese un precio correcto del producto que quiere calcular su descuento"); 
}


