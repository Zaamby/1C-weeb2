function textContainsWords(words, text) {
    var containsAllWords = true;
    for (var i = 0; i < words.length; i ++) {
        var result = text.indexOF(words[i]);
        if (result === -1) {
            containsAllWords = false;
            break;
        }
    }
}