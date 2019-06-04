import React, { Component } from 'react';
import RankingTab from './components/RankingTab';
import Slider from 'react-slick';

class Slick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [{ name: 'img/2.jpg' }, { name: 'img/3.jpg' }],
      config: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  }

  render() {
    let config = this.state.config;
    let slides = this.state.slides;
    return (
      <Slider {...config}>
        {slides.map(slide => {
          return [<figure><img src={slide.name} /></figure>];
        })}
      </Slider>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    const tabs = ['タイトル1', 'タイトル2', 'タイトル3', 'タイトル4'];
    const bodys = [
      {
        title: 'ここにタイトルが入ります1',
        img: 'img/1.jpg',
        text: '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。'
      },
      {
        title: 'ここにタイトルが入ります2',
        img: 'img/2.jpg',
        text: '木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた'
      },
      {
        title: 'ここにタイトルが入ります3',
        img: 'img/3.jpg',
        text: '恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎に生れましたので、汽車をはじめて見たのは、よほど大きくなってからでした。自分は停車場のブリッジを、上'
      },
      {
        title: 'ここにタイトルが入ります4',
        img: 'img/4.jpg',
        text: 'これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。これは、ダミーです。'
      }
    ];

    this.state = {
      tabs: tabs,
      bodys: bodys,
    };
  }
  render() {
    let config = this.state.config;
    let slides = this.state.slides;

    return (
      <div className="app">
        <h2 className="appTtl">React Sample</h2>
        <Slick />
        <RankingTab
          tabs={this.state.tabs}//RankingTabComponentに渡したい内容を書く
          bodys={this.state.bodys}//RankingTabComponentに渡したい内容を書く
        //これでRankingTab内でbodysという変数が使える
        />
      </div>
    );
  }
}

export default App;
