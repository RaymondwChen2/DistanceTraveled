import React from 'react';
import RouteslogEdit from './routeslog_edit';
import { connect } from 'react-redux'
import { fetchRoutelog, updateRouteLog } from '../../actions/routeslog';

const mSTP = (state, ownProps) => {
  return {
    route: state.routeslog[ownProps.match.params.id]
  }

};

const mDTP = dispatch => ({
  fetchRoutelog: routeId => dispatch(fetchRoutelog(routeId)),
  updateRouteLog: route => dispatch(updateRouteLog(route))
})

export default connect(mSTP, mDTP)(RouteslogEdit)