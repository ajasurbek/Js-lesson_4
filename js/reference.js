// Listen to submit event of the form/Formning topshirish/yuborish hodisasiga quloq solamiz
elExchangeForm.addEventListener('submit', function (evt) {
  // Prevent form submission/Formaning topshirilishini oldini olish
  evt.preventDefault();

  // Kiritilgan summani olamiz
  // inputdan qiymatni olamiz
  // undagi bo'sh joylarni tozalaymiz
  // uni raqamga aylantiramiz
  var summ = parseFloat(elSummInput.value.trim(), 10);
  // [toFixed(2) - . dan keyin 2 xonani ajratib olamiz]

  // Tanlangan valyuta qiymatini olamiz
  // select qiymati olinadi
  // raqamga aylantiramiz
  var currencyRate = parseFloat(elCurrencySelect.value.trim(), 10);
  // [toFixed(2)]

  // Natijani topamiz
  var result = (summ * currencyRate).toFixed(2);
  // kiritilgan summa * valyuta kursi

  // Natijani ko'rsatamiz
  elResultWrapper.classList.remove('d-none');
  // Natija ko'rsatiladigan HTMl elementni ko'rinadigan qilamiz (d-none olib tashlanadi)
  // Natijani .result klassli output elementi ichida ko'rsatamiz
  elResult.textContent = result;
});