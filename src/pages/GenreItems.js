// imports
import { useAxios } from "use-axios-client";
import { Link, useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "react-bootstrap-icons"

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const RenderGenreName = () => {
    const params = useParams();
    //declare the endpoint for this specific genre
    const genreEndpoint = `${baseUrl}genre/${params.id}`
    // query the endpoint using Wordpress API
    const { data: genre, error, loading } = useAxios({
        url: genreEndpoint
    })
    if (loading) return "Loading...";
    if (!genre) return "No data...";
    if (genre.length === 0) return "No results found!";
    if (error) return "Error!";

    return (
        <h1 id="genre-name">{genre.name}</h1>
    )
}

const GenreArtists = () => {
    const params = useParams();

    //declare the endpoint for this specific genre
    const artistsEndpoint = `${baseUrl}artists?genre=${params.id}&_embed`
    // query the endpoint using Wordpress API
    const { data: artists, error, loading } = useAxios({
        url: artistsEndpoint
    })
    if (loading) return "Loading...";
    if (!artists) return "No data...";
    if (artists.length === 0) return "No results found!";
    if (error) return "Error!";

    console.log(artists);



    const renderedArtists = artists.map((artist, index) => {
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

            <div className="item" key={index}>
                <Link className="artist-link" to={`/artist/${artist.id}`} >
                    <GetImageOrPlaceHolder />
                    <h3>{artist.title.rendered}</h3>
                </Link>

            </div>
        )
    })
    return renderedArtists
}

const GenreItems = () => {
    // require the navigate function
    const navigate = useNavigate();
    return (
        <>
            <RenderGenreName />
            <div className="item-container">
                <GenreArtists />
            </div>
            <button id="back-button" onClick={() => {
                navigate(-1)
            }} ><ArrowLeft /> Go Back</button>
        </>
    )
}

export default GenreItems