class Addon8 < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :user_id
    add_column :likes, :liker_id, :integer
    add_index :likes, :liker_id
  end
end
