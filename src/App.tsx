import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Favorite from './pages/favorite/Favorite';
import BottomBar from './components/bottom/BottomBar';
import DetailProduct from './pages/detalProduct/DetalProduct';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
        </Routes>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
