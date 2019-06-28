import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store.js';
import Pokedex from './components/pokedex';
import {selectAllPokemon} from './reducers/selectors'
import Root from './components/root'


document.addEventListener('DOMContentLoaded', () => {
  const rootEL = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState; 
  window.dispatch = store.dispatch;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  
  ReactDOM.render(<Root store={store} />, rootEL);
});