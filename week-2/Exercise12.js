function konversiMenit(menit){
  let min = Math.floor(menit/60);
  let det = menit%60;
  if(det<10){
    det = `0${det}`
  }else{
    det.toString()
  }
  let time = min.toString() + ':'+ det;
  return time
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00