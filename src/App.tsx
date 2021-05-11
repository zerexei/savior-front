import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <main className="min-h-screen p-12">
          <header className="mb-6">
            <nav className="flex items-center gap-2 text-purple-700 underline">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </header>
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
            </Switch>
          </div>
        </main>
    </Router>
  );
};

export default App;
