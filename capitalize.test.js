import capitalize from "./capitalize";

test("Capitalize function defined", () => {
  expect(capitalize).toBeDefined();
});
test("Capitalize function working", () => {
  expect(capitalize("uncapitalized")).toBe("Uncapitalized");
});
test("Capitalize function working with capitilez already string", () => {
  expect(capitalize("Uncapitalized")).toBe("Uncapitalized");
});
test("Capitalize function working with uppercase string", () => {
  expect(capitalize("UNCAPITALIZED")).toBe("UNCAPITALIZED");
});
