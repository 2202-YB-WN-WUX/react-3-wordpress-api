// Here's a simple test example

// Example 1

const addNumbers = (x, y) => {
    return x + y
}

// it is a description of what the function does
it('adds both numbers', () => {
    expect(addNumbers(1, 2)).toEqual(3)
})

// Create a test that checks a string has been converted into an integer.

// parseInt("12")

const convertStringToInt = (string) => {
    return parseInt(string)
}

it('converts a string into a number', () => {
    expect(convertStringToInt("15")).toEqual(15)
})