class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routeslog do |t|
      t.string :route_title, null: false
      t.integer :distance, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
