export const initialState = {
  joke: {
    data: {
      category: "",   // this is unnecessary, can be empty
      type: '',
      setup: '',
      delivery: '',
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false
      },
      id: 1,
      error: false
    }
  },
  displayDelivery:false,
  isFetching: false,
  error: ''
}

const url = 'https://sv443.net/jokeapi/v2/joke/Programming?type=twopart?format=json?blacklistFlags=racist,sexist,nsfw'


export const jokeReducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case 'FETCH_JOKE_START':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCH_JOKE_SUCCESS':
      return {
        ...state,
        isFetching: false,
        joke: action.payload,
        error: ''
      }
    case 'FETCH_JOKE_FAIL':
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
      case 'DISPLAY_DELIVERY':
        return{
          ...state,
          displayDelivery:!state.displayDelivery // Not sure if this is right!
        }
    default:
      return state
  }
}