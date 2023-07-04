alert("Bienvenido a Peach Wigs, el lugar donde podras comprar las mejores pelucas de cosplay anime")

const comprarPelucas = () => {
    let anime = ""
    let peluca = ""
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = true

    do {
        anime = prompt("De que anime queres comprar una peluca:¿DBZ, Inuyasha, Saint Seiya?")

        switch (anime) {
            case "DBZ":
                peluca = prompt("¿Goku(5000), Vegeta(6000), Gohan(7000)?")
                cantidad = parseInt(prompt("¿Cuantos queres comprar?"))
                switch (peluca) {
                    case "Goku":
                        precio = 5000
                        break;
                    case "Vegeta":
                        precio = 6000
                        break;
                    case "Gohan":
                        precio = 7000
                        break;
                    default:
                        alert("Algun valor ingresado no es valido")
                        precio = 0
                        cantidad = 0
                }
                break;
            case "Inuyasha":
                peluca = prompt("¿Inuyasha(4500), Kagome(5500), Kykyo(6500)?")
                cantidad = parseInt(prompt("¿Cuantos queres comprar?"))
                switch (peluca) {
                    case "Inuyasha":
                        precio = 4500
                        break;
                    case "Kagome":
                        precio = 5500
                        break;
                    case "Kykyo":
                        precio = 6500
                        break;
                    default:
                        alert("Algun valor ingresado no es valido")
                        precio = 0
                        cantidad = 0
                }
                break;
            case "Saint Seiya":
                peluca = prompt("Seiya(3700), Atenea(4700), Shun(5700)?")
                cantidad = parseInt(prompt("¿Cuantos queres comprar?"))
                switch (peluca) {
                    case "Seiya":
                        precio = 3700
                        break;
                    case "Atenea":
                        precio = 4700
                        break;
                    case "Shun":
                        precio = 5700
                        break;
                    default:
                        alert("Algun valor ingresado no es valido")
                        precio = 0
                        cantidad = 0
                }
                break;
            default:
                alert("Algun valor ingresado no es valido")
                precio = 0
                cantidad = 0
        }

        subtotal += precio * cantidad 

        console.log(anime);
        console.log(peluca);
        console.log(cantidad);

        seguirComprando = confirm("¿Desea seguir comprando?")
    } while (seguirComprando);
    return subtotal
}

/* const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0){
        alert("Debe agregar una cantidad valida!!!")
        cantidad = parseInt(prompt("¿Cuantos queres comprar?"))
    }
}
 */
let total = comprarPelucas()
console.log(total);

alert ("El total de su compra es: $" +total)
