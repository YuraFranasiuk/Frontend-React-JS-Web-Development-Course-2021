function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];

    let sumElemetsOfInitialArray = 0;

    for (const element of initialArray)
        if (typeof element == 'number')
            sumElemetsOfInitialArray += element;

    console.log(sumElemetsOfInitialArray)
}
    
calculateSumOfArray();
