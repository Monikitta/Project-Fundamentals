function commonElements(arr1, arr2) {
    

    for( let i=0; i < arr1.length; i++) {

        let string = arr1[i];

        for ( let el of arr2) {

            if(string === el) {
                console.log(string);
            }
        }
        // for( let j = 0; j < arr2.length; j++) {

        //     if( string === arr2[j]) {
        //         console.log(string);
        //     }
        // }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l'])