import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Post_Header from './components/Post_Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Post_Header />
      <hr class="mx-auto mt-0" style={{ maxWidth: '1040px' }} />

    </div>
  );
}

export default App;

