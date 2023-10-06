function mergeArrays(arr1, arr2) {
    

    let mergedArray = [];

    for ( let i = 0; i < arr1.length; i++) {

        if ( i % 2 == 0) {
            mergedArray[i] =Number(arr1[i]) + Number(arr2[i]);
        } else {
            mergedArray[i] = arr1[i] + arr2[i];
        }
    }

    console.log(mergedArray.join(" - "));
}

mergeArrays(['13', '12312', '5', '77', '4'],

['22', '333', '5', '122', '44'])