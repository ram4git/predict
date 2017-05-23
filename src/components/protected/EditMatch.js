import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Form } from 'semantic-ui-react'
import Datetime from 'react-datetime'
import './datetime.css'


export default class EditMatch extends Component {


  handleChange(fieldName, e, { value }) {
    console.log(fieldName + ' is changed to ' + value);
    this.setState({
      [fieldName]: value
    });
  }

  handleTimeChange(e) {
    this.setState({
      time: e.unix()
    });
  }

  componentDidMount() {
    const matchRef = firebase.database().ref().child(`matches/${this.props.match.params['matchId']}`);

    matchRef.on('value', snap => {
      console.log('MATCH' + JSON.stringify(snap.val(), null, 2));
      this.setState({
        ...snap.val()
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const matchData = {
      ...this.state
    };

    const matchRef = firebase.database().ref().child(`matches/${this.props.match.params['matchId']}`)
    matchRef.set(matchData, function(error) {
      if (error) {
        alert(`Match can not be saved: ` + error);
      } else {
        alert(`Match is saved successfully!`);
      }});

  }

  render() {
    return (
      <Form >
        <Form.Group widths='equal'>
          <Form.Input label='Match #' placeholder='match #' onChange={ this.handleChange.bind(this, 'match') } value={ this.props.match.params['matchId'] } disabled/>
          <Form.Input label='TEAM #1' placeholder='TEAM #1' onChange={ this.handleChange.bind(this, 'team_1') } value={ this.state ? this.state.team_1 : '' }/>
          <Form.Input label='TEAM #2' placeholder='TEAM #2' onChange={ this.handleChange.bind(this, 'team_2') } value={ this.state ? this.state.team_2 : '' }/>
          <Form.Field>
            <label>Date</label>
            <Datetime onChange={ this.handleTimeChange.bind(this) }/>
          </Form.Field>
        </Form.Group>


        <Form.TextArea label='Banner' placeholder='Tell us more about match...' width='8' onChange={ this.handleChange.bind(this, 'banner') } value={ this.state ? this.state.banner : '' }/>
        <Form.Input label='Winner' placeholder='WINNER' width='4' onChange={ this.handleChange.bind(this, 'winner') } value={ this.state ? this.state.winner : '' }/>
        <Form.Button onClick={ this.handleSubmit.bind(this) } type='submit'>Submit</Form.Button>
      </Form>
    );
  }

}
