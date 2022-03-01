import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './home'
import Category from '../components/category'
import { categoryList } from "../data";
import Login from "./login";
import Register from "./register";
import ProductDetail from "./productDetail";


const RouteViews = () => {
    return (
        <Router>
            <Switch>
                <Route path='/product/:id'>
                    <ProductDetail />
                </Route>
                {
                    categoryList.map((categ, i) =>(
                        <Route path={'/'+ categ } key={i} >
                            <Category category={ categ } />
                        </Route>
                    ))
                }
                <Route path='/login' >
                    <Login />
                </Route>
                <Route path='/register' >
                    <Register />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default RouteViews;