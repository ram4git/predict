import React, { Component } from 'react';
import BackgroundImage from 'react-background-image-loader';
import Coverflow from 'react-coverflow';
import { Button, Comment, Form, Header, Card, Image } from 'semantic-ui-react'
import PlaceBets from './PlaceBets';


import './bet.css';

export default class Bet extends Component {

  constructor(props) {
    super(props);
    
  }

  renderMatchCards() {

    var fn = function () {
      console.log('clicked');
    }   
    return (
       <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
        >
        <Card onClick={fn}>
        <Image src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png"/>
        <Card.Content>
          <Card.Header>
            
            Vijay
          </Card.Header>
          <Card.Meta>
            <span className="date">
              matthew@gmail.com
            </span>
          </Card.Meta>
          <Card.Description>
            Change Password
          </Card.Description>
        </Card.Content>
      </Card>
        <img src='https://react.semantic-ui.com/assets/images/avatar/large/matt.jpg' alt='title or description' data-action={fn} />
        <img src='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'  alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
        <img src='https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
      </Coverflow>
    )
  }

  renderPlaceBets() {
    return(
        <div> 
          <PlaceBets />
         </div>
    )
  }

  renderMatchComments() {
    return (
      <div className="comment-feed">
         <Comment.Group>
            <Header as='h3' dividing>Comments</Header>

            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Matt</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/assets/images/avatar/small/elliot.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Elliot Fu</Comment.Author>
                <Comment.Metadata>
                  <div>Yesterday at 12:30AM</div>
                </Comment.Metadata>
                <Comment.Text>
                  <p>This has been very useful for my research. Thanks as well!</p>
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
              <Comment.Group>
                <Comment>
                  <Comment.Avatar src='https://react.semantic-ui.com/assets/images/avatar/small/jenny.jpg' />
                  <Comment.Content>
                    <Comment.Author as='a'>Jenny Hess</Comment.Author>
                    <Comment.Metadata>
                      <div>Just now</div>
                    </Comment.Metadata>
                    <Comment.Text>
                      Elliot you are always so right :)
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            </Comment>

            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/assets/images/avatar/small/joe.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                <Comment.Metadata>
                  <div>5 days ago</div>
                </Comment.Metadata>
                <Comment.Text>
                  Dude, this is awesome. Thanks so much
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Form reply onSubmit={e => e.preventDefault()}>
              <Form.TextArea />
              <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
          </Comment.Group>
      </div>
    )
  }

  render () {
    return (
      <div className="bet-page">
        <div className="match-cards"> 
          {this.renderMatchCards()}
        </div>  
        <div className="bet-content">
            <div className="place-bet">
              {this.renderPlaceBets()}
            </div>
            <div className="comments">
              {this.renderMatchComments()}
            </div>
        </div>
      </div>
    )
  }
}
