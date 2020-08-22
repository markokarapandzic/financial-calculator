const btnCalculate = document.querySelector('.btn-calculate');
const btnModal = document.querySelector('.btn-modal');
const fabCalculate = document.querySelector('.fab-calculate');
const modal = document.querySelector('.modal-overlay');

btnCalculate.addEventListener('click', () => {
  openModal();
});

fabCalculate.addEventListener('click', () => {
  openModal();
});

function openModal() {
  modal.classList.add('open-modal');
}

btnModal.addEventListener('click', () => {
  modal.classList.remove('open-modal');
});
