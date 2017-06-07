import React from 'react';
import Header from './header/header';
import TitleBar from './title_bar/title_bar';
import Widget from './widget/widget';
import AddWidget from './add_widget/add_widget';
import Dashboard from './dashboard/dashboard';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addPaneActive: true};
    this.title = "Dashboards";
    this.changePaneState = this.changePaneState.bind(this);
  }

  changePaneState(active) {
    this.setState({addPaneActive: active});
  }

  render() {
    return (
      <div className="content-holder">
        <AddWidget active={this.state.addPaneActive} changePaneState={this.changePaneState}  />
        <Header />
        <TitleBar title={this.title} />
        <Dashboard />
      </div>
    );
  }
}
