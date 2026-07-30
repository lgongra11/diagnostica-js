let vitorias = Number(prompt("Digite o número de vitórias:"));
let empates = Number(prompt("Digite o número de empates:"));
let derrotas = Number(prompt("Digite o número de derrotas:"));

let pontos = (vitorias * 2) + (empates * 1) + (derrotas * 0);
let partidas = vitorias + empates + derrotas;
let aproveitamento = (pontos / (partidas * 2)) * 100;

alert ("=== RESULTADOS ===");
alert("Pontos: " + pontos);
alert("Aproveitamento: " + aproveitamento);
    if (pontos >= 10) {
        alert(" vc foi execelente");
    } else if (pontos >= 5) {
        alert(" vc foi bom");
    } else if (pontos >= 3) {
        alert(" vc foi regular");
    } else {
        alert(" vc foi péssimo");
    }