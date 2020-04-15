import React from 'react'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'

import {fetchJoke} from '../Store/actions/jokeActions'
import { useEffect } from 'react'

const Joke = (props) => {
  useEffect(()=>{
    props.fetchJoke()
  },[])

  return (
    <p>Joke goes here</p>
  )
}

const mapStateToProps = state =>{
  console.log('state',state)
  return{
    joke: state.joke
  }
}


export default connect(mapStateToProps, {fetchJoke})(Joke)