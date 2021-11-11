function calculateWordsInString(string) {
    let wordCount = 0;
    let wordFound = false;

    if (typeof string == 'string') {
        for (const iterator of string) {
            if (iterator != ' ' && !wordFound) { wordFound = true; wordCount++; }
            else if (iterator == ' ')          { wordFound = false;             }
        }
    }

    let grammaticalCase;

    const wordCountMod10  = wordCount % 10;
    const wordCountMod100 = wordCount % 100;

    if (wordCountMod10  == 0                          ||
        wordCountMod10  >= 5  && wordCountMod10  <= 9 ||
        wordCountMod100 >= 11 && wordCountMod100 <= 19)  { grammaticalCase = 'слів';  }
    else if (wordCountMod10 == 1)                        { grammaticalCase = 'слово'; }
    else if (wordCountMod10 >= 2 && wordCountMod10 <= 4) { grammaticalCase = 'слова'; }

    console.log('"' + string + '"' + ' - ' + wordCount + ' ' + grammaticalCase);
}

calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");
