class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class CircularQueue{

  constructor(){
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if(this.head==null){
      node.next=node;
      this.head=this.tail=node;
    }
    else{
      this.tail.next=node;
      node.next=this.head;
      this.tail=node;
    }
  }

  display(){
    let node = this.head;
    do{
      console.log(node.value);
      node = node.next;
    }while (node != this.head);
  }

  size(){
    let node = this.head;
    let count = 0;
    do{
      node = node.next;
      count++;
    }while(node != this.head);
    return count;
  }

  indexOf(value){
    let node = this.head;
    for(let i=0;i<this.size();i++){
      if(node.value===value)return i;
      node = node.next;
      }
      return -1;
  }
  
  delete(value){
  
   let pos = this.indexOf(value);
   let size = this.size();
   pos = pos % size;

   if(pos == 0){
    this.head = this.head.next;
    this.tail.next = this.head;
   }

   else{

    var node = this.head;
    for (let i = 1; i < pos; i++) {
      node = node.next;
    }
    node.next = node.next.next;
    if(node.next == this.head){
      this.tail = node;
    }

  }

  }
}


function findCount(name1, name2){
  let map1 = new Map();
  let map2 = new Map();
  for (const key of name1) {
    map1.set(key, (map1.get(key)||0)+1);
  }
  for (const key of name2) {
    map2.set(key, (map2.get(key)||0)+1);
  }
  let count = 0;
  for(let i=0;i<26;i++){
    let ch = String.fromCharCode(97+i);
    if(map1.has(ch)&&map2.has(ch)){
      count += Math.abs(map1.get(ch)-map2.get(ch));
    }
    else if(map1.has(ch)){
      count += map1.get(ch);
    }
    else if(map2.has(ch)){
      count += map2.get(ch);
    }
  }
  return count;
}

function submitForm(){

  var name1 = document.getElementById('name1').value;
  var name2 = document.getElementById('name2').value;
  
  const cq = new CircularQueue();
  cq.enqueue('1');
  cq.enqueue('2');
  cq.enqueue('3');
  cq.enqueue('4');
  cq.enqueue('5');
  cq.enqueue('6');

  let count = 1;
  let difference = findCount(name1,name2);

  let node = cq.head;

  while(cq.size() != 1){
    while (count != difference) {
      node = node.next;
      count++;
    }
    cq.delete(node.value);
    count = 0;
  }

  let result = cq.head.value;

  sessionStorage.setItem('result',result);
  window.location.href = 'result.html';
}
