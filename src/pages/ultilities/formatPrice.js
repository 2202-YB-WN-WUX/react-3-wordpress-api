const formatPrice = (price) => {
    const priceToInteger = (parseInt(price) / 100).toFixed(2);

    return priceToInteger
}

export default formatPrice