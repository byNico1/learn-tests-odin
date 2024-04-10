import calculator from "./calculator";

test("check if calculator object exists", () => {
  expect(calculator).toBeDefined();
});

test("add function should be defined", () => {
  expect(calculator.add).toBeDefined();
});

test("add function should work", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(5, 45)).toBe(50);
});

test("subtract function should be defined", () => {
  expect(calculator.subtract).toBeDefined();
});

test("subtract function should work", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract(5, 45)).toBe(-40);
});

test("divide function should be defined", () => {
  expect(calculator.divide).toBeDefined();
});

test("divide function should work", () => {
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.divide(45, 45)).toBe(1);
  expect(calculator.divide(45, 5)).toBe(9);
});

test("multiply function should be defined", () => {
  expect(calculator.multiply).toBeDefined();
});

test("multiply function should work", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
  expect(calculator.multiply(45, 45)).toBe(2025);
  expect(calculator.multiply(45, 5)).toBe(225);
});
