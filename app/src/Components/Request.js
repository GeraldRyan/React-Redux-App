import React from 'react'
import { connect } from 'react-redux'

const Request = (props) =>
{

  let toShow = ''

  const handleClick = e =>
  {
    e.preventDefault()
    console.log("show answer", props.state.displayDelivery)
    toShow = props.joke.data.delivery
    console.log("toShow:", toShow)

  }
  return (
    <div>
      <br />
      <button onClick={props.showHideDelivery}>{!props.state.displayDelivery ? 'Show Answer': 'Hide Answer'}</button>
      <button onClick={handleClick}>Get New Joke</button>
      <br />
      <br />
      <div>{props.state.displayDelivery && props.joke.data.delivery}</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>
{
  return {
    //dispatching actions
    showHideDelivery: () => dispatch({ type: 'DISPLAY_DELIVERY' })
    
  }
}


const mapStateToProps = state =>
{
  console.log('state', state)
  return {
    state: state,
    joke: state.joke
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Request)