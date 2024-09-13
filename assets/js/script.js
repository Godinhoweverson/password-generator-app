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

  generate(result) // pass the value as argument to bntGenerate function
}

//Used to define how many characters for which type
const divideIntoRandomArrays = function (elementsCount, arraysCount) {
  if(arraysCount > 0){
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
    // if(arrays.length === 1) {
    //   getValueUpperCase(arrays[0].length)
    //   }else if(arrays.length === 2){
    //   getValueUpperCase(arrays[0].length)
    //   getValueLowerCase(arrays[1].length)
    //   }else if(arrays.length === 3){
    //   getValueUpperCase(arrays[0].length)
    //   getValueLowerCase(arrays[1].length)
    //   getValueNumbers(arrays[2].length)
    //   }else if(arrays.length === 4){
    //   getValueUpperCase(arrays[0].length)
    //   getValueLowerCase(arrays[1].length)
    //   getValueNumbers(arrays[2].length)
    //   getValueSymbols(arrays[3].length)
    // }
    console.log(arrays[0])
    // console.log(arrays[1])
    // console.log(arrays[2])
    // console.log(arrays[3])

  }
 
};

const generate = (result) =>{

  btnGenerate.addEventListener('click', ()=>{
    divideIntoRandomArrays(tempSliderValue,result.length)
  })
}


const characterLength = function (boxSelected){
  console.log(chLength)
  }

const getValueUpperCase = (c) => {
  let upperCase = []
  for(let i = 0; i < c; i++){
    const min = 65;
    const max = 90;
   upperCase.push(Math.floor(Math.random() * (max - min) + min));
  }
  const result = upperCase; // Store result to return
  upperCase = []; // Reset the array (not strictly necessary since it's local)

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





