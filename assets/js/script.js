const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")
const checkboxes = document.getElementsByName('selected');



// RANGE,  GET VALUE FROM RANGE INPUT
let tempSliderValue = 0
sliderEl.addEventListener("input", (event) => {
  tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, #A4FFAF ${progress}%, #18171F ${progress}%)`;
})

// Get value from checkbox to know what kind of charcters the user wanna 
const getValue = () =>{
  const c = document.getElementsByName('selected');
  let result = [];
  for (let i = 0; i < c.length; i++){
    if(c[i].checked){
      result.push(Number(c[i].value))
    }
  }
  divideIntoRandomArrays(tempSliderValue,result.length)
}

//Used to define how characters for wich type
const divideIntoRandomArrays = function (elementsCount, arraysCount) {
  // Generate an array with numbers 1 to elementsCount
  const array = Array.from({ length: elementsCount }, (_, i) => i + 1);
  
  // Shuffle the array using Fisher-Yates algorithm for randomness
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  // Create arraysCount empty arrays
  const arrays = Array.from({ length: arraysCount }, () => []);

  // Distribute the shuffled elements into the arrays
  for (let i = 0; i < array.length; i++) {
      arrays[i % arraysCount].push(array[i]);
  }

if(arrays.length === 1) {
  getValueUpperCase(arrays[0].length)
}else if(arrays.length === 2){
  getValueUpperCase(arrays[0].length)
  getValueLowerCase(arrays[1].length)
}else if(arrays.length === 3){
  getValueUpperCase(arrays[0].length)
  getValueLowerCase(arrays[1].length)
  getValueNumbers(arrays[2].length)
}else if(arrays.length === 4){
  getValueUpperCase(arrays[0].length)
  getValueLowerCase(arrays[1].length)
  getValueNumbers(arrays[2].length)
  getValueSymbols(arrays[3].length)
}
};

const characterLength = function (boxSelected){
  console.log(chLength)
  }

const getValueUpperCase = (c) => {
  const upperCase = []
  for(let i = 0; i < c; i++){
    const min = 65;
    const max = 90;
   upperCase.push(Math.floor(Math.random() * (max - min) + min));
  }
console.log(upperCase)
}
const getValueLowerCase = (c) => {
  console.log(c)
}
const getValueNumbers = (c) => {
  console.log(c)
}
const getValueSymbols = (c) => {
  console.log(c)
}

//TO KNOW HOW WILL HAVE ON EACH ARRAY WILL BE BASED ON 
// tempSliderValue / 3 (FOR HOW MANY BOX THE USER SELECTED)


//CREATE ARRAY WITH WHAT THE USER CHOICE

// UPPERCASE  65 to 90
// LOWERCASE  97 to 122
// NUMBERS 48 to 57
//SYMBOLS 33 to 47 and 58 to 77

// To get the characters
// String.fromCharCode(77)


// const min = 33;
// const max = 56
// Math.floor(Math.random() * (max - min) + min)





