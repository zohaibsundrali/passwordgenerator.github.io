
let lengthElement=document.getElementById("passwordLength");
let UppercaseElement=document.getElementById("passwordUppercase");
let LowercaseElement=document.getElementById("passwordLowercase");
let NumberElement=document.getElementById("passwordNumbers");
let SymbolElement=document.getElementById("passwordSymbols");
let GenerateBtn=document.getElementById("GenerateBtn");

GenerateBtn.addEventListener("click",function(){
    console.log(lengthElement.value);
    console.log(UppercaseElement.value);
    console.log(LowercaseElement.value);
    console.log(NumberElement.value);
    console.log(SymbolElement.value);
})