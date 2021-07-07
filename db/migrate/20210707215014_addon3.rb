class Addon3 < ActiveRecord::Migration[5.2]
  def change
    change_column :routeslogs, :distance, :string
  end
end
