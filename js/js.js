// TAKRORLASH QISMI

// var elExchangeForm = document.querySelector('.exchange-form');

// elExchangeForm.addEventListener('submit', function (evt) {
//   evt.preventDefault();

//   var inputSum = parseFloat(elExchangeForm.querySelector('.input-summ').value.trim(), 10).toFixed(2);

//   console.log(inputSum);
// });

// elExchangeForm.addEventListener('submit', function(evt) {
//   evt.preventDefault();

//   document.body.style.backgroundColor = 'orange';
// });


// =================================
// DARS QISMI
// =================================

// Find all necessary elements/Hamma kerakli elementlarni topamiz
var elExchangeForm = document.querySelector('.exchange-form');
var elSummInput = elExchangeForm.querySelector('.summ-input');
var elCurrencySelect = elExchangeForm.querySelector('.currency-select');
var elResultWrapper = elExchangeForm.querySelector('.result-wrapper');
var elResult = elExchangeForm.querySelector('.result');
var elAlert = elExchangeForm.querySelector('.alert-result');
var elAlertMinus = elExchangeForm.querySelector('.alert-minus');

// var sayHi = function (name) {
//   console.log(`Hi, ${name}`);
// };
// sayHi('Muhammad');
// document.querySelector('.btn-success').addEventListener('click', sayHi);


var convertCurrencyToUzs = function (evt) {
  evt.preventDefault();

  var summ = parseFloat(elSummInput.value.trim(), 10);

  if (isNaN(summ)) {
    // console.log('Brat, son kiriting');
    elAlert.classList.remove('d-none');
    elResultWrapper.classList.add('d-none');
    elAlertMinus.classList.add('d-none');
    return;
  }

  if (summ < 0) {
    elAlertMinus.classList.remove('d-none');
    elAlert.classList.add('d-none');
    elResultWrapper.classList.add('d-none');
    return;
  }

  var currencyRate = parseFloat(elCurrencySelect.value.trim(), 10);

  var result = (summ * currencyRate).toFixed(2);

  elResultWrapper.classList.remove('d-none');
  elAlert.classList.add('d-none');
  elAlertMinus.classList.add('d-none');
  elResult.textContent = result;
};

elExchangeForm.addEventListener('submit', convertCurrencyToUzs);


var multiply = function (birinchiRakam, ikinchiRakam) {
  // console.log(birinchiRakam * ikinchiRakam);
  console.log('Men returndan oldinman');
  return birinchiRakam * ikinchiRakam;
};

// ============

