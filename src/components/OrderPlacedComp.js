import React, { Component } from 'react';

class OrderPlacedComp extends Component {
	render(){
		return(
			<div className="comp3">
	          Order Placed By: Salse Contact:
	          <input className="" type="text" name="customerBusinessID" placeholder="Customer Business ID"/><br/>
	          <label htmlFor="verticalMarket"><span className="Astric">*</span>Contact Email:</label>
	          <input className="" type="text" name="customerBusinessID" placeholder="Customer Business ID"/><br/>
	          Business ID:
	          <input className="" type="text" name="customerBusinessID" placeholder="Customer Business ID"/>          
	        </div>
		)
	}
}

export default OrderPlacedComp;