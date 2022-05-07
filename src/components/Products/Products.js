
import useInventory from '../hooks/useInventory';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useInventory();
    const sliceProducts = products.slice(0, 6);
    return (
        <div className='container'>
            <div className='text-center'>
                <h2>Our Inventories</h2>
                <div className="row row-cols-1 row-cols-md-3 g-5">

                    {
                        sliceProducts.map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Products;