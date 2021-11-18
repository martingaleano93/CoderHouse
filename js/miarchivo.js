function cervezas(){
    let marcas = [{
        nombre: "heineken",
        precio: 250
    },{
        nombre: "quilmes",
        precio: 180
    },{
        nombre: "andes",
        precio: 220
    }]

    function calculo(){
        let opciones = parseInt(prompt("¿Qué marca prefiere? \n 1- Heineken \n 2 - Quilmes \n 3- Andes"));
        let opcionfinal = opciones - 1;
        let cantidad = parseInt(prompt("¿Cuántas cervezas quiere comprar?"));
        let precio = cantidad * marcas[opcionfinal].precio;
        return alert("Usted debe abonar $" + precio);
    }
    calculo();
}

function vinos(){
    let marcas = [{
        nombre: "benjamín",
        precio: 380
    },{
        nombre: "callia",
        precio: 320
    },{
        nombre: "emilia",
        precio: 450
    }]
    function calculo(){
        let opciones = parseInt(prompt("¿Qué marca prefiere? \n 1- Benjamín \n 2 - Callia \n 3- Emilia"));
        let opcionfinal = opciones - 1;
        let cantidad = parseInt(prompt("¿Cuántos vinos quiere comprar?"));
        let precio = cantidad * marcas[opcionfinal].precio;
        return alert("Usted debe abonar $" + precio);
    }
    calculo();

}
function aperitivos(){
    let marcas = [{
        nombre: "fernet",
        precio: 750
    },{
        nombre: "gancia",
        precio: 400
    },{
        nombre: "aperol",
        precio: 650
    }]
    function calculo(){
        let opciones = parseInt(prompt("¿Qué bebida prefiere? \n 1- Fernet \n 2 - Gancia \n 3- Aperol"));
        let opcionfinal = opciones - 1;
        let cantidad = parseInt(prompt("¿Cuántas botellas desea?"));
        let precio = cantidad * marcas[opcionfinal].precio;
        return alert("Usted debe abonar $" + precio);
    }
    calculo();
}



let edad = parseInt(prompt("Ingrese su edad"));
                
if (edad >= 18){
    alert("Puede seguir comprando");
    let bebida = prompt("¿Qué desea tomar hoy? \n 1 - Cerveza \n 2 - Vino \n 3 - Aperitivo");
switch (bebida){
    case "1":
        cervezas();
        break;
     case "2":
        vinos();
        break;
    case "3":
        aperitivos();
        break;
    default:
        break;
}
}else{
    alert("Tiene que ser mayor para poder comprar");
}

