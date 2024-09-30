import Nav from './components/Nav';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Preview from './components/Preview';
import Prices from './components/Prices';
import Player from './components/Player';

export default function App() {
  return (
    <>
      <Player url="https://audio.jukehost.co.uk/8dxgmrmz9SZJOXHQtcnET3khvlaKVw1H"></Player>
      <Nav></Nav>
      <Main></Main>
      <Gallery></Gallery>
      <Preview></Preview>
      <Prices></Prices>
    </>
  );
}
