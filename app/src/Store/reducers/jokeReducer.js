export const initialState = {
  category:"",
  type:'',
  setup:'',
  delivery:'',
  flags:{
    nsfw:false,
    religious:false,
    political:false,
    racist:false,
    sexist:false
  },
  id:1,


}

const url = 'https://sv443.net/jokeapi/v2/joke/Programming?type=twopart?format=json?blacklistFlags=racist,sexist,nsfw'


export const jokeReducer = (state = initialState, action) =>{
  switch(action.type)
  {
    default:
      return state
  }
}