import { useAxios } from "use-axios-client"
// grab our env
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const AllArtists = () => {
    const endpoint = `${baseUrl}artists?_embed`
    const { data: artists, error, loading } = useAxios({
        url: endpoint
    })

    // check if the news posts have been returned
    if (loading) return (
        <p>Loading...</p>
    )
    if (!artists) return "No posts found"
    if (error) return "Error"
    console.log(artists);

    const showArtists = artists.map((artist, index) => {

        const GetImageOrPlaceHolder = () => {
            if (artist._embedded) {
                return (
                    <img src={artist._embedded['wp:featuredmedia'][0].source_url} alt={artist.title.rendered} />
                )
            } else {
                return (
                    <img src="https://via.placeholder.com/500" alt="placeholder" />
                )
            }
        }

        return (
            <div className="item" key={index}>
                <GetImageOrPlaceHolder />
                <h3>{artist.title.rendered}</h3>
            </div>
        )
    })
    return showArtists
}

const Artists = () => {
    return (
        <div id="artists">
            <div className="item-container">
                <AllArtists />
            </div>
        </div>
    )
}

export default Artists