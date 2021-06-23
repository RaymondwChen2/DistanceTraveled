class Addon2 < ActiveRecord::Migration[5.2]
  def change
    change_column :routeslogs, :distance, :float
  end
end
