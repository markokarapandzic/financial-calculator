function validateInputs(inputs) {
  let notValid = false;

  inputs.forEach(input => {
    const value = input.value;
    let inputNotValid = false;

    if (value === '' || value < 0) {
      input.classList.add('invalid-input');
      notValid = true;
      inputNotValid = true;
    }

    if (input.classList.contains('invalid-input') && !inputNotValid) {
      input.classList.remove('invalid-input');
    }
  });

  if (notValid) {
    return false;
  } else {
    return true;
  }
}
