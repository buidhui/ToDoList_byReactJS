import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Control from './Components/Control';
import Form from './Components/Form';
import List from './Components/List';
import Task from './Components/Task';
import { remove } from 'lodash';
const uuidv4 = require('uuid/v4');


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: Task.items,
			isShowForm: false
		};

		this.handleToggleForm = this.handleToggleForm.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		
		let items = JSON.parse(localStorage.getItem('task'));

		this.setState({
			items : items,
		})
		
	}


	// Show form
	handleToggleForm() {
		this.setState({
			isShowForm: !this.state.isShowForm
		});
	}
	// Show form end

	// Delete item
	handleDelete(id) {
		var confirmation = window.confirm('Are you sure you want to delete this Task?');
		if (confirmation) {
			console.log(id);
			let items = this.state.items;
			remove(items, (item) => {
				return item.id === id;

			});
			this.setState({
				items: this.state.items
				
			});
			localStorage.setItem('task', JSON.stringify(items));
			// alert("Delete Completely !!!");
			return true;
		} else {
			return false;
		}
	}
	// Delete item end

	// Add Task
	handleSubmit(item) {
		// console.log(item); 

		let items = this.state.items;


		items.push( {
            id: uuidv4(),
            name: item.name,
            level: +item.level // 0 low, 1 medium, 2 high
		})
		
		this.setState({
			items: items,
			isShowForm: false
		});
		localStorage.setItem('task', JSON.stringify(items));

	}
	// Add Task end

	render() {

		let items = this.state.items;


		let isShowForm = this.state.isShowForm;
		let elmForm = null;
		if (isShowForm) {
			elmForm = <Form onClickSubmit={this.handleSubmit} />;
		}

		return (
			<div>
				{/* Title Start */}
				<Title />
				{/* Title End */}


				{/* Control Start */}
				<Control
					isShowForm={isShowForm}
					onClickAdd={this.handleToggleForm} />
				{/* Control End */}

				{/* Form Start */}
				{elmForm}
				{/* Form End */}

				{/* List Start */}
				<List
					onClickDelete={this.handleDelete}
					items={items} />
				{/* List End */}
			</div>

		)
	}
}

export default App;
