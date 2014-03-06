var assert = require('assert'),
    compress_string = function(text){
        var arr = text.split('');
            letters = [],
            compressed = [],
            last = arr[0],
            unique_letters = 1,
            count = 1;

        for(var index = 1; index < arr.length; index++) {
            if( last == arr[index]) {
                count++;
            }
            else {
                var c = last + "" + count;
                letters.push( c );
                count = 1;
                last = arr[index];
                unique_letters += 1;
            }
        }

        letters.push( last + "" + count );
        unique_letters += 1;

        if(unique_letters * 2 > arr.length) {
            return text;
        }

        for(var index in letters) {
            compressed.push(letters[index]);
        }

        return compressed.join('');
    };

describe('string compression', function(){
    it('should compress the passed string', function(){
        var text = 'aaaabbbbccccdddd';
        assert.equal(compress_string(text), 'a4b4c4d4', 'should compress the string');

        var text = 'aaaabbbbccccddddaaaa';
        assert.equal(compress_string(text), 'a4b4c4d4a4', 'should compress the string');
    }),

    it('should return the original string if the compressed string is bigger than original', function(){
        var text = 'stop';
        assert.equal(compress_string(text), 'stop', 'should return the original string when original is smaller');

        var text = 'aabbccdd';
        assert.equal(compress_string(text), 'aabbccdd', 'should return the original string when both sizes are the same');
    })
})