import { useEffect, useState } from "react"

const useInventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://intense-taiga-61434.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts]
}
export default useInventory;