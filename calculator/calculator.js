
function calc()
{
  //var result = Math.sqrt(a);
  var a = parseInt(document.querySelector("#number1").value);
  var b = parseInt(document.querySelector("#number2").value);
  var op = document.querySelector("#Operator").value;
  var calculate;

  if (op == "add") {
    calculate = a + b;
  } 
  
    else if (op == "minus") {
    calculate = a - b;
  } 
  
    else if (op == "divide") {
    calculate = a / b;
  } 
  
    else if (op == "multiply") {
    calculate = a * b;
  } 
  
    else if (op == "power2") {
    calculate = a * a;
  } 
  
    else if (op == "power3") {
    calculate = a * a * a;
  } 
  
    else if (op == "power4") {
    calculate = a * a * a * a;
  } 
  
    else if (op == "power5") {
    calculate = a * a * a * a * a;
  } 
  
    else if (op == "power6") {
    calculate = a * a * a * a * a * a;
  } 
  
    else if (op == "power7") {
    calculate = a * a * a * a * a * a * a;
  } 
  
    else if (op == "power8") {
    calculate = a * a * a * a * a * a * a * a;
  } 
  
    else if (op == "power9") {
    calculate =  a * a * a * a * a * a * a * a * a;
  } 
  
    else if (op == "power10") {
    calculate = a * a *a * a * a * a * a * a * a * a ;
  } 
  
    else if (op == "pie*") {
    calculate = a * 3.14159;
  } 
  
    else if(op == "pie+") {
    calculate = a + 3.14159;
  } 
  
    else if(op == "pie-") {
    calculate = a - 3.14159;
  } 
  
    else if(op == "pie/") {
    calculate = a / 3.14159;
  } 

    else if (op == "root") {
    calculate = Math.sqrt(a);
  }


  document.querySelector("#answer").innerHTML = calculate;
}
