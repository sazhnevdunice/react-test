import React, { Component } from 'react';
import './form.css';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        "width": 200,
        "height": 200,
        "border-width": 0,
        "color": null,
        "float": null,
        "margin-top": 0,
        "margin-right": 0,
        "margin-bottom": 0,
        "margin-left": 0,
        "padding-top": 0,
        "padding-right": 0,
        "padding-bottom": 0,
        "padding-left": 0,
      },
      
      rawStyle: {
        "width": 0,
        "height": 0,
        "border-width": 0,
        "color": null,
        "float": null,
        "margin-top": 0,
        "margin-right": 0,
        "margin-bottom": 0,
        "margin-left": 0,
        "padding-top": 0,
        "padding-right": 0,
        "padding-bottom": 0,
        "padding-left": 0,
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, event) {

    const newState = {
      style: {
        ...this.state.style,
      },
      rawStyle: {
        ...this.state.rawStyle,
      },
    };
    if (["color", "float"].indexOf(id) != -1) {
      newState.style[id] = event.target.value
    }
    else {
      newState.style[id] = event.target.value+'px';
    }
    newState.rawStyle[id] = event.target.value;

    this.props.onChange(newState.style);

    this.setState(newState);

  }

  render() {

    return (
      <div className="wrapper">
        <h3>Please enter CSS props values</h3>

        <p>width: <input type="text" value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "width")} /> </p>
	      <p>height: <input type="text" value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "height")} /> </p>

	      <p>border-width: <input type="text"  value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "border-width")} /></p>

        <p>color: <input type="text"  value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "color")} /></p>
        <p>float: <input type="text"  value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "float")} /></p>

	      <p>margin-top: <input type="text" value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "margin-top")} /></p>
	      <p>margin-right: <input type="text"  value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "margin-right")} /></p>
	      <p>margin-bottom: <input type="text"  value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "margin-bottom")} /></p>
	      <p>margin-left: <input type="text"  value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "margin-left")} /></p>

	      <p>padding-top: <input type="text" value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "padding-top")} /></p>
	      <p>padding-right: <input type="text"  value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "padding-right")} /></p>
	      <p>padding-bottom: <input type="text"  value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "padding-bottom")} /></p>
	      <p>padding-left: <input type="text"  value={this.state.rawStyle.value} onChange={this.handleChange.bind(null, "padding-left")} /></p>
        
      </div>
      );
  }
}

export default Form;
