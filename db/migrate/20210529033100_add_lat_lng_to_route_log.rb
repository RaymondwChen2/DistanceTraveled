class AddLatLngToRouteLog < ActiveRecord::Migration[5.2]
  def change
    add_column :routeslogs, :lat, :float
    add_column :routeslogs, :lng, :float
    add_column :routeslogs, :description, :string
  end
end
