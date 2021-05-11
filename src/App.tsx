import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <main className="min-h-screen p-8">
        <Header />
        <div className="p-6 bg-white shadow rounded">
          <Switch>
            <Route exact path="/">
              <h2>Home</h2>
            </Route>
            <Route exact path="/about">
              <h2>About</h2>
            </Route>
            <Route exact path="/contact">
              <h2>Contact</h2>
            </Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
};

export default App;
