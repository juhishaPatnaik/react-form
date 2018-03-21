import React, { Component } from 'react';

class AttachmentComp extends Component {
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
								<input type="file" />
							</td>
							<td>
								<input type="file" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default AttachmentComp;