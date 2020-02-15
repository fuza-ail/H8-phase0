function urutkanAbjad(str){
  var arr = [];
  for(var i= 0; i<str.length;i++){
    arr.push(str[i])
  }
  var tempOne;
  var tempTwo;
  for(var i=0; i<arr.length; i++){
    for(var j=0;j<arr.length-1;j++){
      if(arr[j+1]<arr[j]){
        tempOne= arr[j+1];
        tempTwo= arr[j];
        arr[j]= tempOne;
        arr[j+1]=tempTwo
      }
    }
  }
  var string= ''
  for(var i=0; i<arr.length;i++){
    string+= arr[i]
  }

  return string
}

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'