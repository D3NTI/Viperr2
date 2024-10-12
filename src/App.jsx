import Nav from './components/Nav';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Preview from './components/Preview';
import Prices from './components/Prices';
import Player from './components/Player';
import Components from './components/Components';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './routes/MainPage.jsx';
import Account from './routes/Account.jsx';
import SignUp from './routes/SignUp.jsx';
import Login from './routes/Login.jsx';

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="account" element={<Account />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </HashRouter>

      {/* <Player url="https://audio.jukehost.co.uk/8dxgmrmz9SZJOXHQtcnET3khvlaKVw1H"></Player>
      <Nav></Nav>
      <Main></Main>
      <Gallery></Gallery>
      <Preview></Preview>
      <Prices></Prices>
      <Components></Components>
      <Reservation></Reservation>
      <Footer></Footer> */}
    </>
  );
}
