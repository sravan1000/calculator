import { GetDelimitor } from "./helpers/getDelimiter";
import { HandleNegativeNumbers } from "./helpers/handleNegativeNumbers";

export const add = (input?: string): number => {
  if (!input) {
    return 0;
  }
  const numbersString = input.replace(/\/\/(.*)\n/, ""); // replace `//[delimit]\n` with ""
  HandleNegativeNumbers(numbersString)
  const delimitor = GetDelimitor(input);
  const delimiterRegex = new RegExp(["[", delimitor, "\\n", "]"].join(""));
  const total = numbersString
    .split(delimiterRegex)
    .reduce((p, c) => p + Number(c), 0);
  return total;
};
