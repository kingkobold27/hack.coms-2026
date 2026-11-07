
// export class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// export class LinkedList{
//     constructor(){
//         this.head = null;
//     }

//     append(data){
//         const newNode = new Node(data);
//         if (!this.head){
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next){
//             current = current.next;
//         }
//         current.next = newNode;
//     }
    
//     showList(){
//         let current = this.head;
//         let index = 0;

//         if(!current){
//             console.log("Empty LinkedList")
//             return;
//         }
//         while(current !== null){
//             console.log(`Index: ${index} | Name: ${current.data}`);
//             current = current.next;
//             index++;
//         }
//     }
// }

