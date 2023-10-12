function loadingBar(n) {
    
    let percentage = '%'
    let dots = '.'


    let number = n / 10;

    if(n !== 100) {
        console.log(`${n}% [${percentage.repeat(number)}${dots.repeat(10 - number)}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
    }
   
}

loadingBar(100)