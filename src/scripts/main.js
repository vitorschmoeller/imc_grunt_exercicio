document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height)) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention')

    document.getElementById('info').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Você está abaixo do peso!';
    } else if (bmi >= 18.6 && bmi <= 25) {
        description = "Você está no peso ideal!";
        value.classList.remove('attention')
        value.classList.add('normal')
    } else if (bmi >= 25 && bmi <= 30) {
        description = "Levemente acima do peso";
        
    } else if (bmi >= 30 && bmi <= 35) {
        description = "Obesidade grau 1";
    } else if (bmi >= 35 && bmi <= 40) {
        description = "Obesidade grau 2 (severa)";
    } else {
        description = "Obesidade grau 3 (Mórbida)";
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});

})

