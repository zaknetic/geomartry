function calculateEllipseArea(){
    // get base of ellipse
    const baseInput = document.getElementById('ellipse-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);
 
    // get width of the ellipse
    const lengthInput = document.getElementById('ellipse-length');
    const lengthText =  lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);
 
    // calculate area of ellipse
     const area = 3.14 * base * length;
     console.log('area of the ellipse:',area);
 
     //display area of ellipse
 
      const ellipseAreaSpan = document.getElementById('ellipse-area');
      ellipseAreaSpan.innerText = area;
 
 
 }
 
 