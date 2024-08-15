function calculate() {
    num1 = parseFloat(document.getElementById('first_number').value);
    num2 = parseFloat(document.getElementById('second_number').value);
    num3 = parseFloat(document.getElementById('third_number').value);
    num4 = parseFloat(document.getElementById('fourth_number').value);


    mediaTotal = (num1 + num2 + num3 + num4) / 4
    if (mediaTotal >= 6)
        result = 'Nota '+mediaTotal +' Resultado: Aprovado'
    else if (mediaTotal < 4)
        result = 'Nota '+mediaTotal +' Resultado: Reprovado'
    else
        result = 'Nota '+mediaTotal +' Resultado: IFA'

    document.getElementById('result').value = result;

}

