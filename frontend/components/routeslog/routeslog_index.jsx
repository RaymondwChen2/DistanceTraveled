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
  // if (this.props.routeslogs.length <= 0) return null
  return(
    <div className='route-container'>
      <div className="route-head">
        <h1>Routes</h1>
        <Link to={"/dashboard/friends"}>friend list</Link>
      </div>
        <div className='thead'>
          <h2>Title</h2>
          <h2>Description</h2>
          <h2>Distance</h2>
          <h2>Options</h2>
        </div>
      <ul>
        {
          this.props.routeslogs.map(routelog => 
            <li className='thead' key={routelog.id}> 
              <div>{routelog.route_title}</div>
              <div>{routelog.description}</div>
              <div>{routelog.distance}</div>
              <div>
                <button className='route-delete' onClick={() => {this.props.deleteRouteLog(routelog.id)}}>Delete</button>
                <Link to={`/routeslog/${routelog.id}/edit`}>View/Edit</Link> 
              </div>
            </li>)
        }
      </ul>
    </div>
  )}
}

export default TheRoutesLog