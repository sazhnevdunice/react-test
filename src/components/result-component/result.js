import React, { Component } from 'react';
import './result.css';

class Result extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        console.log(this.props.myStyle)
    
        return (
            <div className="result-wrapper" style={this.props.myStyle}>
            Look at me!
            </div>
        );
    }
}

export default Result
