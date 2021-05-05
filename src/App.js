import "./App.css";
import { TeamPage } from "./pages/TeamPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/teams/:teamName">
          <TeamPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;

// npm install react-router-dom
// It is used for routing from one page to another
// Our TeamPage is placed inside this Router and we gives Route to navigagte
