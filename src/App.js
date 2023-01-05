import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetail';
import NotFound from './NotFound';
// root
function App() {
    // Surround entire application with Router component, then we can use Router in the entire application
    // Switch: make sure only one route shows at any one time
    // notice that Navbar will always show, because it's out of the Switch
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    {/* <Home /> */}
                    <Switch>
                        {/* exact: if we don't have exact, /create will first match "/" */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/blogs/:id">  {/* :id -- variable */}
                            <BlogDetails />
                        </Route>
                        <Route path="*">  {/* catch up any other route */}
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;