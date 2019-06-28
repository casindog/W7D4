import { RECEIVE_ALL_POKEMON, CATCH_ONE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({},state);

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case CATCH_ONE_POKEMON:
      nextState.entities.pokemon.action.pokemon['id'] = action.pokemon;
      return nextState; 
    default:
      return state;
  }
} 

export default pokemonReducer;