import React from 'react';
// import { requestAllPokemon } from '../../actions/pokemon_actions';
import { PokemonIndexItem } from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // let anything = [];
    
    // this.props.pokemon.forEach(function(pokemon_obj,idx) {
    //   anything.push(
    //     <li key={idx}>
    //       {pokemon_obj.name} 
    //         <img src={pokemon_obj.image_url} /> 
          
    //   </li>
    //     )
    // })                              
    const pokemonItems = this.props.pokemon.map(pokemon => 
      <PokemonIndexItem 
        key={pokemon.id} 
        pokemon={pokemon} />);

    return (
      <div>
        <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer}/>
        <ul>
          {pokemonItems}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

}

export default PokemonIndex;