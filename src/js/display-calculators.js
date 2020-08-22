const calculators = document.querySelectorAll('.calculator-item');

calculators.forEach(calculator => {
  calculator.addEventListener('click', (event) => {
    console.log(event.target);
  });
});
