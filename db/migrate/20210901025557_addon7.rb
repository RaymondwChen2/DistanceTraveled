class Addon7 < ActiveRecord::Migration[5.2]
  def change

    remove_column :comments, :route_id
    add_column :comments, :routeslog_id, :integer
    add_index :comments, :routeslog_id
  end
end
