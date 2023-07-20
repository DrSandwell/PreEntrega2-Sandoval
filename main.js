const precios = {
    DBZ: {
        Goku: 5000,
        Vegeta: 6000,
        Gohan: 7000,
    },
    Inuyasha: {
        Inuyasha: 4500,
        Kagome: 5500,
        Kykyo: 6500,
    },
    "Saint Seiya": {
        Seiya: 3700,
        Atenea: 4700,
        Shun: 5700,
    },
};

const carrito = [];

const comprarPelucas = () => {
    let subtotal = 0;
    let seguirComprando = true;

    do {
        const anime = prompt(
            "De qué anime quieres comprar una peluca: ¿DBZ, Inuyasha, Saint Seiya?"
        );

        if (anime in precios) {
            const pelucasAnime = precios[anime];
            const opcionesPeluca = Object.keys(pelucasAnime)
                .map((precio) => `${precio} ($${pelucasAnime[precio]})`)
                .join(", ");
            const peluca = prompt(`¿${opcionesPeluca}?`);

            if (peluca in pelucasAnime) {
                const cantidad = parseInt(prompt("¿Cuántas quieres comprar?"));

                if (isNaN(cantidad) || cantidad <= 0) {
                    alert("Debes ingresar una cantidad válida");
                } else {
                    const precio = pelucasAnime[peluca];
                    subtotal += precio * cantidad;
                    carrito.push({
                        anime,
                        peluca,
                        cantidad,
                        precio,
                    });
                }
            } else {
                alert("Valor ingresado no válido");
            }
        } else {
            alert("Valor ingresado no válido");
        }

        seguirComprando = confirm("¿Desea seguir comprando?");
    } while (seguirComprando);

    return subtotal;
};

const mostrarCarrito = () => {
    console.log("Carrito de compra:");
    carrito.forEach((item) => {
        console.log(
            `${item.cantidad} peluca(s) de ${item.peluca} del anime ${item.anime} - Precio unitario: $${item.precio}`
        );
    });
};

const total = comprarPelucas();
alert("El total de su compra es: $" + total);

const Reinicio = document.getElementById("Reinicio");
Reinicio.addEventListener("click", () => {
    carrito.length = 0;
    const total = comprarPelucas();
    alert("El total de su compra es: $" + total);
    mostrarCarrito();
});
