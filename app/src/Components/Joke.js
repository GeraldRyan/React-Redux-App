import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import Request from './Request' 
import { fetchJoke } from '../Store/actions/jokeActions'
import { useEffect } from 'react'

const Joke = (props) =>
{
  useEffect(() =>
  {
    props.fetchJoke()
  }, [])

  return (
    <div>
      <br/>
      <div>{props.joke.data.setup}</div>
      <Request></Request>
      <br/>
      <div>{props.joke.data.delivery}</div>

    </div>
  )
}

const mapStateToProps = state =>
{
  console.log('state', state)
  return {
    joke: state.joke
  }
}


export default connect(mapStateToProps, { fetchJoke })(Joke)