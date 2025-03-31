import { expect, test } from "bun:test";
import { add } from "./index";

test('[Add] function call with empty values', () => {
    expect(add()).toStrictEqual(0)
})