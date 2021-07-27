import React from 'react';
import MarkerManager from '../../utils/marker_manager';
import TheMap from '../mapping/map';




class RouteslogEdit extends React.Component {
  constructor(props){
    super(props)
    
    // this.latLng = JSON.parse(this.props.route.waypoints);
    // this.directionsService = new google.maps.DirectionsService();
    // this.directionsRenderer = new google.maps.DirectionsRenderer();
    // this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this)
    // console.log(this.latLng, 'latLng')
    // this.summaryPanel = document.getElementById("directions-panel")
    
    
    this.state = {

      waypoints: this.props.route && this.props.route.waypoints.length ?  JSON.parse(this.props.route.waypoints) : [],
      route_title: this.props.route ? this.props.route.route_title : '',
      description: this.props.route ? this.props.route.description : '',
      distance: this.props.route ? this.props.route.distance : ''
    }
    
  }
  componentDidMount(){
    const mapOptions = {
      center: { lat: 37.79916, lng: -122.40132 }, 
      zoom: 17,
      title: 'Hello World',
      clickableIcons: false
      
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    
    if (!this.props.route){
      this.props.fetchRoutelog(this.props.match.params.id)
        // this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer)
    } 
    this.MarkerManager = new MarkerManager(this.map, this.state.waypoints);
    this.MarkerManager.updateMarkers()

  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.updateRouteLog({
  //     waypoints: JSON.stringify(this.MarkerManager.waypts), route_title: this.state.route_title, description: this.state.description, distance: this.MarkerManager.distance
  //   }).then(this.props.history.push('/'))

  // }


  // calculateAndDisplayRoute(directionsService, directionsRenderer) {
  //   const origin = `${this.latLng[0].location.lat}, ${this.latLng[0].location.lng}`
  //   const destination = `${this.latLng[this.latLng.length - 1].location.lat}, ${this.latLng[this.latLng.length - 1].location.lng}`
  //   // debugger
  //   directionsService.route(
  //     {
  //       origin: origin,
  //       destination: destination,
  //       waypoints: this.latLng,
  //       optimizeWaypoints: false,
  //       travelMode: google.maps.TravelMode.WALKING,
  //     },
  //     (response, status) => {
  //       if (status === "OK" && response) {
  //         directionsRenderer.setDirections(response);
  //         const route = response.routes[0];
  //         this.summaryPanel.innerHTML = "";

  //         // For each route, display summary information.
  //         for (let i = 0; i < route.legs.length; i++) {
  //           const routeSegment = i + 1;
  //           this.distance = route.legs[i].distance.text
  //           this.summaryPanel.innerHTML += 'Distance: ' + route.legs[i].distance.text + '<br>'
  //         }
  //       } else {
  //         window.alert("Directions request failed due to " + status);
  //       }
  //     }
  //   );
  // }
  
  

  render(){
    // debugger
    if(!this.props.route){
      return null
    }
    return (
      <div className='map-container'>
      <div>
        <form  className='map-form' >
          <label>Title:
            <br/>
            <input type="text" value={this.props.route.route_title}/>
          </label>
          <label>Description:
            <br/>
            <textarea value={this.props.route.description}/>
          </label>
          <label id='directions-panel' value={this.props.route.distance}>Distance: </label>
          <input type="submit" value="Update Route" />
        </form>
      </div>
      <div className='the-map-div'>
        <input type="button" onClick={()=> this.MarkerManager.undoMarker()} value='Undo'/>
          <div id='map' ref={ map => this.mapNode = map}>hello</div>
      </div>
    </div>
    )
  }

}

export default RouteslogEdit