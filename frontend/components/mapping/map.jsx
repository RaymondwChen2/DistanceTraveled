import React from 'react'
import MarkerManager from '../../utils/marker_manager'
import {Link, Redirect} from 'react-router-dom'

class TheMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      waypoints: [],
      route_title: "",
      description: "",
      distance: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
  }
  
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.79916, lng: -122.40132 }, 
      zoom: 17,
      title: 'Hello World',
      clickableIcons: false
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers()
  }

  
  handleSubmit(e){
    e.preventDefault();
    this.props.createRouteLog({
      waypoints : JSON.stringify(this.MarkerManager.waypts), route_title: this.state.route_title, description : this.state.description, distance : this.MarkerManager.distance
    }).then(this.props.history.push('/'))
    
  }

  updateTitle(e){
    this.setState({route_title: e.target.value})

  }

  updateDescription(e){
    this.setState({description: e.target.value})
  }


  render(){
    return (
      <div className='map-container'>
        <div>
          <form onSubmit={this.handleSubmit} className='map-form' >
            <label>Title:
              <br/>
              <input type="text" value={this.state.route_title} onChange={this.updateTitle}/>
            </label>
            <label>Description:
              <br/>
              <textarea value={this.state.description} onChange={this.updateDescription}/>
            </label>
            <label id='directions-panel'>Distance: </label>
            <input type="submit" value="Save Route" />
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
export default TheMap