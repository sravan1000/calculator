export const add = (numbers?: string): number => {
  const delimiterRegex = /[,\n]/;
  if (!numbers) {
    return 0;
  }
  const delimitor = getDelimitor(numbers)
  console.log('delimitor is', delimitor)
  const total = numbers
    .split(delimiterRegex)
    .reduce((p, c) => p + Number(c), 0);
  return total;
};

// condition to get delimitor "//[delimiter]\n[numbers…]"
export const getDelimitor = (input?: string): string => {
  if (!input) {
    return "";
  }
  const conditionRegex = new RegExp(
    [
      "^",
      "//", //  this is for //
      "(", // start of condition
      ".*", // any
      ")", // end of condition
      "\\n", // for \n
    ].join("")
  );
  const matches = (input || "").match(conditionRegex);
  if (!matches) {
    return "";
  }
  const delimitors = matches[1]; // this contains `[` and `]`
  const delimitorsRegex = new RegExp(
    [
      "\\[",
      "(.*?)", // any
      "\\]",
    ].join(""),
    "g"
  );
  const matchedDelimits = [...delimitors.matchAll(delimitorsRegex)].map(
    (m) => m[1]
  );
  return matchedDelimits.join("");
};
