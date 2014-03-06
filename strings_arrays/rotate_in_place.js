var assert = require('assert')
    rotate_matrix = function(matrix){
        var matrix_length = matrix.length;
        var layer = matrix_length / 2;

        for( var layer = 0; layer < matrix_length / 2; ++layer ) {
            var first = layer;
            var last = matrix_length - 1 - layer;

            for(var index = first; index < last; ++index ) {

                var top = matrix[first][index];
                var offset = index - first;

                // left -> top
                matrix[first][index] = matrix[last - offset][first];

                // bottom -> left
                matrix[last - offset][first] = matrix[last][last - offset];

                // right -> bottom
                matrix[last][last - offset] = matrix[index][last];

                // top -> right
                matrix[index][last] = top;

            }
        }

        return matrix;
    };

describe('rotate in place', function(){
    it('should rotate a 3x3 matrix in place by 90 degrees', function(){
        var matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ];
        var expected_matrix = [
            [7,4,1],
            [8,5,2],
            [9,6,3]
        ];

        var actual_matrix = rotate_matrix(matrix);

        for(row = 0; row < expected_matrix.length; row++) {
            for(col = 0; col < expected_matrix.length; col++) {
                var actual = actual_matrix[row][col],
                    expected = expected_matrix[row][col];
                assert.equal(actual, expected, 'should rotate the matrix 90 degrees: [' + row + '][' + col + ']: ' + expected + ' != ' + actual);
            }
        }
    });

    it('should rotate a 4x4 matrix in place by 90 degrees', function(){
        var matrix = [
            [ 1, 2, 3, 4],
            [ 5, 6, 7, 8],
            [ 9,10,11,12],
            [13,14,15,16]
        ];
        var expected_matrix = [
            [ 13,  9, 5, 1],
            [ 14, 10, 6, 2],
            [ 15, 11, 7, 3],
            [ 16, 12, 8, 4]
        ];

        var actual_matrix = rotate_matrix(matrix);

        for(row = 0; row < expected_matrix.length; row++) {
            for(col = 0; col < expected_matrix.length; col++) {
                var actual = actual_matrix[row][col],
                    expected = expected_matrix[row][col];
                assert.equal(actual, expected, 'should rotate the matrix 90 degrees: [' + row + '][' + col + ']: ' + expected + ' != ' + actual);
            }
        }
    });
})

