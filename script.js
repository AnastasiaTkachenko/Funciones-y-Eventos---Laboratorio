let numberA; 
let numberB;  
let result = document.getElementById('result'); 

let sumNumbers = () => {
   getValues();
   result.textContent = (numberA+numberB); 
   }
  
let subtractionNumbers = () => {
   getValues();
   result.textContent = (numberA-numberB); 
   } 
   
let divideNumbers = () => {
   getValues();
   result.textContent = (numberA/numberB); 
   }
   
let multiplyNumbers = () => {
   getValues();
   result.textContent = (numberA*numberB); 
   }

const getValues = () => {
   numberA = document.getElementById('buttonA').value*1; 
   numberB = document.getElementById('buttonB').value*1; 
 };


 document.getElementById('sum').addEventListener('click', sumNumbers); 
 document.getElementById('substraction').addEventListener('click',subtractionNumbers); 
 document.getElementById('divide').addEventListener('click', divideNumbers); 
 document.getElementById('multiply').addEventListener('click', multiplyNumbers); 
 