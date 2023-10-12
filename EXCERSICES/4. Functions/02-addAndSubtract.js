function addAndSubtract(num1, num2, num3) {

    let sumNumbers = sum(num1, num2);
    let subtractedNumbers = sumNumbers - num3;

    console.log(subtractedNumbers);

    function sum (num1, num2) {
    
        let result = num1 + num2;
        return result;
    }

}

addAndSubtract(42,
    58,
    100
    )