import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RouteViews from './pages/routes';

import './css/App.scss';

function App() {
  return (
    <div className="app">
      <div className='container-fluid'>
        <RouteViews />
      </div>
    </div>
  );
}

export default App;
