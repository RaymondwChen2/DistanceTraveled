class Mapping < ApplicationRecord

  validates :latitude, :longitude, :route_id, presence: true

  belongs_to :route,
    foreign_key: :route_id,
    class_name: :Routeslog


end
