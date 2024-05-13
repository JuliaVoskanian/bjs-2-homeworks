"use strict" 
 
function solveEquation(a, b, c) { 
  let discriminant = b**2 - 4*a*c; 
  if (discriminant < 0) { 
      return []; 
  } else if (discriminant === 0) { 
      let x = -b / (2*a); 
      return [x]; 
  } else { 
      let y = (-b + Math.sqrt(discriminant)) / (2*a); 
      let z = (-b - Math.sqrt(discriminant)) / (2*a); 
      return [y, z]; 
  } 
} 
let roots = solveEquation(1, 7, 2); 
console.log(roots);