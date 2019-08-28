import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
            <li date={this.props.data}> {this.props.text} </li>
        );
    }

}