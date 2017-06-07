import React from 'react';
import WidgetOption from './widget_option';

export default class AddWidget extends React.Component {
  
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {title: "", description: ""};
  }
  
  update(updatedArea) {
    return (e) => {
      this.setState({[updatedArea]: e.target.value});
    }
  }

  render() {
    return (
      <div className="add-widget-panel">
        <div className="add-widget-header">
          <h1>Add a Widget</h1>
          <img src="./public/images/icon-close.svg"></img>
        </div>
        <div className="widget-selector">
          <h3>Choose Widget Type</h3>
          <ul className="widget-list">
            <li>
              <WidgetOption type="table" />
            </li>
            <li>
              <WidgetOption type="donut" />
            </li>
            <li>
              <WidgetOption type="bar" />
            </li>
            <li>
              <WidgetOption type="line" />
            </li>
          </ul>
        </div>
        <div className="widget-options">
          <h3>Widget Header (Optional)</h3>
          <h2>Widget Title (25 characters max)</h2>
          <input type="text" value={this.state.title}  onChange={this.update('title')} ></input>
          <h2>Widget Description (50 characters max)</h2>
          <textarea value={this.state.description} onChange={this.update('description')} />
        </div>
        <div className="widget-confirmation">
        </div>
      </div>
    );
  }
}