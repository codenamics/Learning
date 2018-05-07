const btn = document.getElementById('calculate');


btn.addEventListener('click', () => {

    const loanAmount = document.getElementById('loan-amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(loanAmount);
    const calculateInterest = parseFloat(interest) / 100 / 12;
    const calculatePayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal*x *calculateInterest)/(x-1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);
    } else {
        M.toast({html: 'Ups something went wrong. Please check fields'})
    }



})