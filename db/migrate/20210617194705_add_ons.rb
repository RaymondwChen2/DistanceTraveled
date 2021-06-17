class AddOns < ActiveRecord::Migration[5.2]
  def change 
    add_column :routeslogs, :waypoints, :string
    add_index :routeslogs, :route_title
    add_index :routeslogs, :user_id
    remove_column :routeslogs, :lat, :float
    remove_column :routeslogs, :lng, :float
  end
end
