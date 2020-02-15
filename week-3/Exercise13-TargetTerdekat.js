function targetTerdekat(arr){
  var indexO = [];
  var indexX = [];
  var temp = Infinity;
  for(var i = 0; i<arr.length; i++){
    if( arr[i] === 'x'){
      indexX.push(i)
    }else if(arr[i] === 'o'){
      indexO.push(i)
    }
  }
  for(var i = 0; i<indexO.length;i++){
    for(var j = 0; j<indexX.length;j++){
      if(temp> Math.abs(indexX[j]-indexO[i])){
        temp = Math.abs(indexX[j]-indexO[i])
      }
    }
  }
  if(temp === Infinity){
    return 0
  }
  return temp
}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2