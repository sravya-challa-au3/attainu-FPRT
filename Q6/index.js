// function towers_of_hanoi(number_of_disks){
//  let rod1 = [3,2,1]
//  let rod2 = []
//  let rod3 = []

//  for(let i=0; i<number_of_disks-1; i++){
//    let ele = rod1.pop()

//    if(rod2.length >0) 
//     rod3.push(ele)
   
//    else
//     rod2.push(ele)
//  }

//  rod3.push(rod2.pop())
//  rod2.push(rod1.pop()) 
 
//  for(let i=0; i<rod3.length; i++){
//     rod2.push(rod3[i])
//  }
 
//  return rod2
// }
// console.log(towers_of_hanoi(3))


function steps_towers_of_hanoi (number_of_disks, srcTwr, destTwr, bufferTwr){
  if(number_of_disks >= 1){
    steps_towers_of_hanoi(number_of_disks-1, srcTwr, bufferTwr, destTwr)

    console.log('Move disk from ' + srcTwr + ' to ' + destTwr)

    steps_towers_of_hanoi(number_of_disks-1, bufferTwr, destTwr, srcTwr)
 }
}
steps_towers_of_hanoi(4, 'A', 'C', 'B')