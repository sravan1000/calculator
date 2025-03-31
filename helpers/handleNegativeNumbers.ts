export const HandleNegativeNumbers = (input: string) => {
    const regex = new RegExp([
        "-\\d" // negative digits
    ].join(""), "g")
    const negatives = input.match(regex) || [];
    if (negatives?.length) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
}