@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :commenter_id, :routeslog_id, :body, :created_at
    end
end