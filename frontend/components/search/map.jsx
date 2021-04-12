import React from 'react'
import ReactDOM from 'react-dom'


class Map extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div id='map-container' ref='map'>

      </div>
    )
  }
}

export default Map