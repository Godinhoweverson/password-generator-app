const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")
const btnGenerate = document.getElementById('btn-generate')
const passwordInput = document.querySelector('.password-input')
const tooWeak = document.querySelector('.tooWeak')
const weak = document.querySelector('.weak')
const medium = document.querySelector('.medium')
const strong = document.querySelector('.strong')
const levelCategory = document.querySelector('.level-category')
const active = document.querySelector('.active')
const clipboard = document.querySelector('.clipboard')

// Error Message
const config = {
  cor:'#A4FFAF'
}
const BoxMsg = new Boxmsg(config);

//This function is used to set the background color based on
// how many types of characters the user selects. on level boxes
const strengthLevelColor = () =>{

}

// RANGE,  GET VALUE FROM RANGE INPUT
let tempSliderValue = 0
sliderEl.addEventListener("input", (event) => {
  tempSliderValue = event.target.value; 
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, #A4FFAF ${progress}%, #18171F ${progress}%)`;

})

// Get value from checkbox to know what kind of charcters will be sort on password 
const getValue = () =>{
  const selected = document.getElementsByName('selected');
  let value = [];
  for (let i = 0; i < selected.length; i++){
    if(selected[i].checked){
      value.push(Number(selected[i].value))
    }
  }
  return value 
}

function distributeValue(array, totalValue) {
  let arrayLength = array.length
  const result = Array(arrayLength).fill(0);

  for (let i = 0; i < arrayLength; i++) {
      result[i] = 1;
      totalValue--;
  }

  while (totalValue > 0) {
      const randomIndex = Math.floor(Math.random() * arrayLength);
      result[randomIndex]++;
      totalValue--;
  }

  if(tempSliderValue >= array.length){
    for(let i = 0; i < array.length; i++){
  
      if(array[i] === 1){
        getValueUpperCase(result[i])
        tooWeak.style.backgroundColor = '#FF0000'
        levelCategory.innerHTML = 'TOO WEAK!'
      }
      else if(array[i] === 2){
        getValueLowerCase(result[i])
        tooWeak.style.backgroundColor = '#FF8C00'
        weak.style.backgroundColor = '#FF8C00'
        levelCategory.innerHTML = 'WEAK'
      }
      else if(array[i] === 3){
        getValueNumbers(result[i])
        tooWeak.style.backgroundColor = '#FFFF00'
        weak.style.backgroundColor = '#FFFF00'
        medium.style.backgroundColor = '#FFFF00'
        levelCategory.innerHTML = 'MEDIUM'
      }
      else if(array[i] === 4){
        getValueSymbols(result[i])
        tooWeak.style.backgroundColor = '#A4FFAF'
        weak.style.backgroundColor = '#A4FFAF'
        medium.style.backgroundColor = '#A4FFAF'
        strong.style.backgroundColor = '#A4FFAF'
        levelCategory.innerHTML = 'STRONG'
      }
    }
  }else {
    BoxMsg.display('Sorry 🥺', "The character length must be equal to or greater than the number of characters you have chosen.")
    }
}

// Create new arrays based on the user choice
let upperCase = [];
let lowerCase = [];
let numbers = [];
let symbols = [];

const getValueUpperCase = (result) => {
 
  for(let i = 0; i < result; i++){
    const min = 65;
    const max = 90;
   upperCase.push(Math.floor(Math.random() * (max - min) + min));
  }
}

const getValueLowerCase = (result) => {
 
  for(let i = 0; i < result; i++){
    const min = 97;
    const max = 122;
    lowerCase.push(Math.floor(Math.random() * (max - min) + min));
  }
}

const getValueNumbers = (result) => {

  for(let i = 0; i < result; i++){
    const min = 48;
    const max = 57;
    numbers.push(Math.floor(Math.random() * (max - min) + min));
  }

}

const getValueSymbols = (result) => {
  
  for(let i = 0; i < result; i++){
    const min = 58;
    const max = 77;
    symbols.push(Math.floor(Math.random() * (max - min) + min));
  }

}

const passwordConc = function(){
  const passwordArrayValues = [...upperCase,...lowerCase,...numbers,...symbols]
  upperCase = []
  lowerCase = []
  numbers = []
  symbols = []
  let passwordArr = [];
passwordArrayValues.forEach((el) =>{
 passwordArr.push(String.fromCharCode(el))

})

let password = passwordArr.toString().replaceAll(',', '');
console.log(password)
passwordInput.innerHTML = password
clipboardPassword(password)
}

const clipboardPassword = (password) => {
  clipboard.addEventListener('click', () =>{
    navigator.clipboard.writeText(password)
    active.innerHTML = 'COPIED'
  })
}

const generate = () =>{
  btnGenerate.addEventListener('click', ()=>{
    distributeValue(getValue(), tempSliderValue)
    passwordConc()
  })
}

generate()

