// Entry point de todas las rutas de mi aplicacion
// BrowserRouter -> contexto (estado global) History es un props de browserRouter
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Search from '../components/search/Search';

const Routes = () => {
    const [ search, setSearch ] = useState("");

    return ( 
        <>
            <Router>
                <Search 
                    setSearch={setSearch}
                />
                <Switch>
                    <Route exact path="/" render={Home} />
                    <Route exact path="/products">
                        <Products 
                            search = {search}
                        /> 
                    </Route>
                    <Route path="/products/:id" component={Product} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    );
}
 
export default Routes;