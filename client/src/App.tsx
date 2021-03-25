import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Players } from "./components/Players";
import { Scores } from "./components/Scores";
import { Teams } from "./components/Teams";

const App = () => {
  return (
    <Router>
      <div className="flex flex-1 flex-col h-screen font-mono">
        <div className="fixed top-0 w-full flex h-24 bg-gray-900 justify-items-center items-center  border-b-2 border-pink-700 text-gray-50 ">
          <nav className="flex flex-auto justify-evenly transition-colors items-center">
            <Link to="/">
              <span className="hover:text-gray-400">Scores</span>
            </Link>

            <Link to="/teams">
              <span className="hover:text-gray-400">Teams</span>
            </Link>
          </nav>
        </div>
        <div className="mt-24 overflow-auto flex-col flex-auto items-center justify-center bg-gray-200 sm:p-10">
          <Switch>
            <Route exact path="/" component={Scores} />
            <Route path="/scores" component={Scores} />
            <Route path="/teams" component={Teams} />
            <Route path="/players" component={Players} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
