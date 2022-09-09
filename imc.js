/* IMC = peso (kg) / altura ^2 (m) 

- < 10 desnutrição grau V
- 10 a 12.9 desnutrição grau IV
- 13 a 15.9 desnutrição grau III
- 16 a 16.9 desnutrição grau II
- 17 a 18.4 desnutrição grau I
- 18.5 a 24.9 normal
- 25 a 29.9 pré-obesidade
- 30 a 34.5 obesidade grau I
- 35 a 39.9 obesidade grau II
- > 40 obesidade grau III  

*/

function calcularImc() {
    //coletando os valores inseridos pelo usuario
    const valorAltura = parseFloat(document.getElementById("altura").value)
    const valorPeso = parseFloat(document.getElementById("peso").value)
    //calculando o IMC
    const imcValor = (valorPeso / (valorAltura ** 2)).toFixed(1)
    let inseridoNoHtml = document.getElementById("valorIMC")
    let msg = `Seu IMC é ${imcValor}`
    if (imcValor < 10) {
        inseridoNoHtml.innerHTML = msg + " classificado como desnutrição grau V"
    } else if (imcValor >= 10 && imcValor <= 12.9) {
        inseridoNoHtml.innerHTML = msg + " classificado como desnutrição grau IV"
    } else if (imcValor >= 13 && imcValor <= 15.9) {
        inseridoNoHtml.innerHTML = msg + " classificado como desnutrição grau III"
    } else if (imcValor >= 16 && imcValor <= 16.9) {
        inseridoNoHtml.innerHTML = msg + " classificado como desnutrição grau II"
    } else if (imcValor >= 17 && imcValor <= 18.4) {
        inseridoNoHtml.innerHTML = msg + " classificado como desnutrição grau I"
    } else if (imcValor >= 18.5 && imcValor <= 24.9) {
        inseridoNoHtml.innerHTML = msg + " classificado como normal"
    } else if (imcValor >= 25 && imcValor <= 29.9) {
        inseridoNoHtml.innerHTML = msg + " classificado como pré-obesidade"
    } else if (imcValor >= 30 && imcValor <= 34.5) {
        inseridoNoHtml.innerHTML = msg + " classificado como obesidade grau I"
    } else if (imcValor <= 39.9 && imcValor >= 35) {
        inseridoNoHtml.innerHTML = msg + " classificado como obesidade grau II"
    }
    else { inseridoNoHtml.innerHTML = msg + " classificado como obesidade grau III" }

}
