const options = {
  arrowParens: "avoid", // Don’t wrap a sole arrow-fn parameter in parentheses:
  //    x => x * 2   (instead of `(x) => x * 2`)

  singleQuote: true, // Use single quotes (`'like this'`) instead of double quotes

  bracketSpacing: true, // Print spaces between brackets in object literals:
  //    { foo: bar }  (instead of `{foo: bar}`)

  endOfLine: "lf", // Enforce Unix-style line breaks (`\n`) on all platforms

  semi: true, // Omit semicolons at the ends of statements:
  //    const x = 5    (instead of `const x = 5;`)

  tabWidth: 2, // Indent with 2 spaces per level (instead of the default 2)

  trailingComma: "none", // Don’t add a comma after the last item in arrays/objects/functions
};
module.exports = options;
