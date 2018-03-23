import React, { Component } from 'react';


class SoldComp extends Component {
    constructor() {
    super();
    this.state = {
      touched: {
        businessID: false,
        soldBusinessName: false,
      },
    };
  }
    handleBlur= (field,value) => (evt) => {
        if(value===''){
            this.setState({
            touched: { ...this.state.touched, [field]: true },
            });
        }
        else{
            this.setState({
            touched: { ...this.state.touched, [field]: false },
            });
        }  
  }
    render() {
        // console.log(utility.mufunction());
        return ( 
        <div className = "grid-item">
            <b> Sold To: </b>
            <br/ >
            <div className = "FormGrp" >
                <label htmlFor = "businessID" > < span className = "Astric" > * </span>Business ID:</label>
                <input className = {(this.state.touched.businessID)?"Input InputError":"Input"}
                type = "text"
                name = "businessID"
                placeholder = "Business ID"
                value={this.props.data.businessID}
                onChange = {
                    (e) => { this.props.handleChange(e) }
                } onBlur={this.handleBlur('businessID',this.props.data.businessID)}/>
            </div>
            <div className = "FormGrp">
                <label htmlFor = "soldBusinessName" >< span className = "Astric" > * </span>Business Name:</label>
                <input className = {(this.state.touched.soldBusinessName)?"Input InputError":"Input"}
                type = "text"
                name = "soldBusinessName"
                placeholder = "Business Name"
                value={this.props.data.soldBusinessName}
                onChange = {
                    (e) => { this.props.handleChange(e) }
                } onBlur={this.handleBlur('soldBusinessName',this.props.data.soldBusinessName)}/>
            </div>
        </div >
        )
    }
}

export default SoldComp;