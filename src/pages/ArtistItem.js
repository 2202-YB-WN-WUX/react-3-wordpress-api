import { useAxios } from "use-axios-client";
import { Link, useParams, useNavigate } from "react-router-dom"
import { EggFried } from "react-bootstrap-icons"

// import our env
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const RenderedArtist = () => {
    // get the id
    const params = useParams();
    const endpoint = `${baseUrl}artists/${params.id}?_embed`

    const { data: artist, error, loading } = useAxios({
        url: endpoint
    })
    if (loading) return "Loading...";
    if (!artist) return "No data...";
    if (artist.length === 0) return "No results found!";
    if (error) return "Error!";

    // console.log(artist)
    const RenderDiet = () => {
        if (artist.acf) {
            if (artist.acf.diet !== "null") {
                return (
                    <div id="diet-banner">
                        <h3><EggFried /> Diet: {artist.acf.diet}</h3>
                    </div>
                )
            }
        }


    }

    const RenderNickname = () => {
        if (artist.acf) {
            if (artist.acf.nickname) {
                return (
                    <h2 id="nickname">"{artist.acf.nickname}"</h2>
                )
            }
        }
    }
    const GetImageOrPlaceHolder = () => {
        if (artist._embedded) {
            if (artist._embedded['wp:featuredmedia']) {
                return (
                    <img src={artist._embedded['wp:featuredmedia'][0].source_url} alt={artist.title.rendered} />
                )
            }
            else {
                return (
                    <img src="https://via.placeholder.com/500" alt="placeholder" />
                )
            }
        }
    }
    return (
        <div id="artist-page">
            <GetImageOrPlaceHolder />
            <div id="banner">
                <h1>{artist.title.rendered}</h1>
                <RenderNickname />
            </div>
            <RenderDiet />
            <div className="content" dangerouslySetInnerHTML={{ __html: artist.content.rendered }} />
        </div>
    )
}

const ArtistItem = () => {
    return (
        <RenderedArtist />
    )
}

export default ArtistItem