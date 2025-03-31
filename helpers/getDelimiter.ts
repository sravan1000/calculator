
// considering default delimit is `,`
const DEFAULT_DE_LIMIT = ','

/*
input: "//[delimiter]\n[numbers…]"
output: delimiter
*/
export const GetDelimitor = (input?: string): string => {
    if (!input) {
      return DEFAULT_DE_LIMIT;
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
      return DEFAULT_DE_LIMIT;
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
  