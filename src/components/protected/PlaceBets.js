import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Card, Icon, Image , Segment , Header , Button } from 'semantic-ui-react'
import './PlaceBets.css';



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    //const ranksRef = firebase.database().ref().child('ranks');
  }


  render() {
     const square = { width: 120, height: 120 };
    return (
      <div>
      <div className="flags">
             <Card>
          <Image src='flags/AUS.png' />
          <Card.Content>
            <Card.Header>INDIA</Card.Header>
          </Card.Content>
          
        </Card>
        <Card>
          <Image src='flags/ENG.png' />
          <Card.Content>
            <Card.Header>PAKISTAN</Card.Header>
          </Card.Content>
          
        </Card>

      </div>

      <div className="bets">

        <Segment circular style={square}>
            <Header as="h2">
              10
            
            </Header>
          </Segment>

          <Segment circular style={square}>
            <Header as="h2">
              20
            </Header>
          </Segment>

          <Segment circular style={square}>
            <Header as="h2">
              30
            </Header>
          </Segment>
           <Segment circular style={square}>
            <Header as="h2">
              40
            </Header>
          </Segment>

           <Segment circular style={square}>
            <Header as="h2">
              50
            </Header>
          </Segment>
      </div>

      <div className="submit">
         <Button primary>Primary</Button>
      </div>
      </div>
    );
  }
}
