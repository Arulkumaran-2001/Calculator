  // function displayClickedValue(inputValue) {
  //   document.getElementById('output').value +=inputValue;
  // }
  // function allClearValue() {
  //   document.getElementById('output').value = '0';
  // }
  // function clearLastValue() {
  //   let lengthofValue =document.getElementById('output').value.length;
  //   if(lengthofValue === 1){
  //     document.getElementById('output').value = '0';
  //   }else {
  //     document.getElementById('output').value = document.getElementById('output').value.slice(0,-1);
  //   }
    
  // }
  // function result() {
  //     try {
  //       document.getElementById('output').value = eval(document.getElementById('output').value);
  //     } catch{
  //       alert("Error.Check it.");
  //       document.getElementById('output').value = "0";
  //     }
  // }
  function updateOutput(value = '') {
    const output = document.getElementById('output');
    output.value = value || '0';
  }
  
  function displayClickedValue(inputValue) {
    updateOutput(document.getElementById('output').value + inputValue);
  }
  
  function allClearValue() {
    updateOutput('0');
  }
  
  function clearLastValue() {
    const output = document.getElementById('output');
    const newValue = output.value.slice(0, -1) || '0';
    updateOutput(newValue);
  }
  
  function result() {
    try {
      updateOutput(eval(document.getElementById('output').value));
    } catch {
      alert("Error. Check the input.");
      updateOutput('0');
    }
  }
  