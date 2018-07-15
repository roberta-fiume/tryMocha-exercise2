var assert = chai.assert;
var expect = chai.expect;

describe("ReturnDiv", function() {
    it("should return div text", function() {
        // Given
        var divId = "div-try";
        var expectedText = "Hello";
        // When
        var result = returnDivText(divId);
        // Then
        assert.equal(result, expectedText);
    });
});

describe("SumElements", function() {
    it("should sum elmenents", function() {
        // Given
        var number1 = 5;
        var number2 = 9;
        // When
        var result = sumElements(number1, number2);
        // Then
        assert.equal(result, 14);
    });
});

describe("ReturnTextOfElementsWithClass", function() {
    it("should return innerHTML text of elements with wanted class", function() {
        // Given
        var className = "div-class";
        var expectedText = ["First Div", "Second Div"];
        // When
        var result = returnTextOfElementsWithClass(className);
        // Then
        expect(result).to.deep.equal(expectedText);
    })
})

