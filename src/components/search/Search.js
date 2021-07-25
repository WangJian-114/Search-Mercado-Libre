import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './search.scss';
import Logo from "../../img/meli.png";


const Search = ({ setSearch }) => {
    
    let history = useHistory();

    const [ value, setValue ] = useState('');

    const search = () => {
        setSearch(value);
        history.push('/products');
    }

    return ( 
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="logo">
                        <img 
                            src={Logo} 
                            alt="Logo mercado libre"    
                        />
                    </div>

                    <div className="search">
                        <input 
                            type="text" 
                            name="search"  
                            placeholder="Buscar..." 
                            onChange={ (e) => setValue(e.target.value) }
                        />
                        <button
                            className="btn-search"
                            onClick={ search }
                        >
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
            
        </>
    );
}
 
export default Search;