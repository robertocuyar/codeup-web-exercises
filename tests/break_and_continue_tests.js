describe("isMyNumberOdd", function() {
    it("should be defined", function () {
        expect(isMyNumberOdd).toBeDefined()
    });
    it('should return undefined statement and prompt when given an even number', function(){
        expect(isMyNumberOdd(2)).toBeUndefined();
    });
    it('should return undefined statement and prompt when given a number greater than 50', function() {
        expect(isMyNumberOdd(65)).toBeUndefined();
    });
});

describe("isMyNumberOddList", function() {
    it('should be defined', function () {
        expect(isMyNumberOddList).toBeDefined();
    });
    it('should return undefined statement and prompt when given an even number', function(){
        expect(isMyNumberOddList(2)).toBeUndefined();
    });
    it('should return undefined statement and prompt when given a number greater than 50', function() {
        expect(isMyNumberOddList(65)).toBeUndefined();
    });
    it('should return undefined and prompt when given a null', function(){
        expect(isMyNumberOddList(null)).toBeUndefined();
    });
})