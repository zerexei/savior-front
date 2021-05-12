import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Posts from "./components/posts/Posts";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <Router>
      <main className="min-h-screen p-8">
        <Header />
        <div className="p-6">
          <Switch>
            <Route exact path="/" component={Welcome} />

            {/* AUTH */}
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>

            {/* PAGES */}
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/contact">
              <h2>Contact</h2>
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
};

export default App;
