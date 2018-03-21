import React, { Component } from 'react';

class ShipComp extends Component {
    render() {
        return (
          <div className = "grid-item" >
            <b> Ship To: </b> <br/>
            <div className = "FormGrp">
                <label htmlFor = "shipBusinessName">< span className ="Astric" >*</span>Business Name:</label>
                <input className = "Input"
                type = "text"
                name = "shipBusinessName"
                placeholder = "Business Name"
                value={this.props.data.shipBusinessName}
                onChange = {
                    (e) => { this.props.handleChange(e) }
                }/>
            </div>
            <div className = "FormGrp">
                <label htmlFor = "shipAddress" > < span className = "Astric" > * </span>Address :</label >
                <input className = "Input"
                type = "text"
                name = "shipAddress"
                placeholder = "Address"
                value={this.props.data.shipAddress}
                onChange = {
                    (e) => { this.props.handleChange(e) }
                } />
            </div>
            <div className = "FormGrp">
                <div style={{"display": "inline-block"}}><label htmlFor = "shipAddress1" ></label></div>
                <div style={{"width": "100%","display": "inline-block"}}><input className = "Input"
                type = "text"
                name = "shipAddress1"
                placeholder = "Address"
                value={this.props.data.shipAddress1}
                onChange = {
                    (e) => { this.props.handleChange(e) }
                }/></div>
            </div >
            <div className = "FormGrp">
                <label htmlFor = "cityStateZip"> 
                    < span className = "Astric" > * </span>City, State, Zip:</label>
                <input className = "Input"
                type = "text"
                name = "cityStateZip"
                placeholder = "City, State, Zip"
                value={this.props.data.cityStateZip}
                onChange = {
                    (e) => { this.props.handleChange(e) }
                }/> 
            </div >
            </div >
        )
    }
}

export default ShipComp;
