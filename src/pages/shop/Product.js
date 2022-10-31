import { useAxios } from "use-axios-client";
import { Link, useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "react-bootstrap-icons"
import formatPrice from "../ultilities/formatPrice"

const baseStoreUrl = process.env.REACT_APP_WOO_BASEURL;

const Product = () => {

    const GetProduct = () => {
        // get the id
        const params = useParams();
        const id = params.id;
        // require the navigate function
        const navigate = useNavigate();
        // declare endpoint
        const endpoint = `${baseStoreUrl}/products/${id}`

        const { data: product, error, loading } = useAxios({
            url: endpoint
        })
        if (loading) return "Loading...";
        if (!product) return "No data...";
        if (product.length === 0) return "No results found!";
        if (error) return "Error!";
        console.log(product);
        return (
            <div id="product-item">
                <img src={product.images[0].src} alt={product.name} />
                <h1>{product.name}</h1>
                <h2>{product.prices.currency_symbol}{formatPrice(product.prices.price)}</h2>
                <div className="product-description" dangerouslySetInnerHTML={{ __html: product.short_description }} />
                <div className="product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
                <button id="back-button" onClick={() => {
                    navigate(-1)
                }} ><ArrowLeft /> Go Back</button>
            </div>
        )

    }


    return (
        <div><GetProduct /></div>
    )
}

export default Product