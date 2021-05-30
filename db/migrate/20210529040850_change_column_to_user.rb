class ChangeColumnToUser < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :name, :string, null: false, unique: true
  end
end
