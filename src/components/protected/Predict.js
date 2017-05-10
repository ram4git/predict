import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import keydown, { Keys } from 'react-keydown';

import './match.css';

export default class Predict extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 2
    };
  }

  renderSelectedMatch() {
    return <h1>SELECTED {this.state.selected }</h1>
  }

//  @keydown( 'left' )
  gotoPrevCard() {
    const prevCard = this.state.selected === 0 ? 15 : (this.state.selected - 1);
    this.setState({
      selected: prevCard
    });
  }

  //@keydown( 'right' )
  gotoNextCard() {
    const nextCard = this.state.selected === 15 ? 0 : (this.state.selected + 1);
    this.setState({
      selected: nextCard
    });
  }



  onCardClick(idx) {
    this.setState({
      selected: idx
    });
  }

  renderMatches() {
    let items = [];
    [...Array(15).keys()].forEach(idx => {
      items.push(<Card key={ idx } color={ `${idx === this.state.selected ? 'blue' : 'gray'}` } onClick={ this.onCardClick.bind(this, idx) }>
        <div className={ `ui card ${ idx === this.state.selected ? 'raised' : '' }` }>
          <div className="matchNail">
            <p>#{ idx }</p>
            <h2>INDvsPAK</h2>
            <p>18th Jun</p>
          </div>
        </div>
      </Card>);
    });
    return items;
  }

  render () {
    return ( <div>
        <Card.Group itemsPerRow={8}>
          { this.renderMatches() }
        </Card.Group>
        <hr/>
        { this.renderSelectedMatch() }
      </div>

    );
  }

}
