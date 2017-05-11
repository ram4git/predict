import React, { Component } from 'react';
import BackgroundImage from 'react-background-image-loader';
import {  Button, Header, Image, Modal, Statistic } from 'semantic-ui-react'

import SummaryCard from './SummaryCard.js'

import './match.css';

export default class Match extends Component {

  constructor(props) {
    super(props);
    this.state = {
      a: 'IND',
      a_bets: 4,
      b: 'PAK',
      b_bets: 6,
      banner: 'Amazing Century by VKohli',
      time: 1494264207,
      a_names: ['rama raju', 'soma raju', 'dama raju'],
      b_names: ['samyuktha', 'siva prasad raju', 'chandravathi'],
      open: false
    };
  }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

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
    const { open, dimmer } = this.state



    return (
      <div className="match">
        <hr/>
        <SummaryCard />
        <hr/>
        <div className="selector">
          <div className="odds-left">
            <div className="fill" style={{ width: `${leftWidth}%` }}>{ this.state.a_bets }</div>
          </div>
          <div className="odds-right">
            <div className="fill" style={{ width: `${rightWidth}%` }}>{ this.state.b_bets }</div>
          </div>
          <BackgroundImage src={ `flags/${this.state.a}.png`} onClick={this.show('blurring')} placeholder={ `flags/${this.state.a}.png`} className="left">
            <h1>{ this.state.a }</h1>
          </BackgroundImage>
          <BackgroundImage src={ `flags/${this.state.b}.png`} onClick={this.show('blurring')}placeholder={ `flags/${this.state.b}.png`} className="right">
            <h1>{ this.state.b }</h1>
          </BackgroundImage>
          <div className="bets-left">
            { this.showBetters('left') }
          </div>
          <div className="bets-right">
            { this.showBetters('right') }
          </div>

        </div>
        <Modal dimmer={dimmer} open={open} onClose={this.close} closeOnEscape={ true }>
          <Modal.Header>Confirm Your Pick</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='flags/IND.png' />
            <Modal.Description>
              <Statistic.Group widths='two'>
                <Statistic color='green'>
                  <Statistic.Value >3.34</Statistic.Value>
                  <Statistic.Label>if you are correct? you can win</Statistic.Label>
                </Statistic>

                <Statistic color='red'>
                  <Statistic.Value >2.45</Statistic.Value>
                  <Statistic.Label>if you are wrong? you can lose</Statistic.Label>
                </Statistic>
              </Statistic.Group>

            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Yep, confirm" onClick={this.close} />
          </Modal.Actions>
        </Modal>

      </div>
    )
  }
}
