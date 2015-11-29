class CreateOpenTimes < ActiveRecord::Migration
  def change
    create_table :open_times do |t|
      t.string :weekday
      t.time :open_time
      t.time :close_time
      t.integer :place_id

      t.timestamps null: false
    end
  end
end
