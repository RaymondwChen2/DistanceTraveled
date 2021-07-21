json.set! @route.id do
  json.extract! @route, :distance, :user_id, :description, :waypoints, :route_title
end