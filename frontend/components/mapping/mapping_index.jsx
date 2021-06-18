import React from 'react';
import TheMap from './map'


class MappingRoutes extends React.Component {
  constructor(props){
    super(props)
    debugger
  }
  componentDidMount(){
    // debugger
    // this.props.fetchRoutes()
  }
  render(){
    return (
      <div>
        {/* <div className='css-map'> */}
        <TheMap mappings={this.props.mappings}/>
        {/* <TheMap/> */}
        
        {/* </div> */}
      </div>
    )
  }
}

export default MappingRoutes