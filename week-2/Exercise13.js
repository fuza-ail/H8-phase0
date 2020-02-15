function xo(word){
  let countX = 0;
  let countO = 0;
  for(let i=0; i<word.length;i++){
    if(word[i] === 'x'){
      countX = countX + 1
    }else{
      countO = countO + 1
    }
  }
  if(countX === countO){
    return true
  }else{
    return false
  }
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true