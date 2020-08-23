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
    case RETURN_ON_INVESTMENT:
      returnOnInvestmentCalculation();
      break;
    default:
      break;
  }

  openModal();
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
