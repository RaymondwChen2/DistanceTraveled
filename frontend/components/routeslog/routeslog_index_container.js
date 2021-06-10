import {connect} from 'react-redux'
import TheRoutesLog from './routeslog_index'
import { fetchRoutesLogs } from "../../actions/routeslog"

const mSTP = state => {
  debugger
  return {
    routeslog: state.routeslog
  }
}

const mDTP = dispatch => {
  debugger
  return{
    fetchRoutesLogs: (userId) => dispatch(fetchRoutesLogs(userId))
  }
}

export default connect(mSTP, mDTP)(TheRoutesLog);