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
  let result = [];
  for (let i = 0; i < selected.length; i++){
    if(selected[i].checked){
      result.push(Number(selected[i].value))
    }
  }
  return result 
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

  if(result.length === 1){
    getValueUpperCase(result[0])
  }else if(result.length === 2){  
    getValueUpperCase(result[0])
    getValueLowerCase(result[1])
  }else if(result.length === 3){  
    getValueUpperCase(result[0])
    getValueLowerCase(result[1])
    getValueNumbers(result[2])
   }else if(result.length === 4){  
    getValueUpperCase(result[0])
    getValueLowerCase(result[1])
    getValueNumbers(result[2])
    getValueSymbols(result[3])   
  } 
}


const generate = () =>{
  btnGenerate.addEventListener('click', ()=>{
    distributeValue(getValue(), tempSliderValue)
  })
}

generate()


let upperCase = [];
let lowerCase = [];
let numbers = [];
let symbols = [];
let passwordConc = [];

const getValueUpperCase = (result) => {
 
  for(let i = 0; i < result; i++){
    const min = 65;
    const max = 90;
   upperCase.push(Math.floor(Math.random() * (max - min) + min));
  }
passwordConc.push(upperCase)

}
const getValueLowerCase = (result) => {
 
  for(let i = 0; i < result; i++){
    const min = 97;
    const max = 122;
    lowerCase.push(Math.floor(Math.random() * (max - min) + min));
  }
  passwordConc.push(lowerCase)
}
const getValueNumbers = (result) => {

  for(let i = 0; i < result; i++){
    const min = 48;
    const max = 57;
    numbers.push(Math.floor(Math.random() * (max - min) + min));
  }
  passwordConc.push(numbers)
}
const getValueSymbols = (result) => {
  
  for(let i = 0; i < result; i++){
    const min = 58;
    const max = 77;
    symbols.push(Math.floor(Math.random() * (max - min) + min));
  }
  passwordConc.push(symbols)
}


console.log(passwordConc)
// To get the characters
// String.fromCharCode(77)







