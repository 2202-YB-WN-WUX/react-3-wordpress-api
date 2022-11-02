const getExcerpt = (embedData) => {
    if (embedData.excerpt) {
        return (
            <div className="result-excerpt" dangerouslySetInnerHTML={{ __html: embedData.excerpt.rendered }} />
        )
    }
}

export default getExcerpt