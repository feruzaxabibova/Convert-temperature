var elForm = document.querySelector('.form-js');
var elInput = elForm.querySelector('.celsius');
var elRseult = document.querySelector('.result');
var formula;

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    elInput = document.querySelector('.celsius').value;
    elInput= parseInt(elInput);
    formula = elInput * 1.8 + 32;
    elRseult.textContent = `Result: Celsius:${elInput}°C - Fahrenheit:${formula}°F `;

});