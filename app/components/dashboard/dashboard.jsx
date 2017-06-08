import React from 'react';
import Widget from '../widget/widget';


export default class Dasboard extends React.Component {

  constructor(props) {
    super(props);
    this.renderWidgets = this.renderWidgets.bind(this);

  }

  renderOptions() {
    this.props.widgets.map((widget, i) => {
      return (
        <option value={widget.name}>{widget.name}</option>
      )
    })
  }

  renderWidgets() {
    return (
      this.props.widgets.map((widget, i) => {
        return (
          <Widget key={i} widget={widget} />
        );
      })
    );
  }

  render() {
    console.log(this.props.widgets);
    return (
      <div>
        <div className="dashboard-header">
          <h1>New Dashboard</h1>
          <div className="dashboard-controls">
            <div className="dashboard-switcher">
              <h5>Dashboard Switcher</h5>
              <select>
                {this.renderOptions()}
              </select>
            </div>
          </div>
        </div>
        {this.renderWidgets()}
        <div className="add-widget-button" onClick={this.props.changePaneState}>
          <img src="./public/images/icon-add-large.svg"></img>
          <h4>Add a New Widget</h4>
        </div>
      </div>
    );
  }
}
