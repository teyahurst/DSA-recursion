function triangularNum(num){
	if(num === 0){
		return 0
	}
  
  return num + triangularNum(num - 1)
}

console.log(triangularNum(7))