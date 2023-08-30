import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import PageError from './PageError';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/Create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>

            <Route path="/About">
            <About/>
          </Route>

          <Route path="*">
            <PageError/>
          </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
