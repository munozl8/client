
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Comment from './components/Comment';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/comments" exact component={Comment}/>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
