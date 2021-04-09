class CreateMappings < ActiveRecord::Migration[5.2]
  def change
    create_table :mappings do |t|
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :route_id, null: false
      t.timestamps
    end
  end
end
