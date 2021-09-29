function printPowsOf2(number) {
    let value = '';
    let result = '';

    value += (typeof number == 'string') ? '"' + number + '"' : number;

    if (typeof number == 'number')
        for (let powOf2 = 2; powOf2 <= number; powOf2 <<= 1)
            result += ((powOf2 << 1) <= number) ? powOf2 + ', ' : powOf2;
    else 
        result = '"incorrect type"'

    console.log(value + ' - ' + result);
}
    
printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);
