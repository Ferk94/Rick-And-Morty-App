import { Route } from 'react-router-dom';
import LandingPage from './components/landingPage/landingPage';
import Home from './components/home/home';
import NavBar from './components/navBar/navBar';
import CharacterDetail from './components/characterDetail/characterDetail';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage}/>
      <Route path='/home' component={NavBar}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/home/detail/:id' component={CharacterDetail}/>
    </div>
  );
}

export default App;
