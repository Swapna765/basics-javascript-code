class Node{
    constructor(data){
        this.data = data;      // store the value
        this.next = null;      // Reference to next node
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.head === null;
    }
    getSize(){
        return this.size;
    }

    prepend(data){
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    append(data){
        const node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next) curr = curr.next;
            curr.next = node;
        }
        this.size++;
    }

    print(){
        let curr = this.head, str = '';
        while(curr){
            str += curr.data + ' ->  ';
            curr = curr.next;
        }
        console.log(str + 'null');
    }
}

const list = new LinkedList();
list.append(1)
list.append(2)
list.prepend(0)
list.print();