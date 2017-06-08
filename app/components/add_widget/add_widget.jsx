import React from 'react';
import WidgetOption from './widget_option';
import widgetData from '../../../public/data/widget_data.js'
import {sample} from 'lodash';

export default class AddWidget extends React.Component {

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.addWidget = this.addWidget.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.closePane = this.closePane.bind(this);
    this.state = {title: "", description: "", errors: null, size: 1};
  }

  addWidget() {

    if(!this.state.errors && this.verifyContent()) {
      let data = _.sample(widgetData);
      let widget = {
        title: this.state.title,
        description: this.state.description,
        size: this.state.size,
        data: data
      };
      this.props.addWidget(widget);
      this.setState({title: "", description: "", errors: null, size: 1});
      this.closePane();
    }
  }

  closePane() {
      this.props.changePaneState(false);
  }

  selectSize(size) {
    return () => {
      this.setState({size: size});
    }
  }

  update(updatedArea) {
    return (e) => {
      let charLimit = updatedArea === "title" ? 25 : 50;
      if(this.verifyLength(e.target.value, charLimit)) {
        this.setState({[updatedArea]: e.target.value, errors: null});
      } else {
        this.setState({errors: `Please use less than ${charLimit} character for your ${updatedArea}.`});
      }
    }
  }

  renderErrors() {
    if(this.state.errors) {
      return(
        <div className="error-message">
          {this.state.errors}
        </div>
      )
    }
  }

  verifyContent() {
    if(this.state.title.length === 0 && this.state.description.length === 0) {
      this.setState({errors: "Please ensure you have a title and description."});
      return false;
    }
    return true;
  }

  verifyLength(input, charLimit) {
    return input.length < charLimit;
  }

  render() {
    return (
      <div className={`add-widget-panel ${this.props.active ? 'active' : 'inactive'}`}>
        <div className="add-widget-header">
          <h1>Add a Widget</h1>
          <img src="./public/images/icon-close.svg" onClick={this.closePane}></img>
        </div>
        <div className = "add-widget-content">
          <div className="widget-selector">
            <h3>Choose Widget Type</h3>
            <ul className="widget-list">
              <li>
                <WidgetOption type="table" selectSize={this.selectSize}/>
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
            {this.renderErrors()}
            <h2>Widget Title (25 characters max)</h2>
            <input type="text" value={this.state.title}  onChange={this.update('title')} ></input>
            <h2>Widget Description (50 characters max)</h2>
            <textarea value={this.state.description} onChange={this.update('description')} />
          </div>
          <div className="widget-confirmation">
            <button onClick={this.addWidget}>Add Widget</button>
            <button onClick={this.closePane}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
