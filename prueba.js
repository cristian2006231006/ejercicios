const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function areaTriangulo(base, altura) {
    return 0.5 * base * altura;
}

function suma(a, b) {
    return a + b;
}

function cuadrado(n) {
    return n * n;
}

function eurosADolares(euros) {
    const tasaCambio = 1.18; // Tasa de cambio actual, puede variar
    return euros * tasaCambio;
}

function areaPerimetroCuadrado(lado) {
    return { area: lado * lado, perimetro: 4 * lado };
}

function areaVolumenCilindro(radio, altura) {
    const pi = Math.PI;
    return { area: 2 * pi * radio * (radio + altura), volumen: pi * radio * radio * altura };
}

function menu() {
    console.log("\n1. Calcular área de un triángulo");
    console.log("2. Sumar dos números");
    console.log("3. Calcular cuadrado de un número");
    console.log("4. Convertir euros a dólares");
    console.log("5. Calcular área y perímetro de un cuadrado");
    console.log("6. Calcular área y volumen de un cilindro");
    console.log("99. Salir");
}

function preguntar() {
    menu();
    readline.question("\nElige una opción: ", function(opcion) {
        switch(opcion) {
            case '1':
                readline.question("Introduce base y altura del triángulo separados por espacio: ", function(valores) {
                    let [base, altura] = valores.split(' ').map(Number);
                    console.log(areaTriangulo(base, altura));
                    preguntar();
                });
                break;
            case '2':
                readline.question("Introduce dos números separados por espacio: ", function(valores) {
                    let [a, b] = valores.split(' ').map(Number);
                    console.log(suma(a, b));
                    preguntar();
                });
                break;
            case '3':
                readline.question("Introduce un número: ", function(n) {
                    console.log(cuadrado(Number(n)));
                    preguntar();
                });
                break;
            case '4':
                readline.question("Introduce cantidad en euros: ", function(euros) {
                    console.log(eurosADolares(Number(euros)));
                    preguntar();
                });
                break;
            case '5':
                readline.question("Introduce el lado del cuadrado: ", function(lado) {
                    console.log(areaPerimetroCuadrado(Number(lado)));
                    preguntar();
                });
                break;
            case '6':
                readline.question("Introduce radio y altura del cilindro separados por espacio: ", function(valores) {
                    let [radio, altura] = valores.split(' ').map(Number);
                    console.log(areaVolumenCilindro(radio, altura));
                    preguntar();
                });
                break;
            case '99':
                readline.close();
                break;
            default:
                console.log("Opción no válida");
                preguntar();
        }
    });
}

preguntar();