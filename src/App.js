import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import SearchPage from './Components/SearchPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

