/*
 * Module Dependencies
 */
import React from 'react';
import PokeTable from './PokeTable';

/**
* ReactJS Realtime Web Components Demo
* Copyright 2015, by Jesús Antonio García Valadez
**/
/*
* Note: Remove / in //* to disable that element
*/

var pokemons = [
  { number: 1, name: "Bulbasaur" },
  { number: 2, name: "Ivysaur" },
  { number: 3, name: "Venusaur" }
];

//*   Create ReactJS visualization in JSX
React.render(
  <PokeTable pokemons={pokemons} />,
  document.getElementById( 'container' )
);
//*/

