import React, { Component } from 'react';
import '../App.css';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};

		this.AddTask = this.AddTask.bind(this);
	}


AddTask(){
this.props.onClickAdd();
}


	render() {

		let formbutton = <button onClick={this.AddTask} className="btn btn-success btn-block btnAdd" type="button">Add Task</button>;
		 if (this.props.isShowForm===true){
			 formbutton = <button onClick={this.AddTask} className="btn btn-info btn-block btnAdd" type="button">Close</button>;
		 }

		return (
			<div>
				{/* Control Start */}
				<div className="row">
					{/* Search Start */}
					<Search/>
					{/* Search End */}

					{/* Sort Start */}
					<Sort/>
					{/* Sort End */}
				
					{/* Add Start */}
					{formbutton}
					{/* Add End */}
				</div>
				{/* Control End */}
			</div>
		)
	}
}

export default Control;
