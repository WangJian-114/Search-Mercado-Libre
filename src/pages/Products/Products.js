import { useState, useEffect } from "react";
import axios from 'axios';
import ListProduct from '../../components/products/ListProduct';
import Swal from 'sweetalert2';

const Products = ({search}) => {

    const [ results, setResults ] = useState();
    
    const searchProducts = async () => {
        try {
            const res = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=12`);
            setResults(res.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(search === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingrese una busqueda',
            })
        }else{
            searchProducts();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search]);

    return ( 
        <>
            <h1 className="page_title">PRODUCTOS</h1>
            <ListProduct
                results={results}
            />
        </>  
    );
}
 
export default Products;