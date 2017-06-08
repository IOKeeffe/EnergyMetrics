import React from 'react';
import WidgetOption from './widget_option';
import widgetData from '../../../public/data/widget_data.js'
import {sample} from 'lodash';

export default class AddWidget extends React.Component {

  constructor(props) {
    super(props);
    this.addWidget = this.addWidget.bind(this);
    this.closePane = this.closePane.bind(this);
    this.selectType = this.selectType.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.state = {title: "", description: "", errors: null, size: 1, type: "table"};
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

  selectOption(option) {
    return(choice) => {
      return(e) => {
        this.setState({[option]: choice})
      }
    }
  }

  selectType(type) {
    return(e) => {
      this.setState({type: type});
    }
  }

  selectSize(size) {
      this.setState({size: size});
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
    let _this = this;
    return (
      <div className={`add-widget-panel ${_this.props.active ? 'active' : 'inactive'}`}>
        <div className="add-widget-header">
          <h1>Add a Widget</h1>
          <img src="./public/images/icon-close.svg" onClick={_this.closePane}></img>
        </div>
        <div className = "add-widget-content">
          <h3>Choose Widget Type</h3>
          <ul className="widget-list">
            <li onClick={_this.selectType('table')} >
              <WidgetOption selected={_this.state.type === "table"} type="table" selectSize={_this.selectSize} />
            </li>
            <li onClick={_this.selectType('donut')}>
              <WidgetOption selected={_this.state.type === "donut"} type="donut" selectSize={_this.selectSize} />
            </li>
            <li onClick={_this.selectType('bar')}>
              <WidgetOption selected={_this.state.type === "bar"} type="bar" selectSize={_this.selectSize} />
            </li>
            <li onClick={_this.selectType('line')}>
              <WidgetOption selected={_this.state.type === "line"} type="line" selectSize={_this.selectSize} />
            </li>
          </ul>
          <div className="widget-info">
            <h3>Widget Header (Optional)</h3>
            {_this.renderErrors()}
            <h4><b>Widget Title</b> (25 characters max)</h4>
            <input type="text" value={_this.state.title}  onChange={_this.update('title')} ></input>
            <h4><b>Widget Description</b> (50 characters max)</h4>
            <textarea value={_this.state.description} onChange={_this.update('description')} />
          </div>
          <div className="widget-confirmation">
            <button className="add-widget-button" onClick={_this.addWidget}>Add Widget</button>
            <button className="cancel-widget-button" onClick={_this.closePane}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
