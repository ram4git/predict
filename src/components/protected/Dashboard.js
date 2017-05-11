import React, { Component } from 'react';
import * as firebase from 'firebase';
import './ranks.css';
import { Label, Icon } from 'semantic-ui-react'






export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranks: []
    };
  }

  componentDidMount() {
    const ranksRef = firebase.database().ref().child('ranks');

    ranksRef.on('value', snap => {
      console.log('FETCH' + JSON.stringify(snap.val(), null, 2));
      this.setState({
        ranks:  snap.val()
      });
    });
  }
  renderRanks() {
    console.log(JSON.stringify(this.state.ranks, null, 2));
    const ranks = [];
    this.state.ranks.forEach( (ranker, idx) => {
      const money = ranker.money.toFixed(2);
      ranks.push(<div className="rank" key={ idx }>
        {
          idx === 0 ?
          <Label as='a' color='yellow' ribbon><Icon loading name='star' size='huge'/></Label> :
          <div className="index">{ idx+1 }</div>
        }

        <div className="name">{ ranker.name }</div>
        <div className={ money >= 0 ? 'money positive' : 'money negative'}>{ money }</div>
      </div>);
    });
    return ranks;
  }
  render () {
    const date = new Date();
    return (
      <div>
        <div className="ranksTable">
          <h1>RANKS </h1>
          <h5>{ `as of ${date.toString()}` }</h5>
          <hr/>
          <div className="ranks">
            { this.renderRanks() }
          </div>
        </div>
      </div>
    )
  }
}
