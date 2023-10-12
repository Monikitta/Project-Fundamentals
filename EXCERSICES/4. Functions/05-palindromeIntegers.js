    function palindromeIntegers(arr) {

        for( let num of arr) {
            let palindrome = checkPalindrome(num);
            console.log(palindrome);
        }

        function checkPalindrome(num) {
            let numAsString = String(num);
            let reversedNum = '';

            for( let i = numAsString.length - 1; i >= 0; i--) {
                let curSymbol = numAsString[i];
            reversedNum += curSymbol;
            }

            if(reversedNum == num) {
                return true;
            } else {
                return false;
            }
        }
        
    }

palindromeIntegers( [32,2,232,1010])