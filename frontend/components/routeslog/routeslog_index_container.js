import {connect} from 'react-redux'
import TheRoutesLog from './routeslog_index'
import { fetchRoutesLogs } from "../../actions/routeslog"
import { updateRouteLog } from '../../utils/routeslog'

const mSTP = state => {
  return {
    id: state.session.id,
    routeslogs: Object.values(state.routeslog)
  }
}

const mDTP = dispatch => {
  return{
    fetchRoutesLogs: (userId) => dispatch(fetchRoutesLogs(userId)),
    updateRouteLog: (route) => dispatch(updateRouteLog(route)),
    deleteRouteLog: (routeId) => dispatch(deleteRouteLog(routeId))
  }
}

export default connect(mSTP, mDTP)(TheRoutesLog);