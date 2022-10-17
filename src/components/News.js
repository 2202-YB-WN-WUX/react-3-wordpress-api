import { useAxios } from "use-axios-client"

const AllNews = () => {
    const endpoint = `http://localhost/wordpress-react/wp-json/wp/v2/posts?_embed`
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
        return (
            <div className="item" key={index}>
                <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} />
                <h3>{post.title.rendered}</h3>
                <div className="content">
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>
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
            <div id="item-container">
                <AllNews />
            </div>
        </div>
    )
}

export default News