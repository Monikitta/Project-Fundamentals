function arrayRotation(array, n) {
    
    for ( let rotation = 1; rotation <= n; rotation++) {

        let firstElement = array.shift();  // shift() method gets the first element of array
        array.push(firstElement)   // push() method place the element in the last position of the array 

    }

    console.log(array.join(" "));
}

arrayRotation([2, 4, 15, 31], 5 )