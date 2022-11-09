import Navbar from '../Navbar'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"

describe('Navbar', () => {
    it('renders the links in order from the logo (home), home, artists, shop, contact', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        // check the rendered navbar for the links
        const links = document.querySelectorAll("a");
        // check our a tags from the array
        // logo
        expect(links[0].getAttribute('href')).toBe("/")
        // home 
        expect(links[1].getAttribute('href')).toBe("/")
        // artists
        expect(links[2].getAttribute('href')).toBe("/artists")
        // shop
        expect(links[3].getAttribute('href')).toBe("/shop")
        // contact
        expect(links[4].getAttribute('href')).toBe("/contact")
    })
})