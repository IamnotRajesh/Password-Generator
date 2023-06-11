let inputSLider = document.getElementById("inputSLider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let LowerCase = document.getElementById("LowerCase");
let UpperCase = document.getElementById("UpperCase");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


// Showing input Slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "~@#$%^&*";


//Function to generate Password
function generatePassword(){
	let genPassword = "";
	let allChars = "";

	allChars += LowerCase.checked ? lowerChars : "";
	allChars += UpperCase.checked ? upperChars : "";
	allChars += Numbers.checked ? allnumbers : "";
	allChars += Symbols.checked ? allsymbols : ""; 

	if(allChars == "" || allChars.length == 0){
         return genPassword;
	}
    

    let i = 1;
    while(i<=inputSlider.value){

    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click', ()=>{
	if(passBox.value != "" || passBox.value.length >= 1){
     navigator.clipboard.writeText(passBox.value);
     copyIcon.innerText = "check";
     copyIcon.title = "Password Copied";

     setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
	}
});