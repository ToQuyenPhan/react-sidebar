import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/reports' element={<Reports />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contact-us' element={<ContactUs />}/>
          <Route path='/support' element={<Support />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
