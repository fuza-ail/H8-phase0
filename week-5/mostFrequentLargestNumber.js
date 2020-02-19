function sorting(arrNumber) {
  // code di sini
  for (let i = 0; i< arrNumber.length; i++) {
    var temp;
    for (let j = 0; j < arrNumber.length; j++) {
      if(arrNumber[i]<arrNumber[j]){
        temp=arrNumber[j];
        arrNumber[j]=arrNumber[i];
        arrNumber[i]=temp
      }
    }
  }
  return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
  var max = arrNumber[arrNumber.length-1];
  var counter=0;
  for(var i =0; i<arrNumber.length;i++){
    if(arrNumber[i]==max){
      counter++
    }
  }
  if(max ==undefined){
    return `''`
  }else{
    return `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${counter} kali`
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));