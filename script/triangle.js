function calculatorTrangleArea(){
//    get triangel base value
    const triangleBaseInput = document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseInput.value;
   const base = parseFloat(triangleBaseText);
//    console.log(base);

// get triandel height value
const triangleHeightInput = document.getElementById('triangle-height');
const triangleHeightText = triangleHeightInput.value;
const height = parseFloat(triangleHeightText );
console.log(height);

// calculate area of triangle
const area = 0.5 * base * height;
console.log('are of triangle is:',area);

// display triangle area

const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText = area;

}