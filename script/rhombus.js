function calculateRhombusArea(){
    // get base of rhombus
    const baseInput = document.getElementById('rhombus-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);
 
    // get width of the rhombus
    const lengthInput = document.getElementById('rhombus-length');
    const lengthText =  lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);
 
    // calculate area of rhombus
     const area = 0.5 * base * length;
     console.log('area of the rhombus:',area);
 
     //display area of rhombus
 
      const rhombusAreaSpan = document.getElementById('rhombus-area');
      rhombusAreaSpan.innerText = area;
 
 
 }
 
 