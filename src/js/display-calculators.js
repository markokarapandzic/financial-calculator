const calculatorDisplay = document.querySelector('.calculator-display');
const calculators = document.querySelectorAll('.calculator-item');

calculators.forEach(calculator => {
  calculator.addEventListener('click', () => {
    const calculatorName = calculator.childNodes[3].childNodes[1].textContent;

    switch (calculatorName) {
      case MORTGAGE:
        calculatorDisplay.innerHTML = MORTGAGE_HTML;
        break;
      case LOAN:
        calculatorDisplay.innerHTML = LOAN_HTML;
        break;
      case INTEREST:
        calculatorDisplay.innerHTML = INTEREST_HTML;
        break;
      case RETURN_ON_INVESTMENT:
        calculatorDisplay.innerHTML = RETURN_ON_INVESTMENT_HTML;
        break;
      case SALARY:
        calculatorDisplay.innerHTML = SALARY_HTML;
        break;
      default:
        break;
    };
  });
});
