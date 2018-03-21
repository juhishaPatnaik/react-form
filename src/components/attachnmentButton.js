import React from 'react';
import attachmentLogo from '../attachment.png';

class AttachmentButton extends React.Component{    
    render(){
        return(
            <div class="image-upload">
				<label htmlFor={this.props.id}>
				    <img src={attachmentLogo} style={{'width':'16px'}}/><span>File Attachment</span>
				</label>

				<input id={this.props.id} type="file"/>
			</div>
        )
    }
}
export default AttachmentButton;