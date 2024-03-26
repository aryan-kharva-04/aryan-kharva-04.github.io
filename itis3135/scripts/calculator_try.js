let result = document.getElementById("result");

//essentially appends the given val to the current val in the result box
function appendToResult(value) {
  result.value += value;
}

//clears the result when user clicks C
function clearResult() {
  result.value = "";
}

//removes the last digit (when user user clicks CE) using the slice method: https://www.w3schools.com/jsref/jsref_slice_array.asp 
function removeLastDigit() {
  result.value = result.value.slice(0, -1);
}

//the actual calculating of the result the user enters using a try and catch statement: https://www.w3schools.com/js/js_errors.asp
function calcResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}