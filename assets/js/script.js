const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")
const btnGenerate = document.getElementById('btn-generate')


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
    alert("Sorry! The character length must be equal to or greater than the number of characters you have chosen.")
  }
}

const generate = () =>{
  btnGenerate.addEventListener('click', ()=>{
    distributeValue(getValue(), tempSliderValue)
    passwordConc()
  })
}

generate()


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
  console.log(upperCase)
  console.log(lowerCase)
  console.log(numbers)
  console.log(symbols)
  upperCase = []
  lowerCase = []
  numbers = []
  symbols = []
}

// To get the characters
// String.fromCharCode(77)







