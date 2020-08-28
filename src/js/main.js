const fabCalculate = document.querySelector('.fab-calculate');
const modal = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-container');
let currentCalculator = null;
let btnCalculate = null;
let btnModal = null;

fabCalculate.addEventListener('click', () => {
  calculate(currentCalculator);
});

function calculate(selectedCalculator) {
  if (selectedCalculator === null) {
    modalContent.innerHTML = NO_CALCULATOR_SELECTED;
  }

  switch (selectedCalculator) {
    case MORTGAGE:
      mortgageCalculation();
      break;
    case LOAN:
      loanCalculation();
      break;
    case INTEREST:
      interestCalculation();
      break;
    case RETURN_ON_INVESTMENT:
      returnOnInvestmentCalculation();
      break;
    case SALARY:
      salaryCalculator();
      break;
    default:
      break;
  }

  openModal();
}

function mortgageCalculation() {
  const homePrice = document.getElementById('home-price');
  const downPayment = document.getElementById('down-payment');
  const loanTerm = document.getElementById('term');
  const interestRate = document.getElementById('interest');
  const inputs = [homePrice, downPayment, loanTerm, interestRate];

  if (validateInputs(inputs)) {
    const principal = homePrice.value - downPayment.value;
    const monthlyInterestRate = (interestRate.value / 100) / 12;
    const numberOfPayments = loanTerm.value * 12;

    const mortgagePayment = mortgagePaymentCalculation(principal, monthlyInterestRate, numberOfPayments);

    modalContent.innerHTML = mortgageResult(roundNumber(mortgagePayment));
  } else {
    modalContent.innerHTML = INVALID_INPUT_HTML;
  }
}

function mortgagePaymentCalculation(principal, monthlyInterestRate, numberOfPayments) {
  return principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1));
}

function loanCalculation() {
  const loanAmount = document.getElementById('amount');
  const loanTerm = document.getElementById('term');
  const interestRate = document.getElementById('interest');
  const inputs = [loanAmount, loanTerm, interestRate];

  if (validateInputs(inputs)) {
    const interest = ((interestRate.value / 100) / (loanTerm.value / 12)) * loanAmount.value;

    modalContent.innerHTML = loanResult(interest);
  } else {
    modalContent.innerHTML = INVALID_INPUT_HTML;
  }
}

function interestCalculation() {
  const principal = document.getElementById('principal');
  const interestRate = document.getElementById('interest');
  const loanTerm = document.getElementById('term');
  const inputs = [principal, interestRate, loanTerm];

  if (validateInputs(inputs)) {
    const interest = principal.value * (interestRate.value / 100) * loanTerm.value;

    modalContent.innerHTML = interestResult(interest);
  } else {
    modalContent.innerHTML = INVALID_INPUT_HTML;
  }
}

function returnOnInvestmentCalculation() {
  const amountInvested = document.getElementById('invested');
  const amountReturned = document.getElementById('returned');
  const investmentLength = document.getElementById('length');
  const inputs = [amountInvested, amountReturned, investmentLength];

  if (validateInputs(inputs)) {
    const gain = amountReturned.value - amountInvested.value;
    const returnOnInvestment = (amountReturned.value - amountInvested.value) / amountInvested.value;
    const annualizedROI = (Math.pow(1 + returnOnInvestment, 1 / investmentLength.value) - 1) * 100;

    modalContent.innerHTML = returnOnInvestmentResult(returnOnInvestment * 100, roundNumber(annualizedROI), gain);
  } else {
    modalContent.innerHTML = INVALID_INPUT_HTML;
  }
}

function salaryCalculator() {
  const salaryPerHour = document.getElementById('amount');
  const hoursPerWeek = document.getElementById('hours');
  const daysPerWeek = document.getElementById('days');
  const holidaysPerYear = document.getElementById('holidays');
  const vacationsPerYear = document.getElementById('vacations');
  const inflation = document.getElementById('inflation');
  const inputs = [salaryPerHour, hoursPerWeek, daysPerWeek, holidaysPerYear, vacationsPerYear, inflation];

  if (validateInputs(inputs)) {
    const workingDaysPerYear = 52 * daysPerWeek.value;
    const freeDaysPerYear = parseInt(holidaysPerYear.value) + parseInt(vacationsPerYear.value);

    const annualSalaryUnadjusted = salaryPerHour.value * (hoursPerWeek.value / daysPerWeek.value) * workingDaysPerYear;
    const annualSalaryAdjusted = salaryPerHour.value * (hoursPerWeek.value / daysPerWeek.value) * (workingDaysPerYear - freeDaysPerYear);
    const annualSalaryAdjustedForInflation = annualSalaryAdjusted * ((100 - inflation.value) / 100);

    modalContent.innerHTML = salaryResult(annualSalaryUnadjusted, annualSalaryAdjusted, annualSalaryAdjustedForInflation);
  } else {
    modalContent.innerHTML = INVALID_INPUT_HTML;
  }
}

function roundNumber(number) {
  return Math.round((number + Number.EPSILON) * 100) / 100;
}

function openModal() {
  modal.classList.add('open-modal');
  closeModal();
}

function closeModal() {
  btnModal = document.querySelector('.btn-modal');

  if (btnModal !== null) {
    btnModal.addEventListener('click', () => {
      modal.classList.remove('open-modal');
      modalContent.innerHTML = ``;
    });
  } else {
    modalContent.innerHTML = NO_CALCULATOR_SELECTED;
  }
}
