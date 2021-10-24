import './SASS/styles.scss';
import Header from './components/Header/header';
import Stories from './components/Stories/stories_section';
import Suggestions from './components/Suggestions/suggestions';

function App() {
  return (
    <div className="App">
      <section className="header-section">
        <Header />
      </section>

      <section className="main-content">
        <div className="main-content__wrapper">
          <div className="left">
            <Stories />
            aaaaaaaaaa
          </div>

          <div className="right">
            <Suggestions />
          </div>
          
        </div>
       
      </section>
    </div>
  );
}

export default App;
