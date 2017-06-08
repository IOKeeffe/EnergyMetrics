import React from 'react';


export default class WidgetOption extends React.Component {

  constructor(props) {
    super(props);
    this.selectSize = this.selectSize.bind(this);
    this.state = {selected: 1}
    this.widgetTypes = {
      "table": {
        title: "Table",
        img: "./public/images/widgettype-table.svg"
      },
      "donut": {
        title: "Donut Chart",
        img: "./public/images/widgettype-donutchart.svg"
      },
      "bar": {
        title: "Bar Chart",
        img: "./public/images/widgettype-barchart.svg"
      },
      "line": {
        title: "Line Graph",
        img: "./public/images/widgettype-linegraph.svg"
      }
    }
  }

  selectSize(size) {
      this.setState({selected: size});
      this.props.selectSize(size);
  }

  render() {
    return(
      <div className= {`widget-option ${this.props.selected ? 'selected' : ''}`}>
        <div className="widget-option-header">
          {this.widgetTypes[this.props.type].title}
        </div>
        <div className="widget-option-graphic">
          <img src={this.widgetTypes[this.props.type].img}></img>
        </div>
        <ul  className="widget-option-size-list">
          <li className={this.state.selected === 1 ? 'selected' : ''} onClick={(e) => {this.selectSize(1)}}>
            <div>1/3 Width</div>
          </li>
          <li className={this.state.selected === 2 ? 'selected' : ''} onClick={(e) => {this.selectSize(2)}}>
            <div>
              2/3 Width
            </div>
          </li>
          <li className={this.state.selected === 3 ? 'selected' : ''} onClick={(e) => {this.selectSize(3)}}>
            <div>
              Full Width
            </div>
          </li>
        </ul>
      </div>
    );
  }
};
