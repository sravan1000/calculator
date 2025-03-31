import { expect, test, describe , it} from "bun:test";
import {  HandleNegativeNumbers } from "./helpers/handleNegativeNumbers";
import { GetDelimitor } from "./helpers/getDelimiter";
import { add } from "./index";

describe('Add function', () => {

    test('call with empty values', () => {
        expect(add()).toStrictEqual(0)
    })

    test('call with a string number value', () => {
        expect(add("1")).toStrictEqual(1)
    })
    
    test('call with empty string value', () => {
        expect(add("")).toStrictEqual(0)
    })

    test('call with empty string value with spaces in it', () => {
        expect(add("  ")).toStrictEqual(0)
    })

    test('call with a string with two values', () => {
        expect(add("1,5")).toStrictEqual(6)
    })
   
    test('call with a string with two values', () => {
        expect(add("1,5,")).toStrictEqual(6)
    })

    test('call with a string with three values', () => {
        expect(add("1,5,1")).toStrictEqual(7)
    })

    test('call with a string with two values and new line in between', () => {
        expect(add("1\n5")).toStrictEqual(6)
    })
    
    test('call with a string with two values and new line and spaces in between', () => {
        expect(add(" 1 \n 5 ")).toStrictEqual(6)
    })
    
    test('call with a , and new line as delimitors', () => {
        expect(add(" 1 , \n 5 , 1 \n 2")).toStrictEqual(9)
    })

    test('call with delimit expression `//[,]\\n 1,2`', () => {
        expect(add("//[,]\n 1,2")).toStrictEqual(3)
    })

    test("call string with one negative number", () => {
        expect(() => add("-1")).toThrowError("negative numbers not allowed -1");
    })

    test("string with few negative number with different delimiter", () => {
        expect(() => add("-1*** -4***-10")).toThrowError("negative numbers not allowed -1,-4,-10");
    })
})


describe('Get Delimitor Function', () => {
    test('call with no props', () => {
        expect(GetDelimitor()).toStrictEqual(",")
    })

    test('call with //[delimiter]\n', () => {
        expect(GetDelimitor("//[delimiter]\n")).toStrictEqual("delimiter");
    })

    test('call with //[delimiter][delimiter2]\n', () => {
        expect(GetDelimitor("//[delimiter][delimiter2]\n")).toStrictEqual("delimiterdelimiter2");
    })
    test('call with delimit condition `//[,]\\n 1,2`', () => {
        expect(GetDelimitor("//[,]\n 1,2")).toStrictEqual(',')
    })

    test('handle any length of delimiters', () => {
        expect(GetDelimitor("//[***]\n 1***2")).toStrictEqual('***')
    })
})

describe('Handle Negative numbers In String', () => {
    test("string with one negative number", () => {
        expect(() => HandleNegativeNumbers("-1")).toThrowError("negative numbers not allowed -1");
    })

    test("string with few negative number", () => {
        expect(() => HandleNegativeNumbers("-1, -4")).toThrowError("negative numbers not allowed -1,-4");
    })

    test("string with few negative number with different delimiter", () => {
        expect(() => HandleNegativeNumbers("-1*** -4***-10")).toThrowError("negative numbers not allowed -1,-4,-10");
    })
})