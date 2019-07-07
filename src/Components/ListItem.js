import React, { Component } from 'react';
import '../App.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleDel = this.handleDel.bind(this);
    }

handleDel(id){
    this.props.onClickDelete(id);
}

    render() {

        const item = this.props.items;
        const stt = this.props.index;
// Set level start
        let elmLevel = <span className="badge badge-success">Small</span>;
        if(item.level===1){
            elmLevel= <span className="badge badge-secondary">Medium</span>;
        } else if (item.level===2){
            elmLevel= <span className="badge badge-danger">High</span>;
        }
// Set level end

// Render level start
        return (
            <tr>
                <td className="text-center">{stt}</td>
                <td>{item.name}</td>
                <td className="text-center">{elmLevel}</td>
                <td className="action">
                    <button type="button" className="btn btn-info">Edit</button>
                    <button onClick={()=>this.handleDel(item.id)} type="button" className="btn btn-warning">Delete</button>
                </td>
            </tr>
        )
// Render level end
    }
}

export default ListItem;
