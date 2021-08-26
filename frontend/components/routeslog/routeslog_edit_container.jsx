import React from 'react';
import RouteslogEdit from './routeslog_edit';
import { connect } from 'react-redux'
import { fetchRoutelog, updateRouteLog } from '../../actions/routeslog_actions';

const mSTP = (state, ownProps) => {
  // console.log(state.routeslog[ownProps.match.params.id])
  return {
    route: state.routeslog[ownProps.match.params.id]
  }

};

const mDTP = dispatch => ({
  fetchRoutelog: routeId => dispatch(fetchRoutelog(routeId)),
  updateRouteLog: route => dispatch(updateRouteLog(route))
})

export default connect(mSTP, mDTP)(RouteslogEdit)