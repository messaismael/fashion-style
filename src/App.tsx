import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Category from './components/category';
import Home from './pages/home';
import ProductDetail from './pages/productDetail';
import Login from './pages/login';
import Register from './pages/register';

import { categoryList } from './data';

function App() {

	return (
		<div className="app">
			<div className='container-fluid'>
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
			</div>
		</div>
	);
}

export default App;
