

export const createRoute = map => {
  return $.ajax({
    method: 'POST',
    url: '/api/mappings',
    data: { map }
  })
};
  
export const fetchRoute = () =>{
  return $.ajax({
    url: '/api/mappings'
  })
};

