import React, { Component } from 'react';
import * as firebase from 'firebase';
import './profile.css';
import {
  Card,
  Icon,
  Image,
  Table,
  Header,
  Label,
  Segment
} from 'semantic-ui-react';
import { RIEInput } from 'riek';

import stats from '../../helpers/stats.json';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Oopsy ',
      avatarURL: '',
      isUploading: false,
      progress: 0,
      avatar: '',
      isEditingName: false
    };
  }

  componentDidMount() {
    const ranksRef = firebase.database().ref().child('ranks');

    // ranksRef.on('value', snap => {
    //   console.log('FETCH' + JSON.stringify(snap.val(), null, 2));
    //   this.setState({
    //     ranks:  snap.val()
    //   });
    // });
  }

  onNameChange({ username }) {
    this.setState({ username });
  }

  isStringAcceptable(str) {
    //TODO : Also check for regex for XSS
    if (str.length < 1 || str.length > 10) {
      return false;
    }
    return true;
  }

  renderAvatar() {
    //TODO : get Auth Object and check if same user or not
    const isUser = true;

    return (
      <Card>
        <Image src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png" />
        <Card.Content>
          <Card.Header>
            <span className="user-name">
              <RIEInput
                value={this.state.username}
                change={this.onNameChange.bind(this)}
                propName="username"
                className={this.state.highlight ? 'editable' : ''}
                validate={this.isStringAcceptable}
                classLoading="loading"
                classInvalid="invalid"
              />
            </span>
            {isUser ? <Icon name="write" /> : null}
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
    );
  }

  renderResults() {
    return (
      <Table basic="very" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Match</Table.HeaderCell>
            <Table.HeaderCell>Your Selection</Table.HeaderCell>
            <Table.HeaderCell>Result</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row positive>
            <Table.Cell>
              <Label as="a">
                <Image avatar spaced="right" src="flags/IND.png" />
                INDIA
              </Label>
              Vs

              <Label as="a">
                <Image avatar spaced="right" src="flags/PAK.png" />
                PAKISTAN
              </Label>

            </Table.Cell>
            <Table.Cell>
              <Label as="a">
                <Image avatar spaced="right" src="flags/IND.png" />
                INDIA
              </Label>
            </Table.Cell>
            <Table.Cell>
              <span className="teal result" color="green"> + 3.24 </span>
            </Table.Cell>
            <Table.Cell>
              <Label as="a" color="teal" tag>Win</Label>
            </Table.Cell>
          </Table.Row>

          <Table.Row error>
            <Table.Cell>
              <Label as="a">
                <Image avatar spaced="right" src="flags/IND.png" />
                INDIA
              </Label>
              Vs

              <Label as="a">
                <Image avatar spaced="right" src="flags/PAK.png" />
                PAKISTAN
              </Label>

            </Table.Cell>
            <Table.Cell>
              <Label as="a">
                <Image avatar spaced="right" src="flags/IND.png" />
                INDIA
              </Label>
            </Table.Cell>
            <Table.Cell>
              <span className="teal result" color="green"> - 3.24 </span>
            </Table.Cell>
            <Table.Cell>
              <Label as="a" color="orange" tag>Loss</Label>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Label as="a">
                <Image avatar spaced="right" src="flags/IND.png" />
                INDIA
              </Label>
              Vs

              <Label as="a">
                <Image avatar spaced="right" src="flags/PAK.png" />
                PAKISTAN
              </Label>

            </Table.Cell>
            <Table.Cell>
              <Label as="a">
                <Image avatar spaced="right" src="flags/IND.png" />
                TBD
              </Label>
            </Table.Cell>
            <Table.Cell>
              <span className="teal result" color="green"> + 3.24 </span>
            </Table.Cell>
            <Table.Cell>
              <Label as="a" color="yellow" tag>TBD</Label>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Label as="a">
                <Image avatar spaced="right" src="flags/IND.png" />
                INDIA
              </Label>
              Vs

              <Label as="a">
                <Image avatar spaced="right" src="flags/PAK.png" />
                PAKISTAN
              </Label>

            </Table.Cell>
            <Table.Cell>
              <Label as="a">
                <Image avatar spaced="right" src="flags/IND.png" />
                INDIA
              </Label>
            </Table.Cell>
            <Table.Cell>
              <span className="teal result" color="green"> + 3.24 </span>
            </Table.Cell>
            <Table.Cell>
              <Label as="a" color="yellow" tag>TBD</Label>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Label as="a">
                <Image avatar spaced="right" src="flags/IND.png" />
                INDIA
              </Label>
              Vs

              <Label as="a">
                <Image avatar spaced="right" src="flags/PAK.png" />
                PAKISTAN
              </Label>

            </Table.Cell>
            <Table.Cell>
              <Label as="a">
                <Image avatar spaced="right" src="flags/IND.png" />
                INDIA
              </Label>
            </Table.Cell>
            <Table.Cell>
              <span className="teal result" color="green"> + 3.24 </span>
            </Table.Cell>
            <Table.Cell>
              <Label as="a" color="yellow" tag>TBD</Label>
            </Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>
    );
  }

  renderRank() {
    const square = { width: 120, height: 120 };
    return (
      <Card>
        <Card.Content>
          <Segment circular style={square}>
            <Header as="h2">
              Rank!
              <Header.Subheader>
                12
              </Header.Subheader>
            </Header>
          </Segment>

        </Card.Content>

      </Card>
    );
  }

  renderUserStats() {
    return (
      <div className="profile-content">
        <div className="stats">
          <div className="portlet-title">
            Results
          </div>
          {this.renderResults()}
        </div>
        <div className="feed">
          {this.renderRank()}

        </div>
      </div>
    );
  }

  render() {
    const date = new Date();
    return (
      <div className="user-profile">
        <div className="user-avatar">
          {this.renderAvatar()}
        </div>
        <div className="profile">
          {this.renderUserStats()}
        </div>
      </div>
    );
  }
}
