function addAndSubtract(arr) {
    
    let newArray = [];
    let arrSum = 0;
    let newArraySum = 0;

    for ( let i = 0; i < arr.length; i++) {
        let num = arr[i];
        arrSum += num;


        if(num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }

      newArraySum += num 
      newArray[i] = num;    

    }

    console.log(newArray);
    console.log(arrSum);
    console.log(newArraySum);
}

addAndSubtract([-5, 11, 3, 0, 2]);