const amountInput = document.getElementById('convert-from-input');
const fromCurrency = document.getElementById('convert-from-currency');
const convertButton = document.getElementById('convert-btn');
const resultInput = document.getElementById('convert-to-input');
const toCurrency = document.getElementById('convert-to-currency');

console.log('fgljkfjg');

convertButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    let result = amount;

    if(from === 'USD' && to === 'EUR') {
        result = amount * 0.89;
    }

    if(from === 'EUR' && to === 'USD') {
        result = amount * 1.12;
    }

    resultInput.value = result.toFixed(2);
})