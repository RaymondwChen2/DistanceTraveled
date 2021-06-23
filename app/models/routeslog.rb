class Routeslog < ApplicationRecord
  validates :route_title, :distance, :description, :distance, presence: true
  # :waypoints

  has_many :mappings,
    foreign_key: :route_id,
    class_name: :Mapping

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
