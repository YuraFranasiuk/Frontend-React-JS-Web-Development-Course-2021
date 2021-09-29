function calculateWordsInString(string) {
    let wordCounter = 0;

    let iteratorIsInsideWord = false;

    for (const iterator of string) {
        if (iterator !== ' ' && !iteratorIsInsideWord) {
            iteratorIsInsideWord = true;

            wordCounter++;
        } else if (iterator === ' ') {
            iteratorIsInsideWord = false;
        }
    }

    let grammaticalCaseOfWord;

    const wordCounterMod10 = wordCounter % 10;

    switch ((wordCounterMod10 >= 1 && wordCounterMod10 <= 4) ? wordCounterMod10 : wordCounter) {
        case 1:
            grammaticalCaseOfWord = 'слово';
            break;
        case 2:
        case 3:
        case 4:
            grammaticalCaseOfWord = 'слова';
            break;
        default:
            grammaticalCaseOfWord = 'слів';
            break;
    }

    console.log('"' + string + '"' + ' - ' + wordCounter + ' ' + grammaticalCaseOfWord);
}

calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");
