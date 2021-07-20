
@routeslogs.each do |route|
  if route.length <= 0
    return null
  else
  json.set! route.id do 
    json.partial! 'route', route: route
  end
end
end