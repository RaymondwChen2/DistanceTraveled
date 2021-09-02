import React from 'react';
import {Link, Redirect} from 'react-router-dom';


class TheRoutesLog extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchRoutesLogs(this.props.userId).then(<Redirect to='/dashboard'/>);
  }
  
  
  render(){
  return(
    <div className='route-container'>
      <div className="route-head">
        <h1>Routes</h1>
        <div className='dashboard-head'>
          <Link className='dashlink' to='/create_route'>Create Route</Link>
          <Link className='dashlink' to={"/dashboard/friends"}>Friend list</Link>
        </div>
      </div>
        <div className='route-placement'>
          <h2>Title</h2>
          <h2>Description</h2>
          <h2>Distance</h2>
          <h2>Options</h2>
        </div>
      <ul>
        {
          this.props.routeslogs.map(routelog => 
            <li className='route-placement' key={routelog.id}> 
              <div>{routelog.route_title}</div>
              <div>{routelog.description}</div>
              <div>{routelog.distance}</div>
              <div>
                <Link to={`/routeslog/${routelog.id}/edit`}>View/Edit</Link> 
                <button className='route-delete' onClick={() => {this.props.deleteRouteLog(routelog.id)}}>Delete</button>
              </div>
            </li>)
        }
      </ul>
    </div>
  )}
}

export default TheRoutesLog