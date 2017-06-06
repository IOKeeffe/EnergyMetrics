import React from 'react';

export default class Header extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {selected: 'Dashboards'};
    this.tabClick = this.tabClick.bind(this);
  }
  tabClick(e) {
    this.setState({selected: e.target.innerText});
  }
  render() {
    return (
      <div className='header'>
        <ul className='tab-list'>
          <li className='food-iq-logo'>
            <img src="./public/images/logo-foodiq.svg"></img>
          </li>
          <li onClick={this.tabClick} className={`header-tab ${this.state.selected === 'Nav One' ? 'active-tab' : ''}`}>Nav One</li>
          <li onClick={this.tabClick} className={`header-tab ${this.state.selected === 'Nav Two' ? 'active-tab' : ''}`}>Nav Two</li>
          <li onClick={this.tabClick} className={`header-tab ${this.state.selected === 'Dashboards' ? 'active-tab' : ''}`}>Dashboards</li>
        </ul>
        <ul className='profile-info'>
          <li className='support'>Help</li>
          <li className='support'>Contact</li>
          <li className='user-name'>John Jones<img src="./public/images/icon-namearrow.svg"></img></li>
        </ul>
      </div>
    );
  }
};

