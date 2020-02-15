// non mathematical approach
function angkaPalindrome(num){
  var temp;
  var tempOne='';
  var tempTwo;
  var status = false
  while(status === false){
    if(num<9){
      return num+1
    }else{
      num++
      temp= num.toString()
      for(var i = temp.length-1; i >=0;i--){
        tempOne+= temp[i]
      }
      tempTwo = Number(tempOne)
      if(num===tempTwo){
        status = true;
        return num
      }else{
        tempOne=''
        status = false;
      }
    }
  }
}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001