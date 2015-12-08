/*
 * Module dependenciee
 */

import React from 'react';

export default class PokeMessage extends React.Component {
  constructor ( props ) {
    super ( props );
  }
  render () {
    return <li className="pokemessage">{ this.props.message.text }</li>
  }
}