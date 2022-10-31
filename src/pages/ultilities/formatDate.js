const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-NZ', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })
    return formattedDate
}

export default formatDate