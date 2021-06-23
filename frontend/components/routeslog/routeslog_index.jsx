import React from 'react'


class TheRoutesLog extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchRoutesLogs(this.props.id)
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
            </li>)
        }
      </ul>
    </div>
  )}
}

export default TheRoutesLog