import React, { Component } from 'react';
import '../App.css';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return ( 
                <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                      {/* Sort Start */}
                    <div className="dropdown">
                        <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown" id="dropdownMenu1" aria-haspopup="true" aria-expanded="true">
                            Sort by <span className="caret" />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <a className="dropdown-item" href="#top">Name ASC</a>
                            <a className="dropdown-item" href="#top">Name DESC</a>
                            <li role="separator" className="divider" />
                            <a className="dropdown-item" href="#top">Level ASC</a>
                            <a className="dropdown-item" href="#top">Level DESC</a>
                        </div>
                        <span className="btn btn-success">Name - Level</span>
                    </div>
                    {/* Sort End */}
                </div>
                
        )
    }
}

export default Sort;
