var assert = require('assert'),
    zero_matrix_tracker = function(matrix) {
        var zero_row = {},
            zero_column = {};

        for( var row = 0; row < matrix.length; row++) {
            for(var column = 0; column < matrix[row].length; column++) {
                if(matrix[row][column] == 0) {
                    zero_row[row] = true;
                    zero_column[column] = true;
                }
            }
        }

        for( var row = 0; row < matrix.length; row++) {
            for(var column = 0; column < matrix[row].length; column++) {
                if(zero_row[row] || zero_column[column]) {
                    matrix[row][column] = 0;
                }
            }
        }

        return matrix;
    };

describe('matrix zero tracker', function(){
    it('should not set row or column if no zero is found', function(){
        var matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ];
        var expected_matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ];

        var actual_matrix = zero_matrix_tracker(matrix);

        for(row = 0; row < expected_matrix.length; row++) {
            for(col = 0; col < expected_matrix.length; col++) {
                var actual = actual_matrix[row][col],
                    expected = expected_matrix[row][col];
                assert.equal(actual, expected, 'should rotate the matrix 90 degrees: [' + row + '][' + col + ']: ' + expected + ' != ' + actual);
            }
        }
    });

    it('should set row and column as zero if a zero if found', function(){
        var matrix = [
            [1,0,3],
            [4,5,6],
            [7,8,9]
        ];
        var expected_matrix = [
            [0,0,0],
            [4,0,6],
            [7,0,9]
        ];

        var actual_matrix = zero_matrix_tracker(matrix);

        for(row = 0; row < expected_matrix.length; row++) {
            for(col = 0; col < expected_matrix.length; col++) {
                var actual = actual_matrix[row][col],
                    expected = expected_matrix[row][col];

                assert.equal(actual, expected, 'should rotate the matrix 90 degrees: [' + row + '][' + col + ']: ' + expected + ' != ' + actual);
            }
        }
    });
})