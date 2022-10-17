import News from './../components/News'
import Hero from './../components/Hero'

const Home = () => {
    return (
        <>
            <Hero />
            <div id="home">
                <div id="message">
                    <h2>Welcome!</h2>
                    <p>Homepage</p>
                </div>
                <News />
            </div>
        </>
    )
}

export default Home