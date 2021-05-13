import "./App.scss";
import { TeamPage } from "./pages/TeamPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MatchPage } from "./pages/MatchPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/teams123">{/* <MatchPage /> */}</Route>
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

// npm install react-router-dom
// It is used for routing from one page to another
// Our TeamPage is placed inside this Router and we gives Route to navigagte

// Added "Switch" so that it chooses only one url,
// orElse all the urls pointing to pages will be loaded
