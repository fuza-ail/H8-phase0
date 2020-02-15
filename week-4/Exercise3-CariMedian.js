function cariMedian(arr){
  var tempOne;
  var tempTwo;
  for(var i = 0; i<arr.length;i++){
    for(var j = 0; j<arr.length-1;j++){
      if(arr[j+1]<arr[j]){
        tempOne = arr[j];
        tempTwo = arr[j+1];
        arr[j]=tempTwo;
        arr[j+1]=tempOne
      }
    }
  }
  var jumlah = arr.length
  if(jumlah%2===0){
    return (arr[jumlah/2-1]+arr[jumlah/2])/2;
  }else{
    return arr[Math.floor(jumlah/2)]
  }
}
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7 seharusnya median di sort terlebih dahulu
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5