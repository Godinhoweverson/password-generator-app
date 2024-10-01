const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")
const btnGenerate = document.getElementById('btn-generate')
const passwordInput = document.querySelector('.display-password')
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
const strengthLevelColor = (selectedEl) =>{
  // Check the number of selected character types and set colors accordingly
  if(selectedEl.length === 1){
    tooWeak.style.backgroundColor = '#FF0000'
    weak.style.backgroundColor = ''
    medium.style.backgroundColor = ''
    strong.style.backgroundColor = ''
     levelCategory.innerHTML = 'TOO WEAK!'
  }else if(selectedEl.length === 2){
    tooWeak.style.backgroundColor = '#FF8C00'
    weak.style.backgroundColor = '#FF8C00'
    medium.style.backgroundColor = ''
    strong.style.backgroundColor = ''
    levelCategory.innerHTML = 'WEAK'
  }else if(selectedEl.length === 3){
    tooWeak.style.backgroundColor = '#FFFF00'
    weak.style.backgroundColor = '#FFFF00'
    medium.style.backgroundColor = '#FFFF00'
    strong.style.backgroundColor = ''
    levelCategory.innerHTML = 'MEDIUM'
  }else if(selectedEl.length === 4){
    tooWeak.style.backgroundColor = '#A4FFAF'
    weak.style.backgroundColor = '#A4FFAF'
    medium.style.backgroundColor = '#A4FFAF'
    strong.style.backgroundColor = '#A4FFAF'
    levelCategory.innerHTML = 'STRONG'
  }
}

// RANGE,  GET VALUE FROM RANGE INPUT
let tempSliderValue = 0 // Variable to hold the current value of the slider
sliderEl.addEventListener("input", (event) => {
  tempSliderValue = event.target.value; 
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, #A4FFAF ${progress}%, #18171F ${progress}%)`;

})

// get the values of selected character types (checkboxes)
const getValue = () =>{
  const selected = document.getElementsByName('selected');
  let value = [];
  for (let i = 0; i < selected.length; i++){
    if(selected[i].checked){
      value.push(Number(selected[i].value))
    }
  }
  return value  // Return the array of selected values
}

// distribute total value among character types
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
      }
      else if(array[i] === 2){
        getValueLowerCase(result[i])
      }
      else if(array[i] === 3){
        getValueNumbers(result[i])
      }
      else if(array[i] === 4){
        getValueSymbols(result[i])
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

// generate uppercase letters
const getValueUpperCase = (result) => {
 
  for(let i = 0; i < result; i++){
    const min = 65;// ASCII code for 'A'
    const max = 90;// ASCII code for 'Z'
   upperCase.push(Math.floor(Math.random() * (max - min) + min));// Random uppercase letter
  }
}

//  generate lowercase letters
const getValueLowerCase = (result) => {
 
  for(let i = 0; i < result; i++){
    const min = 97; // ASCII code for 'a'
    const max = 122;// ASCII code for 'z'
    lowerCase.push(Math.floor(Math.random() * (max - min) + min));
  }
}

//  generate numbers
const getValueNumbers = (result) => {

  for(let i = 0; i < result; i++){
    const min = 48;// ASCII code for '0'
    const max = 57;// ASCII code for '9'
    numbers.push(Math.floor(Math.random() * (max - min) + min));
  }

}
//  generate symbols
const getValueSymbols = (result) => {
  
  for(let i = 0; i < result; i++){
    const min = 58; // ASCII code for first symbol
    const max = 77;// ASCII code for last symbol in the chosen range
    symbols.push(Math.floor(Math.random() * (max - min) + min));
  }

}

//  concatenate generated characters into a password
const passwordConc = function(){
  // Combine all generated characters into a single array
  const passwordArrayValues = [...upperCase,...lowerCase,...numbers,...symbols]
  // Reset character arrays for next generation
  upperCase = []
  lowerCase = []
  numbers = []
  symbols = []
  let passwordArr = [];
   // Convert ASCII codes to characters and add them to password array
  passwordArrayValues.forEach((el) =>{
  passwordArr.push(String.fromCharCode(el))

  })
   // Create password string and display it
  let password = passwordArr.toString().replaceAll(',', '');
  passwordInput.innerHTML = password
  passwordInput.style.color = '#fff'
  clipboardPassword(password)
}
//  handle copying password to clipboard
const clipboardPassword = (password) => {
  clipboard.addEventListener('click', () =>{
    navigator.clipboard.writeText(password)
    active.innerHTML = 'COPIED'
  })
}
//  generate password on button click
const generate = () =>{
  btnGenerate.addEventListener('click', ()=>{
    distributeValue(getValue(), tempSliderValue)
    active.innerHTML = ''
    passwordConc()
    strengthLevelColor(getValue())
  })
}

generate()

