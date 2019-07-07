import React, { Component } from 'react';
import '../App.css';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			TaskName: '',
			TaskLevel: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]:value
		});
	  }
	
	  handleSubmit(event) {

		let item ={
			name: this.state.TaskName,
			level: this.state.TaskLevel
		};

		this.props.onClickSubmit(item);
		event.preventDefault();
	  }

	render() {
		return (
			<div>
				{/* Form Start */}
				<div className="row justify-content-end ">
					<div className="col-md-5 ">
						<form onSubmit={this.handleSubmit} className="form-inline formTask" >
							{/* Input */}
							<div className="form-group">
								<label htmlFor="" className="sr-only">label</label>
								<input value={this.state.TaskName} onChange={this.handleChange} name="TaskName" type="text" className="form-control" placeholder="Task Name" />
							</div>
							{/* Select box */}
							<div className="form-group form123">
								<label htmlFor="" className="sr-only">label</label>
								<select value={this.state.TaskLevel} onChange={this.handleChange} name="TaskLevel" className="form-control" required="required">
									<option value={0}>Low</option>
									<option value={1}>Medium</option>
									<option value={2}>High</option>
								</select>
							</div>
							<button className="btn btn-info" type="submit">Submit</button>
							<button className="btn btn-light" type="button">Cancel</button>
						</form>
					</div>
				</div>
				{/* Form End */}
			</div>
		)
	}
}

export default Form;
