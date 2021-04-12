import React from 'react';
const MappingRoutes = props => {
    return (
      <div>
        <h1>Mappings</h1>
        <ul>
          {
            props.mappings.map(mapping => <li key={mapping.id}>
              Routes: lat:{mapping.latitude}, long:{mapping.longitude}</li>)
          }
        </ul>
      </div>
    )
  }



export default MappingRoutes