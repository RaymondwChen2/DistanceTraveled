import React from 'react'
import MarkerManager from '../../utils/marker_manager'

class TheMap extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.795861, lng: -122.391817 }, 
      zoom: 17,
      title: 'Hello World'
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }
  
  componentDidUpdate(){
    this.MarkerManager.updateMarkers()
  }

  render(){
    return (
      <div>
        <div>
          <input type="button" onClick={()=>`${this.MarkerManager.deleteMarkers()}`} value='Delete Markers'/>
          <input type="button" onClick={()=>`${this.MarkerManager.undoMarker()}`} value='Undo'/>
        </div>
        <div id='map' ref={ map => this.mapNode = map}></div>
      </div>
    )
  }
}
export default TheMap