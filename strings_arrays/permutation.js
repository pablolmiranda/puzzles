var assert = require('assert'),
    sortWord = function(word) {
        var lettersArray = word.split('');
        lettersArray.sort(function(a, b){ return a > b; });
        return lettersArray.join('');
    },
    permutation = function(word1, word2) {
        var firstSortedWord = sortWord(word1),
            secondSortedWord = sortWord(word2);
        return firstSortedWord === secondSortedWord;
    };

describe('word permutation', function(){
    it('should return true because stop is a permutation of post', function(){
        assert.ok(permutation('stop', 'post'), 'stop is a permutation of post');
    });

    it('should return false because stop is not a permutation of holiday', function(){
       assert.equal(permutation('stop', 'holiday'), false, 'stop is not a permutation of holiday');
    });
})