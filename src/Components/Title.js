import React, { Component } from 'react';
import '../App.css';

class Title extends Component {
constructor(props){
    super(props);
    this.state={

    };
}

    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>Project 01- ToDoList by <strong>ReactJS</strong></h1>
                    <hr></hr>
                </div>
            </div>
        )
    }
}

export default Title;
