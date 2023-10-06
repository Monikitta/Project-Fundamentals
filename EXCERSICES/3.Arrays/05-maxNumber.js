function maxNumber(arr) {
    
    let topNumbers = [];

    for ( let i = 0; i < arr.length; i++) {

        let element = arr[i];
        let isTop = true;
       
        for ( let j = i + 1; j < arr.length; j++) {
            let rightElement = arr[j];

            if(rightElement >= element) {
                isTop= false;
                break;
            }
        }

        if(isTop) {
            topNumbers.push(element)
        }


        }

        console.log(topNumbers.join(" "));
    }


maxNumber([1, 4, 3, 2])