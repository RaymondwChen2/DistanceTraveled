json.set! @like.id do
    json.extract! @like, :id, :liker_id, :routeslog_id, :done
end