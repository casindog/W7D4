import { fetchAllPokemon, fetchOnePokemon } from '../util/api_util';


export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const CATCH_ONE_POKEMON = 'CATCH_ONE_POKEMON';

export const catchOnePokemon = (pokemon) => ({
  type: CATCH_ONE_POKEMON,
  pokemon
});

export const requestOnePokemon = (id) => (dispatch) => (
  fetchOnePokemon(id)
    .then(pokemon => dispatch(catchOnePokemon(pokemon)))
)
