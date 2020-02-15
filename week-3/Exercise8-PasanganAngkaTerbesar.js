function pasanganTerbesar(num){
  var temp =[];
  var newNum = num.toString()
  for(var i=0; i<newNum.length-1;i++){
    temp.push(Number(newNum[i]+newNum[i+1]))
  }
  var check =0
  for(var i = 0;i<temp.length;i++){
    if(temp[i]>check){
      check = temp[i]
    }
  }
  return check
}


console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83 
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99