import React, { Component } from 'react';
import '../App.css';

class Search extends Component {
constructor(props){
    super(props);
    this.state={

    };
}

    render() {
        return (
            <div className="col-4 col-sm-4 col-md-4 col-lg-4">
					{/* Search Start */}
						<div className="input-group">
							<input type="text" className="form-control" ref="search" placeholder="Search for..." />
							<span className="input-group-btn">
								<button className="btn btn-success" type="button">Go !</button>
							</span>
						</div>
					{/* Search End */}					
            </div>
        )
    }
}

export default Search;
