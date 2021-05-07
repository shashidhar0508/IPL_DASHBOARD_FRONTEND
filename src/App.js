import "./App.css";
import { TeamPage } from "./pages/TeamPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MatchPage } from "./pages/MatchPage";
import Demo from "./pages/Demo";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/teams123">
            {/* <MatchPage /> */}
            <Demo />
          </Route>
          <Route path="/teams/:teamName/matches/:year">
            <MatchPage />
          </Route>

          <Route path="/teams/:teamName">
            <TeamPage />
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
