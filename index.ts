export const add = (numbers ?: string): number => {
    if(!numbers){
        return 0
    }
    return Number(numbers)
}