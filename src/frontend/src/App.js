import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Header } from './components/Header';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header /> 
        <Switch>
            <Route path="/teams/:teamName/matches/:year">
                <MatchPage />
            </Route>
            <Route path="/teams/:teamName">
                <TeamPage />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
