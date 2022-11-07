import formatDate from '../formatDate'

describe('Date showing the month, day and year', () => {
    it('Turns a Wordpress API date into a more readable date', () => {
        expect(formatDate("2022-10-17T22:09:50")).toEqual("17 October 2022")
    })
})