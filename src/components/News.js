import { useAxios } from "use-axios-client"
import { Link } from "react-router-dom"
import formatDate from "../pages/ultilities/formatDate";

// grab our env
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const AllNews = () => {
    const endpoint = `${baseUrl}posts?_embed`
    const { data: newsPosts, error, loading } = useAxios({
        url: endpoint
    })

    // check if the news posts have been returned
    if (loading) return (
        <p>Loading...</p>
    )
    if (!newsPosts) return "No posts found"
    if (error) return "Error"
    console.log(newsPosts);

    const showNewsPosts = newsPosts.map((post, index) => {

        // check if the featured image exists, if not then use a placeholder
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
            <div className="item" key={index}>
                <Link to={`/news/${post.id}`}>
                    <GetImageOrPlaceHolder />
                    <h3>{post.title.rendered}</h3>
                    <p><b>{formatDate(post.date)}</b></p>
                    <div className="content">
                        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </div>
                    <button id="read-more">Read more</button>
                </Link>
            </div>
        )
    })
    return showNewsPosts
}

// Activity:

// Create a footer
// Create a favicon


const News = () => {
    return (
        <div id="news">
            <h2>Latest News</h2>
            <div className="item-container">
                <AllNews />
            </div>
        </div>
    )
}

export default News