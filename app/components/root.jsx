import React from 'react';
import Header from './header/header';
import TitleBar from './title_bar/title_bar';
import Widget from './widget/widget';
import AddWidget from './add_widget/add_widget';
import Dashboard from './dashboard/dashboard';
import {sample} from 'lodash/sample';
import widgetData from '../../public/data/widget_data.js'

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.title = "Dashboards";
    this.changePaneState = this.changePaneState.bind(this);
    this.addWidget = this.addWidget.bind(this);
    this.state = ({
      addPaneActive: false,
      widgets: [
        {
          name:"Exports",
          size: 1,
          description: "Exports by country and year",
          data: widgetData[0]
        },
        {
          name:"Favorite Foods",
          size: 1,
          description: "Most consumed food by country",
          data: widgetData[1]
        }
      ]
    });
  }

  changePaneState(active) {
    this.setState({addPaneActive: active});
  }

  addWidget(widget) {
    let newWidgets = this.state.widgets;
    newWidgets.push(widget)
    this.setState({widgets: newWidgets})
  }

  render() {
    return (
      <div className="content-holder">
        <AddWidget active={this.state.addPaneActive} changePaneState={this.changePaneState} addWidget={this.addWidget} />
        <Header />
        <Dashboard widgets={this.state.widgets} changePaneState={this.changePaneState}/>
      </div>
    );
  }
}
