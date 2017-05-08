import React, { Component } from 'react';
import BackgroundImage from 'react-background-image-loader';
import './match.css';

export default class Match extends Component {

  constructor(props) {
    super(props);
    this.state = {
      a: 'IND',
      a_bets: 4,
      b: 'ENG',
      b_bets: 6,
      banner: 'Amazing Century by VKohli',
      time: 1494264207,
      a_names: ['rama raju', 'soma raju', 'dama raju'],
      b_names: ['samyuktha', 'siva prasad raju', 'chandravathi']

    };
  }

  showBetters(side) {
    const betterNames = (side === 'left' ? this.state.a_names : this.state.b_names);
    const betters = [];
    betterNames.forEach( (better, idx) => {
      betters.push(<span key={ idx } className="better-name">{ better }</span>);
    });
    return betters;
  }

  render () {
    const date = new Date();
    const leftWidth = this.state.a_bets*100/(this.state.a_bets + this.state.b_bets);
    const rightWidth = this.state.b_bets*100/(this.state.a_bets + this.state.b_bets);

    return (
      <div className="match">
        <div className="header">
          <h5>Match #1</h5>
          <h1>Ind vs Pak</h1>
          <h5>{ date.toString() }</h5>
          <h3 className="banner">{ this.state.banner }</h3>
        </div>
        <hr/>

        <div className="selector">
          <div className="odds-left">
            <div className="fill" style={{ width: `${leftWidth}%` }}>{ this.state.a_bets }</div>
          </div>
          <div className="odds-right">
            <div className="fill" style={{ width: `${rightWidth}%` }}>{ this.state.b_bets }</div>
          </div>
          <BackgroundImage src={ `flags/${this.state.a}.png`} placeholder={ `flags/${this.state.a}.png`} className="left">
            <h1>{ this.state.a }</h1>
          </BackgroundImage>
          <BackgroundImage src={ `flags/${this.state.b}.png`} placeholder={ `flags/${this.state.b}.png`} className="right">
            <h1>{ this.state.b }</h1>
          </BackgroundImage>
          <div className="bets-left">
            { this.showBetters('left') }
          </div>
          <div className="bets-right">
            { this.showBetters('right') }
          </div>

        </div>

      </div>
    )
  }
}
