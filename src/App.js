import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Post_Header from './components/Post_Header';
import Article from './components/posts/Article';
import Education from './components/posts/Education';
import Meetup_Event from './components/posts/Meetup_Event';
import Job from './components/posts/Job';
import SidePanel from './components/SidePanel';
import CreateAccountModal from './components/CreateAccountModal';
import triangle from './assets/triangle.svg'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Post_Header />
      <hr className="mx-auto mt-0" style={{ maxWidth: '1040px' }} />

      <div className="mx-auto d-flex gap-5 justify-content-center" style={{ maxWidth: '1040px' }}>

        <div className="posts-center position-relative ">
          <div class="d-flex d-lg-none w-100 position-absolute top-4 align-items-center justify-content-between custom-main-button">
            <div class="text-main-posts">Posts(368)</div>
            <button class="btn btn-filter d-flex align-items-center gap-2">Filter : All
              <img src={triangle} alt="triangle" width="20" height="20" />
            </button>
          </div>
          <main className="d-flex flex-column gap-4 ">
            <Article />
            <Education />
            <Meetup_Event />
            <Job />
          </main>
        </div>

        <div className="container d-none d-lg-flex flex-column mt-4">
          <SidePanel />
        </div>

      </div>
      <CreateAccountModal />
    </div>
  );
}

export default App;

