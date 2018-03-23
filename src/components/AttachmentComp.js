import React from 'react';

import AttachmentButton from './attachnmentButton';

class AttachmentComp extends React.Component {
	render() {
		return (
			<div className="comp4" >
				<table style={{ 'width': '50%', 'border': '2px solid #e6e6e6' }}>
					<tbody>
						<tr>
							<th>Attachment</th>
							<th>Attachment</th>
						</tr>
						<tr>
							<td>								
								<AttachmentButton id={'file-input1'}/>							
							</td>
							<td>
								<AttachmentButton id={'file-input2'}/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default AttachmentComp;