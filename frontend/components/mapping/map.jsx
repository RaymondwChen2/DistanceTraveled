import React from 'react'

class TheMap extends React.Component {

  componentDidMount() {

    const mapOptions = {
      center: { lat: 37.795861, lng: -122.391817 }, 
      zoom: 17
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }
  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map}>
      </div>
    )
  }
}
export default TheMap