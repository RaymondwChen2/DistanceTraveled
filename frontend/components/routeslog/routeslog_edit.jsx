import React from 'react';
import MarkerManager from '../../utils/marker_manager';
import TheMap from '../mapping/map';




class RouteslogEdit extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      waypoints: this.props.route && this.props.route.waypoints.length ?  JSON.parse(this.props.route.waypoints) : [],
      route_title: this.props.route ? this.props.route.route_title : '',
      description: this.props.route ? this.props.route.description : '',
      distance: this.props.route ? this.props.route.distance : ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    
  }
  componentDidMount(){
    const mapOptions = {
      center: { lat: 37.79916, lng: -122.40132 }, 
      zoom: 17,
      title: 'Hello World',
      clickableIcons: false
      
    };
    
    if (!this.props.route){
      this.props.fetchRoutelog(this.props.match.params.id)
      // this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer)
    } 
    console.log(this.props)
    console.log(this.mapNode)
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.state.waypoints);
  
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateRouteLog({
                              waypoints: JSON.stringify(this.MarkerManager.waypts),
                              route_title: this.state.route_title, 
                              description: this.state.description, 
                              distance: this.MarkerManager.distance,
                              id: this.props.route.id
    }).then(this.props.history.push('/'))
  }

  updateDescription(e) {
    this.setState({ description: e.target.value })
  }

  updateTitle(e) {
    this.setState({ route_title: e.target.value })
  }

  
  render(){
    // debugger
    if(!this.props.route){
      return null
    }
    return (
    <div className='map-container'>
      <div>
        <form  className='map-form' onSubmit={this.handleSubmit}>
          <label>Title:
            <br/>
              <input type="text" value={this.state.route_title} onChange={this.updateTitle}/>
          </label>
          <label>Description:
            <br/>
              <textarea value={this.state.description} onChange={this.updateDescription}/>
          </label>
          <label id='directions-panel' value={this.state.distance}>Distance: </label>
          <input type="submit" value="Update Route" />
        </form>
      </div>
      <div className='the-map-div'>
        <input type="button" onClick={()=> this.MarkerManager.undoMarker()} value='Undo'/>
          <div id='map' ref={ map => this.mapNode = map}></div>
      </div>
    </div>
    )
  }

}

export default RouteslogEdit