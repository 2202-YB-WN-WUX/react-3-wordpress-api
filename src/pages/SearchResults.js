import { useParams, Link } from "react-router-dom"
import { useAxios } from "use-axios-client";
// import utilities
import returnSubtype from "./utilities/returnSubtype";
import getExcerpt from "./utilities/getExcerpt";
// envs

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const SearchResults = () => {
    const params = useParams();
    // console.log(params)

    const endpoint = `${baseUrl}search/?subtype[]=post&subtype[]=artists&subtype[]=product&search=${params.searchString}&_embed`

    const { data: results, error, loading } = useAxios({
        url: endpoint
    })
    if (loading) return "Loading...";
    if (!results) return "No data...";
    if (results.length === 0) return "No results found!";
    if (error) return "Error!";
    console.log(results);

    const allResults = results.map((result, index) => {

        return (
            <Link to={`/${returnSubtype(result.subtype)}/${result.id}`} key={index}>
                <div className="search-result" >
                    <h3>{result.title}</h3>
                    <p className="subtype">{result.subtype}</p>
                    {getExcerpt(result._embedded.self[0])}
                </div>
            </Link>
        )
    })

    return (
        <div id="results-page">
            <h1>Results</h1>
            <p>Searched for "{params.searchString}"</p>
            <p className="mb-5">Found {results.length} results.</p>
            <div id="results-container">
                {allResults}
            </div>
        </div>
    )
}

export default SearchResults