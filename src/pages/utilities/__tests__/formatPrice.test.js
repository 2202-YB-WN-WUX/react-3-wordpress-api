import formatPrice from "../formatPrice";

describe('Round a Woocommerce price without cents', () => {
    it('Convert to an integer, divide by 100, return a string', () => {
        expect(formatPrice("1500")).toEqual("15.00")
    })
})