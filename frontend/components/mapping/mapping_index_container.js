import {connect} from 'react-redux'
import MappingRoutes from './mapping_index'
import { fetchRoutes, createRoute } from '../../actions/mapping'

const mSTP = state => {
  return {
    mappings: Object.values(state.entities.mappings)
  }
  return {}
};

const mDTP = dispatch => ({
  fetchRoutes: () => dispatch(fetchRoutes()),
  createRoute: route => dispatch(createRoute(route))
})

export default connect(mSTP, mDTP)(MappingRoutes)