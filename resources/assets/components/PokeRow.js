/*
 * Module dependenciee
 */

import React from 'react';
import PokeAvatar from './PokeAvatar';

export default class PokeRow extends React.Component {
  onClick(ev) {
    this.props.growl.call( null, this.props.name );
  }

  render () {
    return <li className="pokerow" onClick={ this.onClick.bind( this ) }>
      <PokeAvatar number={this.props.number} />
      <span>{ this.props.name }</span>
    </li>
  }
}