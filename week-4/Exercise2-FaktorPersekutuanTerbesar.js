function fpb(angka1,angka2){
  var angkaBesar
  var angkaKecil
  if(angka1>angka2){
    angkaBesar = angka1;
    angkaKecil = angka2;
  }else{
    angkaBesar = angka2;
    angkaKecil = angka1;
  }
  var mod1 = angkaBesar%angkaKecil
  if(angkaKecil%mod1 === 0){
    return mod1;
  }else{
    var mod2 = angkaKecil%mod1;
    if(mod2===0){
      return mod2
    }else{
      if(angkaBesar%mod2===0){
        return mod2
      }else{
        return 1
      }
    }
  }
}
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
console.log(fpb(48,21))