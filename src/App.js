import React, { Component } from 'react';
import './Components/App.css';
import './Components/slidebar.css';
import {NavLink,Link, BrowserRouter as Router, Route,withRouter,Redirect } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <Router>
      
      <div style={{direction:"rtl"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <a className="navbar-brand" href="#">סנאפגרופ</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" onClick={this.go} id="navbarNav">
        <ul className="navbar-nav d-flex justify-content-center">
        <li className="nav-item active">
            <NavLink to="/login" className="nav-link">כניסה</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/home" className="nav-link">בית</NavLink>
          </li>
          <li className="nav-item">

          {!this.props.authinticated ?<NavLink to="/about" className="nav-link">עלינו</NavLink>:null}
          </li>
         
        </ul>
      </div>
    </nav>
    <Route exact path="/home" render={() => (
      !this.props.authinticated ? (
        <Redirect to="/login"/>
      ) : (
        <Home/>
      )
    )}/>          
     <Route exact path="/about" render={() => (
        !this.props.authinticated ? (
          <Redirect to="/login"/>
        ) : (
          <About/>
        )
      )}/>      
      <Route path="/login" exact component={Login}/>

    </div>
    </Router>

      
    );
  }
}
const mapState=(state)=>{
  return {
      user: state.user,
      password: state.password,
      authinticated: state.authinticated
  }
}
export default connect(mapState)(App);