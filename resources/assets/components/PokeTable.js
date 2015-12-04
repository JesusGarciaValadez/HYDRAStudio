/*
 * Module dependenciee
 */

import React from 'react';
import PokeRow from './PokeRow';

var LogMixins = {
  componentWillMount () {
    console.log( 'El componente se montará' );
  },
  componentDidMount () {
    console.log( 'El componente se ha montado' );
  },
  componentWillReceiveProps ( nextProps ) {
    console.log( 'El componente recibirá nuevas props' );
  },
  shouldComponentUpdate ( nextProps, nextState ) {
    console.log( `¿El componente se debe actualizar?\r\fNuevas props: ${nextProps}\r\fNuevo State: ${nextState}` );
  },
  componentWillUpdate ( nextProps, nextState ) {
    console.log( `El componente se actualizará\r\fNuevas props: ${nextProps}\r\fNuevo State: ${nextState}` );
  },
  componentDidUpdate ( prevProps, prevState ) {
    console.log( `El componente se ha actualizada\r\fNuevas props: ${nextProps}\r\fNuevo State: ${nextState}` );
  },
  componentWillUnmount () {
    console.log( 'El componente se desmontará' );
  }
}

export default class PokeTable extends React.Component {
  render () {
    return <ul className="poketable">
      {
        this.props.pokemons.map( ( pokemon ) => {
          return <PokeRow key={pokemon.number} name={pokemon.name} number={pokemon.number} />
        } )
      }
    </ul>
  }
}

PokeTable.defaultProps = {
  pokemon: {
    number: 0,
    name: 'Ninguno'
  }
}

PokeTable.mixins = [ LogMixins ]