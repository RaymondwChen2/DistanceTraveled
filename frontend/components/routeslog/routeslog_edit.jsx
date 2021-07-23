import React from 'react';


class RouteslogEdit extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    if (!this.props.route){
      this.props.fetchRoutelog(this.props.match.params.id)
    }
  }

  render(){
    debugger
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

export default RouteslogEdit