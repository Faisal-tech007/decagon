function secondLargest(arr){

        let largest=0, secondLargest = 0
    
        for (i of arr){
            if (i > largest){
                largest = i;
            }
        }
    
        for (j of arr){
            if(j !== largest && j > secondLargest){
                secondLargest =   j;
            }
        }
    
        return secondLargest;
    
    }
    
    
    console.log("Second Largest",findSecondLargest([1,2,4,6,9,0]));
