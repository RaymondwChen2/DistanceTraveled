import React from 'react';
import MarkerManager from '../../utils/marker_manager';
import TheMap from '../mapping/map';


class RouteslogEdit extends React.Component {
  constructor(props){
    super(props)

    this.state = this.props.route
  }
  componentDidMount(){
    const mapOptions = {
      center: { lat: 37.79916, lng: -122.40132 }, 
      zoom: 17,
      title: 'Hello World',
      clickableIcons: false

    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers()

    
    if (!this.props.route){
      this.props.fetchRoutelog(this.props.match.params.id)
    }
  }
  

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
            <input type="text" />
          </label>
          <label>Description:
            <br/>
            <textarea />
          </label>
          <label id='directions-panel'>Distance: </label>
          <input type="submit" value="Save Route" />
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