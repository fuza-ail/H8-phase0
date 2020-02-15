function angkaPrima(angka){
  var counter =0
  for(var i =1; i<=angka; i++){
    if(angka%i==0){
      counter++
    }
  }
  if(angka ===1){
    return false
  }else if(counter>2){
    return false
  }else{
    return true
  }
}
console.log(angkaPrima(1)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(169))