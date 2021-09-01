class Addon6 < ActiveRecord::Migration[5.2]
  def change

    remove_column :comments, :body

    add_column :comments, :body, :string
  end
end
