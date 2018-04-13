const form = document.getElementById('form');

const loanAmount = document.getElementById('loan-amount').value;
const interest = document.getElementById('interest').value;
const years = document.getElementById('years').value;

const btn = document.getElementById('calculate');


const totalPayment = document.getElementById('total-payment')
const totalInterest = document.getElementById('total-interest')



btn.addEventListener('click', () => {
    const loanAmount = document.getElementById('loan-amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const monthlyPayment = document.getElementById('monthly-payment');

    let result = Number(loanAmount) + Number(interest) + Number(years);

    monthlyPayment.value = result;



})