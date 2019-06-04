import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; // eslint-disable-line
import 'react-tabs/style/react-tabs.css';
const scope = { Tabs, Tab, TabList, TabPanel };

class RankingBlock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: '',
    };
  }

  renderTabPanel() {
    const tabs = ['タイトル1', 'タイトル2', 'タイトル3', 'タイトル4'];
    const rows = tabs.map((tab, comment) =>
      <Tab>{tab}</Tab>
    );
    return (
      <TabList
        forceRenderTabPanel
        className='tabList'
      >
        {rows}
      </TabList >
    );
    this.setState({ tabs });
  }

  renderTabBody() {
    const bodys = [
      {
        title: 'ここにタイトルが入ります1',
        img: '../img/1.jpg',
        text: '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。'
      },
      {
        title: 'ここにタイトルが入ります2',
        img: '../img/2.jpg',
        text: '木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた'
      },
      {
        title: 'ここにタイトルが入ります3',
        img: '../img/3.jpg',
        text: '恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎に生れましたので、汽車をはじめて見たのは、よほど大きくなってからでした。自分は停車場のブリッジを、上'
      },
      {
        title: 'ここにタイトルが入ります4',
        img: '../img/4.jpg',
        text: 'これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。'
      }
    ];
    const list = bodys.map((body, comment) =>

    );
    return (
      <TabPanel>
        {list}
      </TabPanel>
    );
    this.setState({ tabs });
  }

  render() {
    return (

      <Tabs
        forceRenderTabPanel
        className='tab'
        onSelect={this.handleSelect}
        selectedIndex={0}
      >
        {this.renderTabPanel()}
        <div>
          <h2>{body.title}</h2>
          <figure>
            <img src={body.img} alt='' />
          </figure>
          <p>{body.text}</p>
        </div>
      </Tabs >
    );
  }
};
class RankingTab extends Component {
  constructor() {
    super();
    this.state = {
      tabIndex: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>ColorTable</h2>
        <RankingBlock />
      </div>
    );
  }
}
export default RankingTab;
// ReactDOM.render(<RankingTab />, document.getElementById('container'));