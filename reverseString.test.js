import reverseString from "./reverseString";

test("reverse string function should be defined", () => {
  expect(reverseString).toBeTruthy();
});

test("reverse string function should reverse given string", () => {
  const testCase = [
    { input: "Hello", expected: "olleH" },
    { input: "World", expected: "dlroW" },
  ];
  expect(reverseString("Hello")).toBe("olleH");
  expect(reverseString("World")).toBe("dlroW");
});

test("reverse string function should work with all capitalized letters", () => {
  const testCase = [
    { input: "HELLO", expected: "OLLEH" },
    { input: "WORLD", expected: "DLROW" },
  ];
  testCase.forEach(({ input, expected }) => {
    expect(reverseString(input)).toBe(expected);
  });
});
