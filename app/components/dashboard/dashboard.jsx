import React from 'react';
import Widget from '../widget/widget';

export default class Dasboard extends React.Component {

  constructor(props) {
    super(props);
    this.renderWidgets = this.renderWidgets.bind(this);
    let widgets = {
      1:{
        name:"Foods",
        size: 1,
        description: "yum",
        data: [
          {name: 'banana', country: 'Brazil'},
          {name: 'peach', country: 'Georgia'}
        ]
      },
      2:{
        name:"Flavors",
        size: 1,
        description: "meh",
        data: [
          {name: 'grape', rating: '4'},
          {name: 'cherry', rating: '3'}
        ]
      }
    };
    this.state = {widgets: widgets}
  }

  renderWidgets() {
    return (
      Object.keys(this.state.widgets).map((key, i) => {
        let widget = this.state.widgets[key];
        return (
          <Widget key={i} data={widget.data} name={widget.name} description={widget.description} size={widget.size} />
        );
      })
    );
  }

  render() {
    return (
      <div>
        {this.renderWidgets()}
      </div>
    );
  }
}
