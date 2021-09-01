class Comment < ApplicationRecord
    validates :commenter_id, :routeslog_id, :body, presence: true

    belongs_to :user,
        foreign_key: :commenter_id,
        class_name: :User

    belongs_to :route,
        foreign_key: :routeslog_id,
        class_name: :Routeslog
end
