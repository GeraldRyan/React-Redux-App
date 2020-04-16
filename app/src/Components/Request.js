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
      <button onClick={handleClick}>Get answer</button>
      <button onClick={props.showHideDelivery}>Show answer</button>
      <br />
      <br />
      <div>{toShow}</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>
{
  return {
    //dispatching actions
    showHideDelivery: () =>
    {
      dispatch({ type: 'DISPLAY_DELIVERY' })
      console.log("Running ShowHideDelivery", dispatch)
    }
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