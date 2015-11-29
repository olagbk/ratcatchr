class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name
      t.string :phone
      t.string :address_line_1
      t.string :address_line_2
      t.float :latitude
      t.float :longitude

      t.timestamps null: false
    end
  end
end
