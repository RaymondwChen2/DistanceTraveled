class Chang1 < ActiveRecord::Migration[5.2]
  def change
    rename_table :routeslog, :routeslogs
  end
end
