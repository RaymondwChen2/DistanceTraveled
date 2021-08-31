import React from 'react';
import { connect } from 'react-redux';
import RouteslogShow from './routeslog_show';
import { fetchRoutelog } from "../../actions/routeslog_actions";

const mSTP = (state, ownProps) => {
    return {
        route: state.routeslog[ownProps.match.params.id]
    };
};


const mDTP = dispatch => {
    return {
        fetchRoutelog: routeId => dispatch(fetchRoutelog(routeId)),
    }
}


export default connect(mSTP, mDTP)(RouteslogShow);