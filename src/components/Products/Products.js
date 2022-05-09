
import useInventory from '../hooks/useInventory';
import Product from '../Product/Product';
import Loading from '../Loading/Loading';


const Products = () => {
    const [products] = useInventory();
    const sliceProducts = products.slice(0, 6);
    return (
        <div className='container'>
            <div>
                <div className='text-center my-3'>
                    <h2 className='text-secondary fs-1 fw-bold'>Our Inventories</h2>
                </div>
                <div>
                    {products.length <= 0 && (<Loading />)}
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-5 mt-3 mb-5">

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