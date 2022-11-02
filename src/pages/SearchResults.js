import { useParams } from "react-router-dom"
import { useAxios } from "use-axios-client";
// envs
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const SearchResults = () => {
    const params = useParams();
    // console.log(params)

    const endpoint = `${baseUrl}search/?subtype[]=post&subtype[]=artists&subtype[]=product&search=${params.searchString}`

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
            <div className="item search-result" key={index}>
                {result.title}
            </div>
        )
    })

    return (
        <div id="results-page">
            <h1>Results</h1>
            <p>Searched for "{params.searchString}"</p>
            <p className="mb-5">Found {results.length} results.</p>
            <div className="item-container">
                {allResults}
            </div>
        </div>
    )
}

export default SearchResults