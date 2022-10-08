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
import CreateAccountCheckEmail from './components/account/CreateAccountCheckEmail';
import CreateAccount from './components/account/CreateAccount';
import CreateAccountQuest1 from './components/account/CreateAccountQuest1';
import CreateAccountQuest2 from './components/account/CreateAccountQuest2';
import CreateAccountQuest3 from './components/account/CreateAccountQuest3';
import CreateAccountQuest4 from './components/account/CreateAccountQuest4';
import CreateAccountQuest5 from './components/account/CreateAccountQuest5';
import CreateAccountNewProfile from './components/account/CreateAccountNewPofile';
import CreateAccountNewProfileEducation from './components/account/CreateAccountNewPofileEducation';
import CreateAccountNewProfileExperience from './components/account/CreateAccountNewPofileExperience';
import CreateAccountNewProfileBio from './components/account/CreateAccountNewPofileBio';
import CreateAccountNewProfileSkills from './components/account/CreateAccountNewPofileSkills';
import CreateAccountSetPaymentRate from './components/account/CreateAccountSetPaymentRate';
import CreateAccountFinish from './components/account/CreateAccountFinish';
import Freelancers from './components/freelancer/Freelancers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='freelancer' element={<FreelancerProfile />} />
            <Route path='freelancers' element={<Freelancers />} />
            <Route path='ver-anuncios' element={<VerAnuncios />} />
            <Route path='*' element={<Error404 />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='criar-perfil' element={<CreateAccountNewProfile />} />
          <Route path='criar-conta' element={<CreateAccount />} />
          <Route path='verificar-email' element={<CreateAccountCheckEmail />} />
          <Route path='criar-conta-quest1' element={<CreateAccountQuest1 />} />
          <Route path='criar-conta-quest2' element={<CreateAccountQuest2 />} />
          <Route path='criar-conta-quest3' element={<CreateAccountQuest3 />} />
          <Route path='criar-conta-quest4' element={<CreateAccountQuest4 />} />
          <Route path='criar-conta-quest5' element={<CreateAccountQuest5 />} />
          <Route path='criar-conta-educacao' element={<CreateAccountNewProfileEducation />} />
          <Route path='criar-conta-experiencia' element={<CreateAccountNewProfileExperience />} />
          <Route path='criar-conta-bio' element={<CreateAccountNewProfileBio />} />
          <Route path='criar-conta-skills' element={<CreateAccountNewProfileSkills />} />
          <Route path='criar-conta-taxa' element={<CreateAccountSetPaymentRate />} />
          <Route path='criar-conta-finalizado' element={<CreateAccountFinish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;