var ElForm = document.querySelector('.form');
var ElInput = ElForm.querySelector('.form-input');
var ElBtn = ElForm.querySelector('.main-button');
var ElResult = document.querySelector('.game-text');


ElForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  var ElForma = parseFloat(ElInput.value.trim() , 10);



  if( ElForma % 3 === 0 && ElForma % 5 === 0 ){
    ElResult.textContent = "FizzBuzz";
    return;
  }
  if( ElForma % 3 === 0){
    ElResult.textContent = "Fizz";
    return;
  }
  if( ElForma % 5 === 0){
    ElResult.textContent = "Buzz";
    return;
  }
  if( ElForma % 3 != 0 || ElForma % 5 != 0 ){
    ElResult.textContent = "Error";
    return;
  }

})
