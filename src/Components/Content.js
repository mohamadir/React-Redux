import React, { Component } from 'react';
import logo from '../Components/logo.svg';
import './App.css';
import {Link, BrowserRouter as Router, Route,withRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';

class Content extends Component {
  go(){
  }
  render() {
    console.log(this.props);
        return null;
  }
}

export default Content;
