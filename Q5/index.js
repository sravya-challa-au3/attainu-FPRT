class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

//creating a LinkedList ( 1->2->3->4->5->6->null )
const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
const n5 = new Node(5)
const n6 = new Node(6)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6

//creating a LinkedList ( 1->2->3->4->5->6->3 )
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node3


function findPattern(head){
  let firstPtr = head
  let secondPtr = head

    while(secondPtr){
        firstPtr = firstPtr.next
        secondPtr = secondPtr.next.next

        if(firstPtr === secondPtr){
            return 'snail'
        }
    }
    return 'snake'
}

console.log(findPattern(n1))
console.log(findPattern(node1))