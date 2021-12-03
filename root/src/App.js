import './SASS/styles.scss';
import Header from './components/Header/header';
import Stories from './components/Stories/stories_section';
import Suggestions from './components/Suggestions/suggestions';
import Feeds from './components/IG_Feeds/feed';
import Bottom_menu from './components/Mobile Bottom Menu/bottom_menu';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Messenger_root from './components/Messenger/root';
import { render } from 'react-dom';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={home} />
          <Route path="/messages" component={Messenger_root} />
        </div>
      </Switch>
    </Router>
  );
}


function home() {
  return (
    <>
      <section className="header-section">
        <Header />
      </section>

      <section className="main-content">
        <div className="main-content__wrapper">
          <div className="left">
            <Stories />
            <Feeds />
          </div>

          <div className="right">
            <Suggestions />
          </div>
        </div>

        <section className="bottomMenu-section">
          <Bottom_menu />
        </section>
      </section>
    </>
  )
}

export default App;
