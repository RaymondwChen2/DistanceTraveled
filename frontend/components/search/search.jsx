import React from 'react'
import MappingRoutes from '../mapping/mapping_index'

const Search = ({mappings}) => (
  <div>
    <MappingRoutes mappings={mappings}/>
    <TheMap />
  </div>
);
debugger

export default Search