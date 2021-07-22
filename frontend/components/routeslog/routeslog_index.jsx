import React from 'react'
import {Link, Redirect} from 'react-router-dom'


class TheRoutesLog extends React.Component {
  constructor(props){
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    this.props.fetchRoutesLogs(this.props.userId).then(<Redirect to='/'/>)
  }

handleDelete(routelog){
  this.props.deleteRouteLog(routelog)
}


render(){
  if (this.props.routeslogs.length <= 0) return null
  return(
    <div>
      <h1>Routes</h1>
      <ul>
        {
          this.props.routeslogs.map(routelog => 
            <li key={routelog.id}> 
              {routelog.route_title},{" "}
              {routelog.description},{" "}
              {routelog.distance}
              {/* <button onClick={() => this.props.deleteRouteLog(routelog.id)}>Delete</button> */}
              <button onClick={() => { return this.props.deleteRouteLog(routelog.id).then(()=> this.props.fetchRoutesLogs(this.props.userId))}}>Delete</button>
              {/* <a href={`/routeslog/${routelog.id}/edit`} >Edit</a> */}
              <a href={`/api/routeslog/${routelog.id}`} >Edit</a>
            </li>)
        }
      </ul>
    </div>
  )}
}

export default TheRoutesLog