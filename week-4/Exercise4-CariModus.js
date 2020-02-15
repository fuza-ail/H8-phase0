function cariModus(arr) {
  var counter =1;
  var modeSekarang = arr[0]
  var nilaiSekarang = 0
  var jumlah = 0
  for(var i=0; i<arr.length-1;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]===arr[j]){
        counter ++
      }
    }
    jumlah =counter
    if(nilaiSekarang<jumlah){
      nilaiSekarang = jumlah;
      modeSekarang=arr[i]
    }
    counter = 1
  }
  if(nilaiSekarang === 1 || nilaiSekarang === arr.length){
    return -1
  }
  return modeSekarang
  
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
