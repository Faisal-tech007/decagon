function SumMx(){

    var sum = 0;
    for(let i = 0; i < values.length; i++) {
      if (typeof values[i] === 'string') {
        sum += Number(values[i])
      } else {
        sum += values[i]
      }
    }
    }
    const values = [2, '21', 19];
    
    const sum = values;
    
    console.log(sum);