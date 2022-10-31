import { useAxios } from "use-axios-client"
import { Link } from "react-router-dom"
// import utilities
import formatPrice from "../utilities/formatPrice"

const baseStoreUrl = process.env.REACT_APP_WOO_BASEURL;

const AllProducts = () => {
    const endpoint = `${baseStoreUrl}/products`
    const { data: products, error, loading } = useAxios({
        url: endpoint
    })

    if (loading) return "Loading...";
    if (!products) return "No data...";
    if (products.length === 0) return "No results found!";
    if (error) return "Error!";

    console.log(products);

    const renderProducts = products.map((product, index) => {
        const GetImageOrPlaceHolder = () => {

            if (product.images.length > 0) {
                return (
                    <img src={product.images[0].src} alt={product.name} />
                )
            }
            else {
                return (
                    <img src="https://via.placeholder.com/500" alt="placeholder" />
                )
            }
        }
        return (
            <div className="item" key={index}>
                <Link to={`/product/${product.id}`}>
                    <GetImageOrPlaceHolder />
                    <h3>{product.name}</h3>
                    {product.prices.currency_prefix}
                    {formatPrice(product.prices.price)}
                </Link>
            </div>
        )
    })
    return renderProducts
}

const StoreFront = () => {
    return (
        <>
            <h1>StoreFront</h1>
            <div className="item-container">
                <AllProducts />
            </div>
        </>
    )
}

export default StoreFront