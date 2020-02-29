var expect = require('chai').expect;
var [addTwoNumbers, addArrayNumbers] = require('../index');

describe('addTwoNumbers()', function () {
  it('should add two numbers @default', function () {
    
    // 1. ARRANGE
    var x = 5;
    var y = 1;
    var sum1 = x + y;

    // 2. ACT
    var sum2 = addTwoNumbers(x, y);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);

  });
});

describe('addArrayNumbers()', function () {
  it('should add the whole array of numbers @exploit', function () {
    
    // 1. ARRANGE
    var numbers = [967, 78, 0, 0, 0, 0, 8888];
    var sum1 = 967 + 78 + 0 + 0 + 0 + 0 + 8888;

    // 2. ACT
    var sum2 = addArrayNumbers(numbers);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);

  });
});

describe('addArrayNumbers()', function () {
  it('should add the whole array of numbers @default', function () {
    
    // 1. ARRANGE
    var numbers = [1, 2, 3, 4, 5];
    var sum1 = 1 + 2 + 3 + 4 + 5;

    // 2. ACT
    var sum2 = addArrayNumbers(numbers);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);

  });
});