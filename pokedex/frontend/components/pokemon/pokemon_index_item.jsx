import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (props) => ({
  
  render() {
    return (
      <Link to={`/pokemon/${props.pokemon.id}`}> 
    <li>
      {props.pokemon.name}
      <img src={props.pokemon.image_url} /> 
   </li>
   </Link>
   );
  }
});