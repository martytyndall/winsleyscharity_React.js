import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Views/Home';
import Latest from './Views/Latest';
import Staff from './Views/Staff';
import Contact from './Views/Contact';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/latest">
          <Latest />
        </Route>
        <Route exact path="/staff">
          <Staff />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
