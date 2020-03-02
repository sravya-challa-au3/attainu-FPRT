function isPair (str1, str2){
    if(str1 === '(' && str2 === ')')
        return true
    
    else if(str1 === '[' && str2 === ']')
        return true
    
    else if(str1 === '{' && str2 === '}')
        return true
    
    else 
      return false
}

function balanceOfSymbols (str){
  let stack = []

  for(let char of str){

    //push opening brackets into stack
    if(char === '(' || char === '{' || char === '['){
      stack.push(char)
    }

    //for each closing bracket check if there is a pair 
    if(char === ')' || char === '}' || char === ']'){
     
      if(stack.length === 0) 
        return 'no'
        
      if(!isPair(stack.pop(), char))
        return 'no'
    }
  }

   if(stack.length !== 0)
    return 'no'

   return 'yes'
}

console.log(balanceOfSymbols('(A+B) + (C+D)'))
console.log(balanceOfSymbols('((A+B) + (C-D)'))
console.log(balanceOfSymbols('()(()[()])'))