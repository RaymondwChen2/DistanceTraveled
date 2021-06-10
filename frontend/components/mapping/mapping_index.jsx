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
        <ul>
          <div>gaergaerherheeraher</div>
        </ul>
        <div className='css-map'>
        <TheMap mappings={this.props.mappings}/>
        </div>
      </div>
    )
  }
}

export default MappingRoutes