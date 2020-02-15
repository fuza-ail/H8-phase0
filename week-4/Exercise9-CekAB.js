function checkAB(str){
  var indexA=[];
  var indexB=[];
  var status = false;
  for(var i = 0; i<str.length;i++){
    if(str[i]==='a'){
      indexA.push(i);
    }else if(str[i]==='b'){
      indexB.push(i);
    }
  }
  for(var i=0; i<indexA.length;i++){
    for(var j =0; j<indexB.length;j++){
      if(Math.abs(indexB[j]-indexA[i])===4){
        status = true;
      }else{
        status = false;
      }
    }
  }
  return status;
}
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false