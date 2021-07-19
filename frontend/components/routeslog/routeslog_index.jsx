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
      <ul>
        {
          this.props.routeslogs.map(routelog => 
            <li key={routelog.id}> 
              {routelog.route_title},{" "}
              {routelog.description},{" "}
              {routelog.distance}
              <div onClick={() => this.props.deleteRouteLog(routelog.id)}>Delete</div>
              <Link to={`/routelog/${routelog.id}/edit`} >Edit</Link>
            </li>)
        }
      </ul>
    </div>
  )}
}

export default TheRoutesLog