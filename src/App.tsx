import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import SharedLayout from './components/shared/SharedLayout';
import Error404 from './components/erros/Error404';
import Login from './components/login/Login';
import FreelancerProfile from './components/freelancer/FreelancerProfile';
import VerAnuncios from './components/anuncios/VerAnuncios';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='freelancer' element={<FreelancerProfile />} />
            <Route path='ver-anuncios' element={<VerAnuncios />} />
            <Route path='*' element={<Error404 />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;