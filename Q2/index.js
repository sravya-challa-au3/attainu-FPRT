class Node{
    constructor(value, next = null){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(value){
        const newNode = new Node(value)

        if(this.length === 0){
            this.first = this.last = newNode
        }

        let last  = this.last
        this.last = newNode
        last.next = newNode
        this.length++

        return this
    }

    dequeue(){
        if(this.length ===0 ) return null

        if(this.first === this.last){
             this.last = null
        }
        
        this.first = this.first.next
        this.length--

        return this
    }

    print(){
        let arr = []
        let curr = this.first

        while(curr !== null){
            arr.push(curr.value)
            curr = curr.next
        }
        return arr
    }
}


function maxValue (arrA, w){
 let output = []
 let queue = new Queue()

 for(let i=0; i<w; i++){
   queue.enqueue(arrA[i])
 }

 output.push(Math.max(...queue.print()))

 for(let i=w; i<arrA.length; i++){
   queue.dequeue()
   queue.enqueue(arrA[i])

   output.push(Math.max(...queue.print()))
 }

return output
}
console.log(maxValue([1,3,-1,-3,5,3,6,7], 3))
console.log(maxValue([1,3,-1,-3,5,3,6,7], 4))