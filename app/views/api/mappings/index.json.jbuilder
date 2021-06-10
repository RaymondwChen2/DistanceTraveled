
@mappings.each do |mapping|
  json.set! mapping.id do 
    json.partial! 'mapping', mapping: mapping
  end
end