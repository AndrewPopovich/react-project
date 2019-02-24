import React, {Component} from 'react';

class validationComponent extends Component {
	minLength = 5;
	maxLength = 15;

	validateText = length => {
		console.log(">>>>>>>>>>>" + length);
		if (length < this.minLength) {
			return (<p>Text too short</p>);
		} else if (length > this.maxLength) {
			return (<p>Text too long</p>);
		}
	};

	render() {
		return (
			<div>
				{
					this.validateText(this.props.textLength)
				}
			</div>
		);
	}
}

export default validationComponent;