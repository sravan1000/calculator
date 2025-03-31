export const add = (numbers ?: string): number => {
    const delimiterRegex = /[,\n]/
    if(!numbers){
        return 0
    }
    const total = numbers.split(delimiterRegex).reduce((p, c) => p + Number(c), 0)
    return total
}