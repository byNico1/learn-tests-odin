import caesarCipher from "./caesarCipher";

test("Cipher function exists", () => {
  expect(caesarCipher).toBeDefined();
});

test("encrypt function works", () => {
  expect(caesarCipher.encrypt("Beware the Ides of March", 7)).toBe(
    "Ildhyl aol Pklz vm Thyjo"
  );
});

test("encrypt function works with punctuation", () => {
  expect(caesarCipher.encrypt("Beware the Ides of March.", 7)).toBe(
    "Ildhyl aol Pklz vm Thyjo."
  );
});
