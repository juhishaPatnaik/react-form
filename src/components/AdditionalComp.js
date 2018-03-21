import React, { Component } from 'react';

class AdditionalComp extends Component {
	render(){
		return(
			<div className="comp2">
	          <div className="grid-item">
	            <div className="FormGrp">
	              <label htmlFor="PO"><span className="Astric">*</span>PO:</label>
	              <input className="Input" type="text" name="PO" placeholder="PO"/>
	            </div>
	            <div className="FormGrp">
	              <label htmlFor="salseRep"><span className="Astric">*</span>Salse Rep:</label>
	              <input className="Input" type="text" name="salseRep" placeholder="Salse Rep"/>
	            </div>
	            <div className="FormGrp">
	              <label htmlFor="shipInstruction"><span className="Astric">*</span>Shipping Instruction:</label>
	              <textarea  className="Input" name="shipInstruction" placeholder="Shipping Instruction"></textarea >
	            </div>
	          </div>
	          <div className="grid-item">
	            <div className="FormGrp">
	              <label htmlFor="mark">Mark#:</label>
	              <input className="Input" type="text" name="mark" placeholder="Mark#"/>
	            </div>
	            <div className="FormGrp">
	              <label htmlFor="salseTerritory"><span className="Astric">*</span>Salse Territory :</label>
	              <select className="Input" style={{'width':'61%'}} name="salseTerritory">
	                <option value="">Select ...</option>
	                <option value="1">sfsfff</option>
	                <option value="2">sfsfff</option>
	              </select>
	            </div>
	            <div className="FormGrp">
	              <label htmlFor="customerName"><span className="Astric">*</span>Customer Name:</label>
	              <input className="Input" type="text" name="customerName" placeholder="Customer Name"/>
	            </div>
	            <div className="FormGrp">
	              <label htmlFor="customerBusinessID"><span className="Astric">*</span>Customer Business ID:</label>
	              <input className="Input" type="text" name="customerBusinessID" placeholder="Customer Business ID"/>
	            </div>
	            <div className="FormGrp">
	              <label htmlFor="verticalMarket"><span className="Astric">*</span>Vertical Market:</label>
	              <select className="Input" style={{'width':'61%'}} name="verticalMarket">
	                <option value="">Select ...</option>
	                <option value="1">sfsfff</option>
	                <option value="2">sfsfff</option>
	              </select>
	            </div>
	          </div>
	        </div>
		)
	}
}

export default AdditionalComp;