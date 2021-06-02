import React from 'react'
import MarkerManager from '../../utils/marker_manager'


class TheMap extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      waypoints: "",
      title: "",
      description: "",
      distance: ""
    }
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.79916, lng: -122.40132 }, 
      zoom: 17,
      title: 'Hello World'
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidUpdate(){
    this.MarkerManager.updateMarkers()
    console.log(this.MarkerManager.waypts)
  }

  handleSubmit(e){
    e.preventDefault();

    this.setState({
      waypoints: this.MarkerManager.waypts,
      // distance: this.MarkerManager.calculateAndDisplayRoute().route.legs.distance.text
    })
  }
  updateTitle(e){
    this.setState({title: e.target.value})
  }

  updateDescription(e){
    this.setState({description: e.target.value})
  }

  updateWaypoints(e){
    this.setState({waypoints: this.MarkerManager.waypts})
    // console.log(this.state.waypoints)
  }

  render(){
    return (
      <div className='map-container' >
        <div>
          <input type="button" onClick={()=> this.MarkerManager.undoMarker()} value='Undo'/>
        </div>
        <div id='map' ref={ map => this.mapNode = map}></div>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input type="text" value={this.state.title} onChange={this.updateTitle}/>
          </label>
          <label>Description:
            <textarea value={this.state.description} onChange={this.updateDescription}/>
          </label>
          <label>Route:
            <input type="text" value={this.state.waypoints} onChange={this.updateWaypoints}/>
          </label>
          <label>Distance:
            
          </label>
          <input type="submit" value="Create Route" />
        </form>
        <div id='directions-panel' ></div>
      </div>
    )
  }
}
export default TheMap