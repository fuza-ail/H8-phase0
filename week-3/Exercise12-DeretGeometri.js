function tentukanDeretGeometri(arr){
  var status = false
  var b=arr[0]/arr[1];
  for(var i = 0; i<arr.length-1;i++){
    if(b === arr[i]/arr[i+1]){
      status = true
    }else{
      status = false
    }
  }
  return status
}
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false