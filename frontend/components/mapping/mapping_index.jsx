import React from 'react';
import TheMap from './map'


class MappingRoutes extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
  }
  
  render(){
    return (
      <div>
        <TheMap/>
      </div>
    )
  }
}

export default MappingRoutes