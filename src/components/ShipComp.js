import React, { Component } from 'react';

class ShipComp extends Component {
    constructor() {
    super();
    this.state = {
      touched: {
        shipBusinessName: false,
        shipAddress: false,
        cityStateZip: false,
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
        return (
          <div className = "grid-item" >
            <b> Ship To: </b> <br/>
            <div className = "FormGrp">
                <label htmlFor = "shipBusinessName">< span className ="Astric" >*</span>Business Name:</label>
                <input className = {(this.state.touched.shipBusinessName)?"Input InputError":"Input"}
                type = "text"
                name = "shipBusinessName"
                placeholder = "Business Name"
                value={this.props.data.shipBusinessName}
                onChange = {
                    (e) => { this.props.handleChange(e) }
                } onBlur={this.handleBlur('shipBusinessName',this.props.data.shipBusinessName)}/>
            </div>
            <div className = "FormGrp">
                <label htmlFor = "shipAddress" > < span className = "Astric" > * </span>Address :</label >
                <input className = {(this.state.touched.shipAddress)?"Input InputError":"Input"}
                type = "text"
                name = "shipAddress"
                placeholder = "Address"
                value={this.props.data.shipAddress}
                onChange = {
                    (e) => { this.props.handleChange(e) }
                } onBlur={this.handleBlur('shipAddress',this.props.data.shipAddress)}/>
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
                <input className = {(this.state.touched.cityStateZip)?"Input InputError":"Input"}
                type = "text"
                name = "cityStateZip"
                placeholder = "City, State, Zip"
                value={this.props.data.cityStateZip}
                onChange = {
                    (e) => { this.props.handleChange(e) }
                } onBlur={this.handleBlur('cityStateZip',this.props.data.cityStateZip)}/> 
            </div >
            </div >
        )
    }
}

export default ShipComp;
