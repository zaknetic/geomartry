function calculatePentagonArea(){
    // get base of pentagon
    const baseInput = document.getElementById('pentagon-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);
 
    // get width of the pentagon
    const lengthInput = document.getElementById('pentagon-length');
    const lengthText =  lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);
 
    // calculate area of pentagon
     const area = 0.5 * base * length;
     console.log('area of the pentagon:',area);
 
     //display area of pentagon
 
      const pentagonAreaSpan = document.getElementById('pentagon-area');
      pentagonAreaSpan.innerText = area;
 
 
 }
 
 