import React, { Component } from 'react';
import logo from '../logo.svg';

class HeaderComp extends Component {
	render(){
		return(
			<header className="App-header">
	          <div className='App-body'>
	            <span className="App-title">Cooling Order Form</span>
	            <span className="App-logo-span">
	               <img src={logo} className="App-logo" alt="logo" /> 
	              </span>
	          </div>
	        </header>
		)
	}
}

export default HeaderComp;