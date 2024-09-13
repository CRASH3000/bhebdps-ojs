describe("About Numbers (about_numbers.js)", function () {
  it("types", function () {
    let typeOfIntegers = typeof (6);
    let typeOfFloats = typeof (3.14159);
    // are ints and floats the same type?
    expect(typeOfIntegers === typeOfFloats).toBe(true);
    // what is the javascript numeric type?
    expect(typeOfIntegers).toBe("number");
    // what is a integer number equivalent to 1.0?
    expect(1.0).toBe(1); // Fill in with `1`
  });

  it("NaN", function () {
    let resultOfFailedOperations = 7 / 'apple';
    // what will satisfy the equals assertion?
    expect(true).toBe(isNaN(resultOfFailedOperations));
    // is NaN == NaN?
    expect(false).toBe(resultOfFailedOperations == NaN);
  });
});