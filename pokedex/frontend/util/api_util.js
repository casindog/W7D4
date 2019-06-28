export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: `/api/pokemon`
  })
);

export const fetchOnePokemon = (id) => {
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  })
}

// http://localhost:3000/api/pokemon