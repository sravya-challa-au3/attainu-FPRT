function check_who_wins_election(ArrayA){
  let map ={}
  let max = -Infinity

  for(let i=0; i<ArrayA.length; i++){
    if(!map[ArrayA[i]])
     map[ArrayA[i]] = 1
    
    else
     map[ArrayA[i]]++
  }

  for(let i=0; i<ArrayA.length; i++){
    if(map[ArrayA[i]] > max)
     max = ArrayA[i]
  }
  
  return max

}
console.log(check_who_wins_election([1,2,3,3,3,4,5,6,6,7]))
console.log(check_who_wins_election([1,2,3,3,3,4,5,6,6,7,8,8,8,8,8,9]))