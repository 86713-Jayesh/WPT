
function addition()
{
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);

    let result = number1 + number2;

    document.getElementById("result").value = result;
}

function substraction()
{
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);

    let result = number1 - number2;

    document.getElementById("result").value = result;
}

function multiplication()
{
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);

    let result = number1 * number2;

    document.getElementById("result").value = result;
}

function division()
{
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 / number2;

    document.getElementById("result").value = result;    
}