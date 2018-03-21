import React, { Component } from 'react';

class SoldComp extends Component {
    render() {
        return ( 
        <div className = "grid-item">
            <b> Sold To: </b>
            <br/ >
            <div className = "FormGrp" >
                <label htmlFor = "businessID" > < span className = "Astric" > * </span>Business ID:</label>
                <input className = "Input"
                type = "text"
                name = "businessID"
                placeholder = "Business ID"
                value={this.props.data.businessID}
                onChange = {
                    (e) => { this.props.handleChange(e) }
                }/>
            </div>
            <div className = "FormGrp">
                <label htmlFor = "soldBusinessName" >< span className = "Astric" > * </span>Business Name:</label>
                <input className = "Input"
                type = "text"
                name = "soldBusinessName"
                placeholder = "Business Name"
                value={this.props.data.soldBusinessName}
                onChange = {
                    (e) => { this.props.handleChange(e) }
                }/>
            </div>
        </div >
        )
    }
}

export default SoldComp;