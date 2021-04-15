import React from 'react';
import TheMap from './map'


class MappingRoutes extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.fetchRoutes()
  }
  render(){
    return (
      <div>
        <h1>Mappings</h1>
        <TheMap mappings={this.props.mappings}/>
      </div>
    )
  }
}

export default MappingRoutes