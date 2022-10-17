import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Category from './components/category';
import Home from './pages/home';
import ProductDetail from './pages/productDetail';
import Login from './pages/login';
import Register from './pages/register';

import { categoryList } from './data';
import CartPage from './pages/Cart';

function App() {

	return (
		<div className="app">
			<div className='container-fluid'>
				<Router>
					<Routes>
						<Route path='/product/:id' element={<ProductDetail />} />
						{
							categoryList.map((categ, i) =>(
								<Route path={'/'+ categ } key={i} element={<Category category={ categ } />} />
							))
						}
						<Route path='/cart' element={<CartPage />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/'element={<Home />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
