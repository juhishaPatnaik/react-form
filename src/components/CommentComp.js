import React, { Component } from 'react';

class CommentComp extends Component {
	render(){
		return(
			<div className="" style={{"height":"55px"}}>
	          <div>Comments:<br/></div>
	          <textarea style={{"width":"100%"}} name="shipInstruction" placeholder="Shipping Instruction"></textarea >
	        </div>
		)
	}
}

export default CommentComp;