export const add = (numbers ?: string): number => {
    const delimiter = ","
    if(!numbers){
        return 0
    }
    const total = numbers.split(delimiter).reduce((p, c) => p + Number(c), 0)
    return total
}