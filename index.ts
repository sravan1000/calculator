import { GetDelimitor } from "./helpers/getDelimiter";

export const add = (input?: string): number => {
  if (!input) {
    return 0;
  }
  const delimitor = GetDelimitor(input);
  const numbersString = input.replace(/\/\/(.*)\n/, ""); // replace `//[delimit]\n` with ""
  const delimiterRegex = new RegExp(["[", delimitor, "\\n", "]"].join(""));
  const total = numbersString
    .split(delimiterRegex)
    .reduce((p, c) => p + Number(c), 0);
  return total;
};
