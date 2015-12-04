/*
 * Module dependenciee
 */

import React from 'react';
import PokeAvatar from './PokeAvatar';

export default class PokeRow extends React.Component {
  render () {
    return <li className="pokerow">
      <PokeAvatar number={this.props.number} />
      <span>{ this.props.name }</span>
    </li>
  }
}