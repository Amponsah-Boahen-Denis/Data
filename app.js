 /*class linkedlist{
#     constructor(){
#         this.head=null;
#         this.tail=null;
#     }
#     append(value){
#         const newNode={value:value, next:null};
#         if(this.tail){
#        this.tail.next= newNode;
#         }
#         this.tail=newNode;
#         if(!this.head){
#             this.head = newNode;
#         }
#     }
#     toArray(){
# const elements=[];
# let curnode=this.head;
# while(curnode){
#     elements.push(curnode);
#     curnode=curnode.next
# }
# return elements;
#     }
# }
# const answer= new linkedlist();
# answer.append(1);
# answer.append('hello there');
# answer.append('max');
# answer.append(true);
*/
 
class linkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    append(value){
const show={value:value, next:null}
if(this.tail) return this.tail.next=show;
this.tail=show;
if(!this.head) return this.head=show
    }
    toArray(){
        const elements=[];
        let curnode=this.head;
        while(curnode){
            elements.push(curnode)
            curnode=curnode.next;
        }
return elements;
    }
    
}
 const answer= new linkedlist();
 answer.append(1);
 answer.append('hello there');
answer.append('max');
 answer.append(true);
 console.log(answer.toArray());