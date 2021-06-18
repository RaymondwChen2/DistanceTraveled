import React from 'react'
import { fetchRoutesLogs } from '../../actions/routeslog'



class TheRoutesLog extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchRoutesLogs(this.props.match.params.id)
  }


render(){
  if (Object.values(this.props.routeslog).length == 0){
    return null
  }
  return(
    <div>{this.props.routeslog}</div>
  )
}
}

export default TheRoutesLog