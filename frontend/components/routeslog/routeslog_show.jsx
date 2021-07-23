import React from 'react';


class RouteslogShow extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    debugger
    if (!this.props.route){
      this.props.fetchRoutelog(this.props.match.params.id)
    }
  }

  render(){
    if(!this.props.route){
      return null
    }
    return (
      <div>
        <div>{this.props.route.description}</div>
        route show
      </div>
    )
  }

}

export default RouteslogShow