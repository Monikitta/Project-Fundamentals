function charactersInRange(char1, char2) {
    
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let minCode = Math.min(code1, code2);
    let maxCode = Math.max(code1, code2);

    let symbols = '';

    for( let curChar = minCode + 1; curChar < maxCode; curChar++) {
        
        let curSymbol = String.fromCharCode(curChar)
        symbols += `${curSymbol} `
    }

    console.log(symbols);


}

charactersInRange('C',

'#')