import React, { Component } from 'react';
import SoldComp from './SoldComp';
import ShipComp from './ShipComp';

class ShipmentComp extends Component {
    render() {
        return (
          <div className = "comp2">
            <SoldComp handleChange = {
                (e) => { this.props.handleChange(e) }
            } data={this.props.data}/>
            <ShipComp handleChange = {
                (e) => { this.props.handleChange(e) }
            } data={this.props.data}/>
          </div >
        )
    }
}

export default ShipmentComp;
