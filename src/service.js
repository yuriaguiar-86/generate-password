const DecToHex = (number) => {
    let i = 0;
    let base = 16;
    let value = '';
    let digit = new Array();
    
    while(number !== 0) {
        i++;
        digit[i] = number % base;
        number = Math.floor(number / base);
    }

    while(i >= 1) {
        switch (digit[i]) {
            case 10: { value += "A"; break }
            case 11: { value += "B"; break }
            case 12: { value += "C"; break }
            case 13: { value += "D"; break }
            case 14: { value += "E"; break }
            case 15: { value += "F"; break }
            default: { value += digit[i]; break }
        }
        i--;
    }
    return value;
}

export default DecToHex;