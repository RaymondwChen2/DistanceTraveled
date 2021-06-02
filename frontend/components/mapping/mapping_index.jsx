import React from 'react';
import TheMap from './map'
import MapForm from './mapping_form'


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
        <ul>
        </ul>
        <TheMap mappings={this.props.mappings}/>
        {/* <Mapform /> */}
      </div>
    )
  }
}

export default MappingRoutes