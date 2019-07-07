import React, { Component } from 'react';
import '../App.css';
import ListItem from './ListItem';

class List extends Component {
constructor(props){
    super(props);
    this.state={

	};
}


    render() {
// Foreach task start
		let items=this.props.items;
		const elmItem = items.map((items, index)=>{
			return (
				<ListItem onClickDelete={this.props.onClickDelete} key={index} items={items} index={index} />
			);
		});
// Foreach task end


        return (
            <div>
               {/* List Start */}
				<div className="card">
					<div className="card-header bg-info">List Task</div>
					<table className="table table-hover">
						<thead>
							<tr>
								<th style={{ width: '10%' }} className="text-center">#</th>
								<th>Task</th>
								<th style={{ width: '20%' }} className="text-center">Level</th>
								<th className="action" style={{ width: '20%' }}>Action</th>
							</tr>
						</thead>
						<tbody>
						{elmItem}
						</tbody>
					</table>
				</div>
				{/* List End */}
            </div>
		)
    }
}

export default List;
