import React from 'react';
import ListProduct from './Pages/ListProduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pages500 from './Pages/ErrorPages';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={props => <ListProduct {...props} />} />
                    <Route path="/error" component={props => <Pages500 {...props} />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;


{/* <Route
 path="/" component={props => <HomePage {...props} />} /> */}