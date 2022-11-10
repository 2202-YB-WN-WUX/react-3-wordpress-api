const returnSubtype = (subtype) => {
    if (subtype === "artists") {
        return "artist"
    } else if (subtype === "post") {
        return "news"
    } else {
        return subtype
    }
}

export default returnSubtype