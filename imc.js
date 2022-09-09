function calcularImc() {
    //coletando os valores inseridos pelo usuario
    const valorAltura = parseFloat(document.getElementById("altura").value)
    const valorPeso = parseFloat(document.getElementById("peso").value)
    //calculando o IMC
    const imcValor = (valorPeso / (valorAltura ** 2)).toFixed(1)
    const msg = "O seu IMC é de " + imcValor
    let inseridoNoHtml = document.getElementById("valorIMC")
    inseridoNoHtml.innerHTML = msg;


}