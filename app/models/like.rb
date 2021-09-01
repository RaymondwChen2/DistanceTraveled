class Like < ApplicationRecord
    validates :done, inclusion: { in: [true, false]}
    validates :liker_id, presence: true
    validates :routeslog_id, presence: true

    belongs_to :user,
    foreign_key: :liker_id,
    class_name: :User

    belongs_to :routes,
    foreign_key: :routeslog_id,
    class_name: :Routeslog
end
