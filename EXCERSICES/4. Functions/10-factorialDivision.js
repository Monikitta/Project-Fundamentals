function factorialDivision(num1, num2) {
    
    let result1 = checkFactorialNum1(num1);
    let result2 = checkFactorialNum2(num2);

    let totalResult = result1 / result2;

    console.log(totalResult.toFixed(2));


    function checkFactorialNum1(n) {
        let factorial = 1;

        for ( let digit = n; digit > 0; digit--) {
            factorial *= digit;
        }
        return factorial;
    }

    function checkFactorialNum2(n) {
        let factorial = 1;

        for ( let digit = n; digit > 0; digit--) {
            factorial *= digit;
        }

        return factorial;
    }
}

factorialDivision(6, 2 )