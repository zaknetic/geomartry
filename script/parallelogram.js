function calculateParallelogramArea(){
    // get base of parallelogram
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);
 
    // get width of the parallelogram
    const heightInput = document.getElementById('parallelogram-hieght');
    const heightText =  heightInput.value;
    const height = parseFloat(heightText );
    console.log(height);
 
    // calculate area of parallelogram
     const area = base * height;
     console.log('area of the parallelogram:',area);
 
     //display area of parallelogram
 
      const parallelogramAreaSpan = document.getElementById('parallelogram-area');
      parallelogramAreaSpan.innerText = area;
 
 
 }
 
 