//How do you find all pairs of an integer array whose sum is equal to a given number?

const findTwoNum = ((arr, value) => {
    let result = [];
    for(let i= 0; i< arr.length-1; i++) {
        if(arr[i] > value) {
            continue;
        }
        if(arr.includes(value-arr[i])) {
            result.push(arr[i]);
            result.push(value-arr[i]);
            break;;
        }   
    }
      return result;
    });
    let arr = [20,10,40,50,60,70,30];
    const value = 120;
    console.log(findTwoNum(arr, value));