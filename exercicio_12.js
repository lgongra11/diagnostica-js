const precos = [12.5, 8.9, 35, 19.99, 7.5, 0];
let quantidade = 0;
let total = 0;
let maisCaro = 0;
let maisBarato = 0;

for (let i = 0; i < precos.length; i++) {
    const preco = precos[i];
    if (preco === 0) break;
    quantidade++;
    total += preco;
    if (quantidade === 1 || preco > maisCaro) maisCaro = preco;
    if (quantidade === 1 || preco < maisBarato) maisBarato = preco;
}

console.log("Quantidade de produtos:", quantidade);
console.log("Valor total: R$", total.toFixed(2));
console.log("Produto mais caro: R$", maisCaro.toFixed(2));
console.log("Produto mais barato: R$", maisBarato.toFixed(2));
console.log("Media dos precos: R$", (total / quantidade).toFixed(2));
