import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; // eslint-disable-line
import 'react-tabs/style/react-tabs.css';

class RankingTodo extends Component {
  render() {
    return (
      <TabPanel>
        <div>
          <h2>{this.props.title}</h2>
          <figure>
            <img src={this.props.img} alt='' />
          </figure>
          <p>{this.props.text}</p>
        </div>
      </TabPanel>
    );
  }
}

export default RankingTodo;
