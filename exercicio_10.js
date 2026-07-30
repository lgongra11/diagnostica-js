let num1 = 0
let num2 = 1

for (let i = 0; i < 30; i++) {
    alert (num1)
    let proximo = (num1 + num2)
    num1 = num2
    num2 = proximo
}