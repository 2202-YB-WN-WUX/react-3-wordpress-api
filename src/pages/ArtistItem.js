import { useAxios } from "use-axios-client";
import { Link, useParams, useNavigate } from "react-router-dom"
import { EggFried, ArrowLeft } from "react-bootstrap-icons"

// import our env
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const RenderedArtist = () => {
    // require the navigate function
    const navigate = useNavigate();
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

    console.log(artist)

    const Genres = () => {
        //grab the endpoint for all the taxonomies associated with this artist
        const taxonomyEndpoint = artist._links["wp:term"][0].href;

        //grab the taxonomies associated with this artist
        const { data: taxonomies, error, loading } = useAxios({
            url: taxonomyEndpoint
        })
        if (loading) return "Loading...";
        if (!taxonomies) return "No data...";
        if (taxonomies.length === 0) return "No results found!";
        if (error) return "Error!";

        console.log(taxonomies);

        const renderedTaxonomies = taxonomies.map((genre, index) => {
            return (
                <span className="genre-pill" key={index}>
                    {genre.name}
                </span>
            )
        })
        return renderedTaxonomies

    }

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
                <div id="taxonomies">
                    <Genres />
                </div>
                <RenderNickname />
            </div>
            <RenderDiet />
            <div className="content" dangerouslySetInnerHTML={{ __html: artist.content.rendered }} />
            <button id="back-button" onClick={() => {
                navigate(-1)
            }} ><ArrowLeft /> Go Back</button>
        </div>
    )
}

const ArtistItem = () => {
    return (
        <RenderedArtist />
    )
}

export default ArtistItem