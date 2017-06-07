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
    this.state = {addPaneActive: true};
    this.title = "Dashboards";
    this.changePaneState = this.changePaneState.bind(this);
    this.addWidget = this.addWidget.bind(this);
    this.widgets = [
      {
        name:"Foods",
        size: 1,
        description: "yum",
        data: widgetData[0]
      },
      {
        name:"Flavors",
        size: 1,
        description: "meh",
        data: widgetData[1]
      }
    ];
  }

  changePaneState(active) {
    this.setState({addPaneActive: active});
  }

  addWidget({title, description, size, data}) {

  }

  render() {
    return (
      <div className="content-holder">
        <AddWidget active={this.state.addPaneActive} changePaneState={this.changePaneState} addWidget={this.addWidget} />
        <Header />
        <TitleBar title={this.title} />
        <Dashboard widgets={this.widgets} />
      </div>
    );
  }
}
