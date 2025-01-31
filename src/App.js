import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Career from './components/Career';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App = () => {
    return (
        <Router>
            <div>
                <title>Qlucent - Elevate your Digital Security</title>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/career" component={Career} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
