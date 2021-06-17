class DropMappings < ActiveRecord::Migration[5.2]
  def change
    drop_table :mappings
  end
end
