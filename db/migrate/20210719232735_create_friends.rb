class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.timestamps
    end
    add_index :friends, :user_id, unique: true
    add_index :friends, :friend_id, unique: true
  end
end
