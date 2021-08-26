import {connect} from 'react-redux'
import TheMap from './map'
import { fetchRoutesLogs, createRouteLog, deleteRouteLog } from '../../actions/routeslog_actions'

const mSTP = state => {
  return {
  }

};

const mDTP = dispatch => {

  return{
    fetchRoutesLogs: (userId) => dispatch(fetchRoutesLogs(userId)),
    createRouteLog: (route) => dispatch(createRouteLog(route)),
    deleteRouteLog: (routeId) => dispatch(deleteRouteLog(routeId))
  }
}

export default connect(null, mDTP)(TheMap)