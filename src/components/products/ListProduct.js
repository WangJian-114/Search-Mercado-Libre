import Product from './Product';
import './products.scss';

const ListProduct = ({results}) => {
    return ( 
        <div className="flex-container">
            {
                results?.map( result => 
                    <Product 
                        key = {result.id}
                        result = {result}
                    />
                )
            }
        </div>
    );
}
 
export default ListProduct;