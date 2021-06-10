import React from 'react'
import { fetchRoutesLogs } from '../../actions/routeslog'



class TheRoutesLog extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    debugger
    this.props.fetchRoutesLogs(this.props.match.params.id)
  }


render(){
  if (Object.values(this.props.routeslog).length == 0){
    return null
  }
  debugger
  return(
    <div>{this.props.routeslog[0].route_title}</div>
  )
}
}

export default TheRoutesLog