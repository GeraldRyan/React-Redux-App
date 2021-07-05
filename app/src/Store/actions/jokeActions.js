import axios from 'axios'

export const fetchJoke = () =>
{
  const url = 'https://sv443.net/jokeapi/v2/joke/Programming?type=twopart?format=json?blacklistFlags=racist,sexist,nsfw'
  return dispatch =>
  {
    dispatch({ type: 'FETCH_JOKE_START' })
    axios
      .get(url)
      .then(res =>
      {
        dispatch({ type: 'FETCH_JOKE_SUCCESS', payload: res })
      })
      .catch(err =>
      {
        dispatch({
          type: 'FETCH_QUOTE_FAIL',
          payload: `Error ${err.response.status}:${err.response.data}`
        })
      })
  }
}