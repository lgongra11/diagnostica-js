let valor = prompt("Digite um valor inteiro:");

let cedulas = prompt("Quais cedulas vc quer usar? 200, 100, 50, 20, 10, 5, 2, 1 (somente números):");
cedulas = Number(cedulas);

let numerocedulas = Number(valor / cedulas);

alert("=== RESULTADOS ===");
alert("Número de cédulas: " + numerocedulas);