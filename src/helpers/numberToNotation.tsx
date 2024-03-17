export const NumberToNotation = (number: number) => {
    const abbreviations: any = {
        T: 1000000000000,
        B: 1000000000,
        M: 1000000,
        k: 1000,
    }
    const sortedKeys: any = Object.keys(abbreviations)?.sort((a, b) => {
        return abbreviations[b] - abbreviations[a]
    })

    for (let key of sortedKeys) {
        if (number >= abbreviations[key]) {
            const roundedNumber = Math.round((number / abbreviations[key]) * 10) / 10
            return `${roundedNumber}${key}`
        }
    }

    return number?.toString()
}
