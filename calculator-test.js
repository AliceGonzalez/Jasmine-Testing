
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 50765,
    years: 5,
    rate: 4.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('939.50')
});


it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 1000,
    years: 3,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('30.33')
});

it("should calculate the monthly rate correctly", function() {
  let values = {
    amount: 69386,
    years: 12,
    rate: 7.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('732.18')
});

it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 20000,
    years: 8,
    rate: 3.7
  };
  expect(calculateMonthlyPayment(values)).toEqual('241.00')
});
