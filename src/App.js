import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './components/pages/home';
import Progress from './components/pages/Progress';
import Projects from './components/pages/Projects';
import Cards from './components/Cards';
function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
<Switch>
  <Route path='/' exact component={Home}>
  </Route>
  <Route path='/progress' component={Progress}></Route>
  <Route path='/projects' component={Cards}></Route>
</Switch>
    </Router>
          </>
  );
}

export default App;
