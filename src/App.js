import React, { Component } from 'react';
import './App.css';
import HeaderComp from './components/Header';
import DatesComp from './components/DatesComp';
import ShipmentComp from './components/ShipmentComp';
import AdditionalComp from './components/AdditionalComp';
import OrderPlacedComp from './components/OrderPlacedComp';
import TableComp from './components/TableComp';
import CommentComp from './components/CommentComp';
import AttachmentComp from './components/AttachmentComp';
import UserroleComp from './components/UserroleComp';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businessID: '',
            soldBusinessName: '',
            shipBusinessName: '',
            shipAddress: '',
            shipAddress1: '',
            cityStateZip: '',
        }
    }
    handleChange(e) {
        // console.log(e.target.name);

        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitHandler(e) {
        console.log(this.state);
    }
    render() {
        // console.log(this.state);
        return ( <div className = "App">
            <HeaderComp/>
            <div className = "line"></div>
            <DatesComp />
           
            <ShipmentComp handleChange = {
                (e) => { this.handleChange(e) }
            }/>
            <div className = "lineGrey" ></div>
            <AdditionalComp />
            <OrderPlacedComp />
            <div className = "line"></div>
            <TableComp/>
            <CommentComp/>
            <AttachmentComp/>
            <UserroleComp data = { this.state }/>
           
            <div className = "line" > </div>
            </div >
        );
    }
}

export default App;
