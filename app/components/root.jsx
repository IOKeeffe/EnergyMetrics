import React from 'react';
import Header from './header/header';
import TitleBar from './title_bar/title_bar';
import Widget from './widget/widget';
import AddWidget from './add_widget/add_widget';
import Dashboard from './dashboard/dashboard';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    let widgets = {};
    this.state = {addPaneActive: true, widgets: widgets};
    this.title = "Dashboards";
    this.name = "Foods";
    this.size = 1;
    this.description = "All the foods";
    this.data = [{name: 'banana', country: 'Brazil'}, {name: 'peach', country: 'Georgia'}];
    this.changePaneState = this.changePaneState.bind(this);
  }

  changePaneState(active) {
    this.setState({addPaneActive: active});
  }

  renderWidgets() {
    Object.keys(widgets).map
  }

  render() {
    return (
      <div className="content-holder">
        <AddWidget active={this.state.addPaneActive} changePaneState={this.changePaneState}  />
        <Header />
        <TitleBar title={this.title} />
        {renderWidgets()}
        //<Widget name={this.name} size={this.size} description={this.description} data={this.data} />
        // <Dashboard />
      </div>
    );
  }
}
