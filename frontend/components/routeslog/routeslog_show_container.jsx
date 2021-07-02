import React from 'react';
import RouteslogShow from './routeslog_show';
import { connect } from 'react-redux'
import { fetchRoutelog } from '../../actions/routeslog';

const mSTP = (state, ownProps) => {
  return {
    // gives id of route
    route: state.routeslog[ownProps.match.param.id]
  }

};

const mDTP = dispatch => ({
  fetchRoutelog: routeId => dispatch(fetchRoutelog(routeId)),
})

export default connect(mSTP, mDTP)(RouteslogShow)