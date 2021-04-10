
@mappings.each do |mapping|
  json.set! mapping.id do 
    json.extract! mapping, :latitude, :longitude, :route_id
  end
end