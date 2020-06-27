import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
// import AboutUs from './pages/AboutUs';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          {/* <Route path="/about_us" component={AboutUs} /> */}
          <Route path="/contact_us" component={ContactUs} />
          <Route component= {Home} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;