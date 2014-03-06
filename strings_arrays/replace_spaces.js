var assert = require('assert'),
    simple_replace = function(text) {
        var arr = text.split(' ');
        return arr.join('%20');
    },
    in_place_replace = function(text){
        var arr = text.split(''),
            arrEnd = arr.length - 1,
            number_of_spaces = 0,
            new_size = arr.length;
        for( var pos = arrEnd; pos > 0; pos--) {
            if(arr[pos] == ' ') {
                number_of_spaces++;
            }
        }
        new_size += (number_of_spaces * 2);

        for( var pos = arrEnd; pos > 0; pos--) {
            if(arr[pos] == ' ') {
                arr[new_size - 1] = '0';
                arr[new_size - 2] = '2';
                arr[new_size - 3] = '%';
                new_size = new_size - 3;
            }
            else {
                arr[new_size - 1] = arr[pos];
                new_size = new_size - 1;
            }
        }
        return arr.join('');
    };

describe('replace spaces', function(){
    it('should replaces all space with %20', function(){
        var text = "today is ok";
        assert.equal(simple_replace(text), 'today%20is%20ok', 'should replace all spaces with %20');
    })

    it('should replaces all spaces with %20 using in place algorithm', function(){
        var text = "today is ok";
        assert.equal(in_place_replace(text), 'today%20is%20ok', 'should replace all spaces with %20');
    })
})