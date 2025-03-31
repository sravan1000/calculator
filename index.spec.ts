import { expect, test } from "bun:test";
import { add } from "./index";

test('[Add] function call with empty values', () => {
    expect(add()).toStrictEqual(0)
})


test('[Add] function call with a string number value', () => {
    expect(add("1")).toStrictEqual(1)
})

test('[Add] function call with empty string value', () => {
    expect(add("")).toStrictEqual(0)
})

test('[Add] function call with empty string value with spaces in it', () => {
    expect(add("  ")).toStrictEqual(0)
})
test('[Add] function call with a string with two values', () => {
    expect(add("1,5")).toStrictEqual(6)
})

test('[Add] function call with a string with two values', () => {
    expect(add("1,5,")).toStrictEqual(6)
})

test('[Add] function call with a string with three values', () => {
    expect(add("1,5,1")).toStrictEqual(7)
})