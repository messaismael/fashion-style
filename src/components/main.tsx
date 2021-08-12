import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './home'
import Category from './category'
import { categoryList } from "../data";

import '../css/main.css'

const Main = () => {
    return (
        <div className="main">
            <Router>
                <Switch>
                    <Route exact path='/e-commerce-template/'>
                        <Home />
                    </Route>
                    {
                        categoryList.map((categ, i) => {
                            return (
                                <Route path={"/e-commerce-template/"+ categ } key={i} >
                                    <Category category={ categ } />
                                </Route>
                            )
                        })
                    }
                </Switch>
            </Router>
        </div>
    )
}

export default Main;