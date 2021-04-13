import React from 'react'
import MarkerManager from '../../utils/marker_manager'

class TheMap extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {

    // const mapOptions = {
    //   center: { lat: 37.795861, lng: -122.391817 }, 
    //   zoom: 17,
    //   title: 'Hello World'
    // };
    this.map = new google.maps.Map(this.mapNode);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.mappings)
    this.MarkerManager.initMap()

    
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers()

  }

  render(){
    return (
      <div id='map' ref={ map => this.mapNode = map}>
        Map
      </div>
    )
  }
}
export default TheMap