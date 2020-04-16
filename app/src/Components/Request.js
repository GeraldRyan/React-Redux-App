import React from 'react'
import { connect } from 'react-redux'

const Request = (props) =>
{


  const handleClick = e => {
    e.preventDefault()
    console.log("show answer", props.state.showAnswer)
  }
  return (
    <div>
      <br />
      <button onClick={handleClick}>Get answer</button>
      <br/>
      <br/>
      <div>{props.joke.data.delivery}</div>
    </div>
  )
}

const mapStateToProps = state =>
{
  console.log('state', state)
  return {
    state:state,
    joke: state.joke
  }
}


export default connect(mapStateToProps)(Request)