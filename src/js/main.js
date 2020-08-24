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
  const homePrice = document.getElementById('home-price').value;
  const downPayment = document.getElementById('down-payment').value;
  const loanTerm = document.getElementById('term').value;
  const interestRate = document.getElementById('interest').value;

  const principal = homePrice - downPayment;
  const monthlyInterestRate = (interestRate / 100) / 12;
  const numberOfPayments = loanTerm * 12;

  const mortgagePayment = mortgagePaymentCalculation(principal, monthlyInterestRate, numberOfPayments);

  modalContent.innerHTML = mortgageResult(roundNumber(mortgagePayment));
}

function mortgagePaymentCalculation(principal, monthlyInterestRate, numberOfPayments) {
  return principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1));
}

function loanCalculation() {
  const loanAmount = document.getElementById('amount').value;
  const loanTerm = document.getElementById('term').value;
  const interestRate = document.getElementById('interest').value;

  const interest = ((interestRate / 100) / (loanTerm / 12)) * loanAmount;

  modalContent.innerHTML = loanResult(interest);
}

function interestCalculation() {
  const principal = document.getElementById('principal').value;
  const interestRate = document.getElementById('interest').value;
  const loanTerm = document.getElementById('term').value;

  const interest = principal * (interestRate / 100) * loanTerm;

  modalContent.innerHTML = interestResult(interest);
}

function returnOnInvestmentCalculation() {
  const amountInvested = document.getElementById('invested').value;
  const amountReturned = document.getElementById('returned').value;
  const investmentLength = document.getElementById('length').value;
  const gain = amountReturned - amountInvested;
  const returnOnInvestment = (amountReturned - amountInvested) / amountInvested;
  const annualizedROI = (Math.pow(1 + returnOnInvestment, 1 / investmentLength) - 1) * 100;

  modalContent.innerHTML = returnOnInvestmentResult(returnOnInvestment * 100, roundNumber(annualizedROI), gain);
}

function salaryCalculator() {
  const salaryPerHour = document.getElementById('amount').value;
  const hoursPerWeek = document.getElementById('hours').value;
  const daysPerWeek = document.getElementById('days').value;
  const holidaysPerYear = document.getElementById('holidays').value;
  const vacationsPerYear = document.getElementById('vacations').value;
  const inflation = document.getElementById('inflation').value;
  const workingDaysPerYear = 52 * daysPerWeek;
  const freeDaysPerYear = parseInt(holidaysPerYear) + parseInt(vacationsPerYear);

  const annualSalaryUnadjusted = salaryPerHour * (hoursPerWeek / daysPerWeek) * workingDaysPerYear;
  const annualSalaryAdjusted = salaryPerHour * (hoursPerWeek / daysPerWeek) * (workingDaysPerYear - freeDaysPerYear);
  const annualSalaryAdjustedForInflation = annualSalaryAdjusted * ((100 - inflation) / 100);

  modalContent.innerHTML = salaryResult(annualSalaryUnadjusted, annualSalaryAdjusted, annualSalaryAdjustedForInflation);
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
