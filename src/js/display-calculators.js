const calculatorDisplay = document.querySelector('.calculator-display');
const calculators = document.querySelectorAll('.calculator-item');

calculators.forEach(calculator => {
  calculator.addEventListener('click', () => {
    const calculatorName = calculator.childNodes[3].childNodes[1].textContent;

    switch (calculatorName) {
      case MORTGAGE:
        calculatorDisplay.innerHTML = MORTGAGE_HTML;
        currentCalculator = MORTGAGE;
        defineCalculateBtn()
        break;
      case LOAN:
        calculatorDisplay.innerHTML = LOAN_HTML;
        currentCalculator = LOAN;
        defineCalculateBtn()
        break;
      case INTEREST:
        calculatorDisplay.innerHTML = INTEREST_HTML;
        currentCalculator = INTEREST;
        defineCalculateBtn()
        break;
      case RETURN_ON_INVESTMENT:
        calculatorDisplay.innerHTML = RETURN_ON_INVESTMENT_HTML;
        currentCalculator = RETURN_ON_INVESTMENT;
        defineCalculateBtn()
        break;
      case SALARY:
        calculatorDisplay.innerHTML = SALARY_HTML;
        currentCalculator = SALARY;
        defineCalculateBtn()
        break;
      default:
        break;
    };
  });
});

function defineCalculateBtn() {
  btnCalculate = document.querySelector('.btn-calculate');
  btnCalculate.addEventListener('click', () => {
    calculate(currentCalculator);
  });
};
