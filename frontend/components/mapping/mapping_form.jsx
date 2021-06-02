import React from 'react'
import { ProtectedRoute } from '../../utils/route_util'

class MapForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: "",
      waypoints: {location}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
  }

  updateTitle(e){
    this.setState({title: e.target.value})
  }

  handleSubmit(){
    e.preventDefault();

    this.setState({
      
    })

  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Routes Ran</h1>
        <label>Title:
        <input type="text" value={this.state.title} onChange={this.updateTitle}/>
        </label>
        <input type="submit" value='Add waypoints'/>
      </form>
    )
  }
}

export default MapForm;