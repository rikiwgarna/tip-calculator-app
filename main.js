const numberPeopleInput = document.querySelector('.number-people-input');
const billInput = document.querySelector('.bill-input');
const resetButton = document.querySelector('.reset-button');
const errorMsg = document.querySelector('.error-msg');
const radioOptions = document.querySelectorAll('input[name="options"]');
const totalNumber = document.querySelector('.total-number');
const tipNumber = document.querySelector('.tip-number');
const optionLabels = document.querySelectorAll('.option-label');
const optionCustomInput = document.querySelector('.option-custom-input');

window.addEventListener('keyup', (e) => {
  let numberPeopleInputVal = numberPeopleInput.value;
  const billInputVal = parseFloat(billInput.value);

  if (e.keyCode === 13) {
    e.preventDefault();

    if (isNaN(numberPeopleInputVal) || numberPeopleInputVal <= 0) {
      numberPeopleInput.classList.add('error');
      errorMsg.style.visibility = 'visible';
    } else {
      numberPeopleInput.classList.remove('error');
      errorMsg.style.visibility = 'hidden';
    }

    if (isNaN(billInputVal) || billInputVal <= 0) {
      billInput.classList.add('error');
      errorMsg.style.visibility = 'visible';
    } else {
      billInput.classList.remove('error');
      errorMsg.style.visibility = 'hidden';
    }

    calculate(numberPeopleInputVal, billInputVal);
  }
});

function calculate(people, bill) {
  let optionCustomInputVal = parseInt(optionCustomInput.value);
  let tip = 0;
  let result = 0;

  if (isNaN(optionCustomInputVal)) {
    for (const radioOption of radioOptions) {
      const radioOptionVal = parseFloat(radioOption.value);
      // const selector = 'label[for=' + radioOption.id + ']';
      // const label = document.querySelector(selector);

      if (radioOption.checked) {
        // console.log(selector);
        // console.log(label, 'label');
        // if (label.classList.contains('selected')) {
        //   label.classList.remove('selected');
        // }

        tip = bill * radioOptionVal;
        personTip = tip / people;
        result = (bill + tip) / people;

        totalNumber.textContent = `$${result.toFixed(2)}`;
        tipNumber.textContent = `$${personTip.toFixed(2)}`;
        // optionLabel.style.backgroundColor = 'red';
      }
    }
  } else {
    tip = bill * (optionCustomInputVal / 100);
    personTip = tip / people;
    result = (bill + tip) / people;

    totalNumber.textContent = `$${result.toFixed(2)}`;
    tipNumber.textContent = `$${personTip.toFixed(2)}`;
  }
}

resetButton.addEventListener('click', (e) => {
  billInput.value = '';
  numberPeopleInput.value = '';
  optionCustomInput.value = '';
  totalNumber.textContent = '$0';
  tipNumber.textContent = '$0';

  if (numberPeopleInput.classList.contains('error')) {
    numberPeopleInput.classList.remove('error');
  }

  if (billInput.classList.contains('error')) {
    billInput.classList.remove('error');
  }
});

window.onload = () => {
  billInput.value = '';
  numberPeopleInput.value = '';
  optionCustomInput.value = '';
};
