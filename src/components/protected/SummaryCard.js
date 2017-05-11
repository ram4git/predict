import React, { Component } from 'react';
import { Icon, Statistic } from 'semantic-ui-react'



export default class SummaryCard extends Component {


  render() {
    return (
      <Statistic.Group widths='three'>
        <Statistic>
          <Statistic.Value>IND</Statistic.Value>
          <Statistic.Label>your pick</Statistic.Label>
        </Statistic>

        <Statistic color='green'>
          <Statistic.Value >+3.34</Statistic.Value>
          <Statistic.Label>correct?</Statistic.Label>
        </Statistic>

        <Statistic color='red'>
          <Statistic.Value >-2.45</Statistic.Value>
          <Statistic.Label>wrong?</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    );
  }

}
