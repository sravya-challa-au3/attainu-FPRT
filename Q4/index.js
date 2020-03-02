function occurringTwice (arr){
  let map = {}
  let output = []

  for(let i=0; i<arr.length; i++){
      if(!map[arr[i]])
       map[arr[i]] = 1
      
      else
       output.push(arr[i])
  }

  return output
}
console.log(occurringTwice([1,4,3,4,2,5,2]))
console.log(occurringTwice([1,4,3,4,2,5,2,6,7,8,7,6]))