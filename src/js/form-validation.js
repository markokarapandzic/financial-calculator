function validateInputs(inputs) {
  let notValid = false;

  inputs.forEach(input => {
    const value = input.value;
    let inputNotValid = false;

    if (input.id === 'hours' && value > 112) {
      input.classList.add('invalid-input');
      notValid = true;
      inputNotValid = true;
    } else if (input.id === 'days' && value > 7) {
      input.classList.add('invalid-input');
      notValid = true;
      inputNotValid = true;
    }

    if (checkNumber(value)) {
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

function checkNumber(number) {
  return number === '' || number <= 0 || number > Number.MAX_SAFE_INTEGER;
}
