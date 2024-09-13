describe("About Control Structures (about_control_structures.js)", function(){
  it("if", function() {
    let isPositive = false;
    if (2 > 0) {
      isPositive = true;
    }

    // what is the value of isPositive?
    expect(true).toBe(isPositive); // isPositive should be true
  });

  it("for", function() {
    let counter = 10;
    for (let i = 1; i <= 3; i++) {
      counter = counter + i; // counter = 10 + 1 + 2 + 3
    }

    // what is the value of counter?
    expect(16).toBe(counter); // counter should be 16
  });

  it("for in", function() {
    // this syntax will be explained in about objects
    let person = {
      name: "Amory Blaine",
      age: 102
    };
    let result = "";
    // for in enumerates the property names of an object
    for (let property_name in person) {
        result = result + property_name; // result = "nameage"
    }

    // what is the value of result?
    expect("nameage").toBe(result); // result should be "nameage"
  });

  it("ternary operator", function() {
    let fruit = true ? "apple" : "orange";
    expect("apple").toBe(fruit, 'what is the value of fruit?');

    fruit = false ? "apple" : "orange";
    expect("orange").toBe(fruit, 'now what is the value of fruit?');
  });

  it("switch", function() {
    let result = 0;
    switch (2) {
      case 1:
        result = 1;
        break;
      case 1+1:
        result = 2; // This case matches
        break;
    }

    // what is the value of result?
    expect(2).toBe(result); // result should be 2
  });

  it("switch default case", function() {
    let result = "Pippin";
    switch ("m") {
      case "f":
        result = "Frodo";
        break;
      case "s":
        result = "Samwise";
        break;
      default:
        result = "Merry"; // This case matches
        break;
    }

    // what is the value of result?
    expect("Merry").toBe(result); // result should be "Merry"
  });

  it("null coalescing", function() {
    let result = null || "a value";

    // what is the value of result?
    expect("a value").toBe(result); // result should be "a value"
  });
});
