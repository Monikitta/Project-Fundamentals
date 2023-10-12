function passwordValidator(pass) {
    
    let length = checkLength(pass);
    let lettersAndDigits = checkLettersDigits(pass);
    let digits = checkDigits(pass);

    if(length && lettersAndDigits && digits) {
        console.log("Password is valid");
    }
    

    function checkLength(pass) {
        if(pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false ;
        }
    }

    function checkLettersDigits(pass) {

        for ( let curChar of pass) {
        
            let code = curChar.charCodeAt();

            if ( 
                !((code >= 48 && code <= 57) || 
                (code >= 65 && code <= 90) || 
                (code >= 97 && code <= 122))
               ) {

                console.log("Password must consist only of letters and digits"); 
                return false;
            } 
        }

        return true;
    }

    function checkDigits(pass) {
        let digits = 0; 

        for ( let i = 0; i < pass.length; i++) {
            let curDigit = pass[i];
            let code = curDigit.charCodeAt();

            if ( code >= 48 && code <= 57 ) {
                digits++;
            } 
        }

        if(digits < 2) {
            console.log("Password must have at least 2 digits");
            return false;
        } else {
            return true;
        }
    }
}

passwordValidator('Pa$s$s')