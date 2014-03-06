var assert = require('assert'),
    reverse_string = function(text) {
        var clonedText = text.split(''),
            start = 0, end = text.length;

        while(start < end) {
            var letter = clonedText[start];
            clonedText[start] = clonedText[end];
            clonedText[end] = letter;
            start++;
            end--;
        }
        return clonedText.join('');
}

describe('Reverse string', function(){
    it("should reverse the string in place", function(){
        var text = "hello";
        assert.equal(reverse_string(text), 'olleh');
    })
});