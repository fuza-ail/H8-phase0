function balikString(word){
  var temp = ''
  for(var i = word.length-1;i>=0;i--){
    temp += word[i]
  }
  return temp
}
console.log(balikString('Hello world!'))
