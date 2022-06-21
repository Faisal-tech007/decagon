function filterList(arr){
    let filteredLis = [];
    for (let i = 0; i < arr.length; i++) {
      if ( typeof arr[i] !== "string") {
        filteredLis.push(arr[i])
      } 
    } return filteredLis;
}



  console.log(filterList([1, 2, "a", "b"]));
  console.log(filterList([1, "a", "b", 0, 15]));
  console.log(filterList([1, 2, "aasf", "1", "123", 123]));