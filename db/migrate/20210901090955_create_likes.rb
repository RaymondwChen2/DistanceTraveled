class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.boolean :done, null: false, default: false
      t.integer :routeslog_id, null: false
      t.timestamps
    end

    add_index :likes, :user_id
    add_index :likes, :routeslog_id
  end
end
