let ladoA = Number(prompt("Digite o valor do lado A:"));
let ladoB = Number(prompt("Digite o valor do lado B:"));
let ladoC = Number(prompt("Digite o valor do lado C:"));


if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
  

  if (ladoA === ladoB && ladoB === ladoC) {
    alert("Equilátero (Todos os lados iguais)");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    alert("Isósceles (Dois lados iguais)");
  } else {
    alert("Escaleno (Todos os lados diferentes)");
  }

} else {

  alert("Não forma triângulo");
}