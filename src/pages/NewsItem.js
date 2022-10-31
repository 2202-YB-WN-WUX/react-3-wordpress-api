import { useAxios } from "use-axios-client"
import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "react-bootstrap-icons"
// utilities
import formatDate from "../pages/ultilities/formatDate"

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const NewsItem = () => {

    // require the navigate function
    const navigate = useNavigate();
    // get the id
    const params = useParams();

    const endpoint = `${baseUrl}posts/${params.id}?_embed`

    const { data: post, error, loading } = useAxios({
        url: endpoint
    })
    if (loading) return "Loading...";
    if (!post) return "No data...";
    if (post.length === 0) return "No results found!";
    if (error) return "Error!";

    const GetImageOrPlaceHolder = () => {
        if (post._embedded['wp:featuredmedia']) {
            return (
                <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} />
            )
        } else {
            return (
                <img src="https://via.placeholder.com/500" alt="placeholder" />
            )
        }
    }
    return (
        <div id="news-item">
            <GetImageOrPlaceHolder />
            <h3>{post.title.rendered}</h3>
            <p><b>{formatDate(post.date)}</b></p>
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
            <button id="back-button" onClick={() => {
                navigate(-1)
            }} ><ArrowLeft /> Go Back</button>
        </div>
    )
}

export default NewsItem