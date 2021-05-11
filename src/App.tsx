import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <Router>
      <main className="min-h-screen p-8">
        <Header />
        <div className="p-6">
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
            <Route exact path="/register" component={Register}></Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
};

export default App;
