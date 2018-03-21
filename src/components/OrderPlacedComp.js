import React, { Component } from 'react';

class OrderPlacedComp extends Component {
	render(){
		return(
			<div className="comp3">
	          <div className="FormGrp">Order Placed By: Salse Contact:
			  
	          <input className="" type="text" name="customerBusinessID" placeholder="Salse Contact"/><br/>
			  </div>
			  <div className="FormGrp">
	          <label htmlFor="verticalMarket"><span className="Astric">*</span>Contact Email:</label>
	          <input className="" type="text" name="customerBusinessID" placeholder="Contact Email"/><br/>
			  </div>
			  <div className="FormGrp">
	          Business ID:
	          <input className="" type="text" name="businessID" placeholder="Business ID"/>
			  </div>
	        </div>
		)
	}
}

export default OrderPlacedComp;