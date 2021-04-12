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
        <ul>
          {
            this.props.mappings.map((mapping, i) => <li key={i}>
              Routes: lat:{mapping.latitude}, long:{mapping.longitude}</li>)
          }
        </ul>
        <TheMap/>
      </div>
    )
  }
}

export default MappingRoutes