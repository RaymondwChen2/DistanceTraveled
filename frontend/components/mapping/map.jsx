import React from 'react';
import MarkerManager from '../../utils/marker_manager';
// import {Link, Redirect} from 'react-router-dom'
import { AiOutlineUndo } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';
import { FaExchangeAlt } from 'react-icons/fa';
import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight} from 'react-icons/ai';



class TheMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      waypoints: [],
      route_title: "",
      description: "",
      distance: "",
      sidebarDisplay: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.closeForm = this.closeForm.bind(this);
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
  }

  
  handleSubmit(e){
    e.preventDefault();
    this.props.createRouteLog({
      waypoints : JSON.stringify(this.MarkerManager.waypts), route_title: this.state.route_title, description : this.state.description, distance : this.MarkerManager.distance
    }).then(this.props.history.push('/dashboard'));
    
  }

  updateTitle(e){
    this.setState({route_title: e.target.value});
  }

  updateDescription(e){
    this.setState({description: e.target.value});
  }

  closeForm(e){
    let formSidebar = document.getElementById("map-form");
    let sideBar = document.getElementsByClassName('side-bar-button');

    if(formSidebar.style.display === 'none'){
      this.setState({sidebarDisplay: true});
      formSidebar.style.display = 'flex';
    } else {
      this.setState({ sidebarDisplay: false });
      formSidebar.style.display = 'none';

    }
  }


  render(){
    return (
      <div className='map-container'>
        <div>
          <form onSubmit={this.handleSubmit} id='map-form' >
            <label>Title:
              <br/>
              <input type="text" className='route-title' value={this.state.route_title} onChange={this.updateTitle}/>
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
          <div className='route-tools'>
            <div className='tool-container'>
              <div className='tools-head'>Tools</div>
                <button className='undo-button' onClick={() => this.MarkerManager.undoMarker()}> <AiOutlineUndo /> Undo</button>
                <button className='delete-button' onClick={() => this.MarkerManager.clearAll()}><MdClear/> Clear</button>
                <button className='reverse-button' onClick={() => this.MarkerManager.reverseRoute()}><FaExchangeAlt /> Reverse</button>
              </div>
            </div>
          <div className='side-bar-button' onClick={() => this.closeForm()}>{this.state.sidebarDisplay === true ? <AiFillCaretLeft /> : <AiFillCaretRight />}</div>
            <div id='map' ref={ map => this.mapNode = map}></div>
        </div>
      </div>
    )
  }
}
export default TheMap