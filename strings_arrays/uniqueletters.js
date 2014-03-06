var assert = require('assert'),
    indexStop = 0,
    hasUniqueLetters = function(word) {
    var letters = {};
    indexStop = 0;
    var lettersArray = word.split('');
    for(var index = 0; index < lettersArray.length; ++index) {
        var letter = lettersArray[index];
        if(letters[letter]) {
            indexStop = index;
            return false;
        }
        letters[letter] = true;
    }
    return true;
};

describe('unique letters', function(){
    it('stop should have unique letters', function(){
        var word = 'stop';
        assert.ok(hasUniqueLetters(word));
        assert.equal(indexStop, 0, 'should not find any repeated letters');
    })

    it('listening should not have unitque letters', function(){
        var word = 'listening';
        assert.equal(hasUniqueLetters(word), false, 'should not have unique letters');
        assert.equal(indexStop, 6, 'should stop at second i');
    })
});
