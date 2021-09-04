function powerCalculator(base, exp){

	if(exp < 0){
  	return 'Exponent should be >= 0'
  }
  
  if(exp === 0){
   return 1
  }
  
  if(exp > 1){
  	base = base * powerCalculator(base, exp-1)
  }
  
  return base
  
}

console.log(powerCalculator(2, 1))