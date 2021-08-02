import React from 'react'
import {Link, Redirect} from 'react-router-dom'


class TheRoutesLog extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.fetchRoutesLogs(this.props.userId).then(<Redirect to='/'/>)
  }
  
  
  render(){
  if (this.props.routeslogs.length <= 0) return null
  return(
    <div>
      <h1>Routes</h1>
      <Link to={"/dashbaord/friends"}>friend list</Link>
      <ul>
        {
          this.props.routeslogs.map(routelog => 
            <li key={routelog.id}> 
              {routelog.route_title},{" "}
              {routelog.description},{" "}
              {routelog.distance}
              <button onClick={() => {this.props.deleteRouteLog(routelog.id)}}>Delete</button>
              <Link to={`/routeslog/${routelog.id}/edit`}>Edit1</Link> 
            </li>)
        }
      </ul>
    </div>
  )}
}

export default TheRoutesLog