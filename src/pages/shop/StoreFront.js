import { useAxios } from "use-axios-client"

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
}

const StoreFront = () => {
    return (
        <>
            <h1>StoreFront</h1>
            <AllProducts />
        </>
    )
}

export default StoreFront