let heineken = {id:1, precio:250}
let quilmes = {id:2, precio:180}
let andes = {id:3, precio:220}
let cervezas = [heineken, quilmes, andes];

function calculoc(){
    let opciones = parseInt(prompt("¿Qué marca prefiere? \n 1- Heineken \n 2 - Quilmes \n 3- Andes"));
    let opcionfinal = opciones - 1;
    let cantidad = parseInt(prompt("¿Cuántas cervezas quiere comprar?"));
    let precio = cantidad * cervezas[opcionfinal].precio;
    return alert("Usted debe abonar $" + precio);
}
let benjamin = {id:4, precio:380}
let callia = {id:5, precio:320}
let emilia = {id:6, precio:450}
let vinos = [benjamin, callia, emilia]

function calculov(){
        let opciones = parseInt(prompt("¿Qué marca prefiere? \n 1- Benjamín \n 2 - Callia \n 3- Emilia"));
        let opcionfinal = opciones - 1;
        let cantidad = parseInt(prompt("¿Cuántos vinos quiere comprar?"));
        let precio = cantidad * vinos[opcionfinal].precio;
        return alert("Usted debe abonar $" + precio);
}
let fernet = {id:7, precio: 750};
let gancia = {id:8, precio: 400};
let aperol = {id:9, precio: 650};
let aperitivos = [fernet, gancia, aperol];

function calculoa(){
        let opciones = parseInt(prompt("¿Qué bebida prefiere? \n 1- Fernet \n 2 - Gancia \n 3- Aperol"));
        let opcionfinal = opciones - 1;
        let cantidad = parseInt(prompt("¿Cuántas botellas desea?"));
        let precio = cantidad * aperitivos[opcionfinal].precio;
        return alert("Usted debe abonar $" + precio);
 }



let edad = parseInt(prompt("Ingrese su edad"));
                
if (edad >= 18){
    alert("Puede seguir comprando");
    let bebida = prompt("¿Qué desea tomar hoy? \n 1 - Cerveza \n 2 - Vino \n 3 - Aperitivo");
switch (bebida){
    case "1":
        calculoc();
        break;
     case "2":
        calculov();
        break;
    case "3":
        calculoa();
        break;
    default:
        break;
}
}else{
    alert("Tiene que ser mayor para poder comprar");
}

