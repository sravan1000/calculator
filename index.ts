export const add = (numbers ?: string): number => {
    const delimiterRegex = /[,\n]/
    if(!numbers){
        return 0
    }
    const total = numbers.split(delimiterRegex).reduce((p, c) => p + Number(c), 0)
    return total
}

export const getDelimitor = (input ?: string): string => {
    if(!input){
        return ""
    }
    const regex = new RegExp(
        [
            "^",
            "//", //  this is for //
            "(", // start of condition
            ".*", // any
            ")" , // end of condition
            "\\n", // for \n
            "$" // for end of regex
        ].join("")
    )
    const matches = (input || '').match(regex);
    const delimitors = matches ? matches[1] : "" // this contains `[` and `]`
    if(delimitors){
        const regex2 = new RegExp(
            [
                "\\[",
                "(.*?)", // any
                "\\]",
            ].join(""), "g"
        )
        const matches2 = [...delimitors.matchAll(regex2)].map(m => m[1]); 
        return matches2.join("");
    }
    return  delimitors
}