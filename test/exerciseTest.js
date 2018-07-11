var assert = chai.assert;

describe('ReturnDiv', function() {
    it('should return div', function() {
        // Given
        document.getElementById('id');
        // When
        var result = returnDiv();
        // Then
        assert.equal(result, 'div-try');
    });
});

describe('SumElements', function() {
    it('should sum elmenents', function() {
        // Given
       lemons, oranges;
        // When
        var result = sumElements(3, 5);
        // Then
        assert.equal(result, 8 );
    });
});