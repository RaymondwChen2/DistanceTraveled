class Addon5 < ActiveRecord::Migration[5.2]
  def change

    remove_index :friends, :friend_id
    remove_index :friends, :user_id

    add_index :friends, :friend_id
    add_index :friends, :user_id
  end
end
