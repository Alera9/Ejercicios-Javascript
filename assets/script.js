"use strict";

const selectExercise = (option) => {
  let url;
  let callback;
  let id;

  switch (option) {
    case "one":
      // id = "input-one";
      url = "./assets/script1.js";
      callback = "printOutString";
      showSolution(option, url, callback);
      break;
    case "two":
      url = "./assets/script2.js";
      callback = "doubleValue";
      showSolution(option, url, callback);
      break;
    case "three":
      url = "./assets/script3.js";
      callback = "sumAndProductOfNumbers";
      showSolution(option, url, callback);
      break;
    case "four":
      url = "./assets/script4.js";
      callback = "filterDatabetweenTwoArrays";
      showSolution(option, url, callback);
      break;
    case "five":
      url = "./assets/script5.js";
      callback = "printOutAll";
      showSolution(option, url, callback);
      break;
      case "six":
      url = "./assets/script6.js";
      callback = "bubbleSort";
      showSolution(option, url, callback);
      break;
    default:
      break;
  }
};

function loadScript(url, callback) {
  // add the script element to the head as suggested before
  let head = document.getElementsByTagName("head")[0];
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  // bind the event to the callback function
  script.onreadystatechange = callback;
  script.onload = callback;
  // Append script tag in head elemn
  head.appendChild(script);
}
const getSolution = (element) => selectExercise(element.id);

const showSolution = (elementId, url, callback) => {
  let output = document.getElementById(elementId + "Output");
  console.log(output);
  loadScript(url,callback);
};
const convertToArray = (strArr) =>{
  console.log(strArr);
    strArr =strArr.replace("[","");
    strArr =strArr.replaceAll("]","");
    strArr =strArr.replaceAll('"',"");
    console.log( typeof strArr);
    let arr = strArr.split(",");
    console.log(arr);
    return arr;
}
const printSolution = (elementId,callbackFcn) =>{
    let output = document.getElementById(elementId + "Output");
    let value = convertToArray(document.getElementById(elementId+"Input").value);
    let result;
    if(elementId == "four"){
      let value1 = value
      let value2 = convertToArray(document.getElementById(elementId+"Input2").value);
      result = callbackFcn(value1, value2);
    }else{
      result = callbackFcn(value);
      console.log(result);
        }
    console.log(output);
    output.innerHTML += `<code class="code-console" > >${result} </code>`;
    // callback(value);
}
const printSolutionInExerciseFive = (callbackFcn,arg,arr, nameFunction) =>{
  let output = document.getElementById("fiveOutput");
  if(nameFunction == "addMyName"){
    let myName = document.getElementById("fiveInput2").value;
    callbackFcn(arr,myName);
    output.innerHTML += `<code class="code-console lineFunction" > > ${nameFunction}(people,"${myName}"); </code> <br>`
    output.innerHTML += `<code class="code-console" > >[${arr}] </code> <br>`
  }else if(nameFunction=="iterateAndExitAfterMaria"){
    callbackFcn(arr);
    output.innerHTML += `<code class="code-console lineFunction" > > ${nameFunction}(people); </code> <br>`
    output.innerHTML += `<code class="code-console" > >[${arr}] </code> <br>`
  }else if(nameFunction=="indexOfMaria"){
    
    output.innerHTML += `<code class="code-console lineFunction" > > ${nameFunction}(people); </code> <br>`
    output.innerHTML += `<code class="code-console" > >${callbackFcn(arr)} </code> <br>`
  }else{
      callbackFcn(arr,arg);
      output.innerHTML += `<code class="code-console lineFunction" > > ${nameFunction}(people,"${arg}"); </code> <br>`
      output.innerHTML += `<code class="code-console" > >[${arr}] </code> <br>`
  }
  // callback(value);
}


