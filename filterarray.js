function filterArray(arr) {
    var j = 0;
    var numArr = [];
    for (let i=0; i < arr.length; i++){
      if(typeof arr[i]=== "number"){
        numArr[j]= arr[i];
        j++;
      }
  
    }
   return numArr;
  }
  
  console.log(filterArray([1,2,3,4,"dog","cat","rat",7]));