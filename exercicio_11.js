let primo = 0
let num = prompt("Digite um número inteiro: ");

if (num < 2) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            primo++;
        }
    }
}