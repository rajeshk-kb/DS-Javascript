function MyDS() {
  this.arr = new Array();
  this.hash = new Map(); // Hash
}


MyDS.prototype.add = function (value) {
  // If element is already present, then noting to do 
  if (this.hash.get(value)){ // undefined
    return; 
  } 

  // Else put element at the end of arr[] 
  var  s = this.arr.length;
  this.arr.push(value);

  // And put in hash also 
  this.hash.set(value, s);
}

MyDS.prototype.search = function (value) {
  return this.hash.get(value); 
}

MyDS.prototype.remove = function (value) {
    // Check if element is present 
    var index = this.hash.get(value); 
    if (!index || index == undefined)  // index not found
       return; 

    // If present, then remove element from hash 
    this.hash.delete(value); 

    // Swap element with last element so that remove from 
    // arr[] can be done in O(1) time 
    var size = this.arr.length; 
    var last = this.arr[size-1]; 
  
    var temp = this.arr[index]; 
    this.arr[index] = this.arr[size-1]
    this.arr[size-1] = temp
    // Remove last element (This is O(1)) 
    this.arr.pop(); 

    // Update hash table for new index of last element 
    this.hash.set(last, index); 
}

MyDS.prototype.getRandom = function () {
  return this.hash.get(Math.floor(Math.random() * 40));
}



 /// --------------------
 var ds = new MyDS();

  ds.add(10);
  ds.add(20);
  ds.add(30);
  ds.add(40);
  console.log(ds)

  console.log(ds.search(30)); 
  ds.remove(20); 
  ds.add(50); 
  console.log(ds.search(50)); 
  console.log((ds.getRandom())); 
  console.log(ds)
  
  




// Ref : https://www.geeksforgeeks.org/design-a-data-structure-that-supports-insert-delete-search-and-getrandom-in-constant-time/
