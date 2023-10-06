function maxSequenceOfElements(arr) {

    let longestSeq = [];

       for (let i = 0; i < arr.length; i++) {
       let currentNum=arr[i];
       let currentSequence=[currentNum];

       for (let j = i+1; j < arr.length; j++) {
          
        let nextNum=arr[j];

        if (currentNum == nextNum) {
         currentSequence.push(nextNum);
        } else {
         break;
        }

    }
        if (currentSequence.length > longestSeq.length) {
           longestSeq=currentSequence;
        }
    }
        console.log(longestSeq.join(' '));
    }

    maxSequenceOfElements([0, 1, 1, 5, 2, 2, 6, 3, 3] )