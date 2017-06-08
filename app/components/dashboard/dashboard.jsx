import React from 'react';
import Widget from '../widget/widget';


export default class Dasboard extends React.Component {

  constructor(props) {
    super(props);
    this.renderWidgets = this.renderWidgets.bind(this);

  }

  renderOptions() {
      return (
        this.props.widgets.map((widget, i) => {
          return (
            <option value={widget.name} key={widget.name}>{widget.name}</option>
          )
        }
      )
    );
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
        <div className="dashboard-bar">
          <h1>Dashboards</h1>
        </div>
        <div className="dashboard-header-section">
          <div className="dashboard-header">
            <div className="header-title-section">
              <h1>New Dashboard</h1>
              <img src="./public/images/icon-edit.svg"></img>
            </div>
            <div className="dashboard-controls">
              <div className="dashboard-switcher">
                <h5>Dashboard Switcher</h5>
                <div className="selector">
                  <div>-Select a Dashboard-</div>
                  <img src="./public/images/dropdown-arrow.svg"></img>
                </div>
              </div>
              <div className="dashboard-header-add-widget-button">
                <img src="./public/images/icon-add.svg"></img>
                <button>Add a New Widget</button>
              </div>
            </div>
          </div>
          <div className="content-area">
            {this.renderWidgets()}
            <div className="add-widget-button" onClick={this.props.changePaneState}>
              <img src="./public/images/icon-add-large.svg"></img>
              <h4>Add a New Widget</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
