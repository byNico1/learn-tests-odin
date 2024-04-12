import analyzeArray from "./analyzeArray";

test("analyzeArray func is defined", () => {
  expect(analyzeArray).toBeDefined();
});

test("it should find the average", () => {
  const testCase = [
    [1, 8, 3, 4, 2, 6],
    [2, 5, 8, 9, 6, 7],
  ];
  testCase.forEach((arr) => {
    expect(analyzeArray(arr)).toHaveProperty("average");
  });

  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average", 4);
  expect(analyzeArray([2, 5, 8, 9, 6, 7])).toHaveProperty("average", 6);
});

test("it should find the min", () => {
  const testCase = [
    [1, 8, 3, 4, 2, 6],
    [5, 8, 9, 6, 7, 2],
    [-11, 99, 6, 28, -15, 10],
  ];
  testCase.forEach((arr) => {
    expect(analyzeArray(arr)).toHaveProperty("min");
  });

  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("min", 1);
  expect(analyzeArray([2, 5, 8, 9, 6, 7])).toHaveProperty("min", 2);
  expect(analyzeArray([-11, 99, 6, 28, -15, 10])).toHaveProperty("min", -15);
});

test("it should find the max", () => {
  const testCase = [
    [1, 8, 3, 4, 2, 6],
    [5, 8, 9, 6, 7, 2],
    [-11, 99, 6, 28, -15, 10],
  ];
  testCase.forEach((arr) => {
    expect(analyzeArray(arr)).toHaveProperty("max");
  });

  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("max", 8);
  expect(analyzeArray([2, 5, 8, 9, 6, 7])).toHaveProperty("max", 9);
  expect(analyzeArray([-11, 99, 6, 28, -15, 10])).toHaveProperty("max", 99);
});

test("it should find the array length", () => {
  const testCase = [
    [1, 8, 3, 4, 2, 6],
    [5, 8, 9, 6, 7, 2, 88],
    [-11, 99, 6, 28, -15, 10],
  ];
  testCase.forEach((arr) => {
    expect(analyzeArray(arr)).toHaveProperty("length");
  });

  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("length", 6);
  expect(analyzeArray([5, 8, 9, 6, 7, 2, 88])).toHaveProperty("length", 7);
  expect(analyzeArray([-11, 99, 6, 28, -15, 10])).toHaveProperty("length", 6);
});
