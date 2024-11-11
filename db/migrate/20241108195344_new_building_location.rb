class NewBuildingLocation < ActiveRecord::Migration[6.1]
  def change
    create_table :building_locations do |t|
      t.string :location_name, null: false        
      t.string :address, null: false                                 
      t.decimal :latitude, precision: 10, scale: 6
      t.decimal :longitude, precision: 10, scale: 6                       
      
      t.timestamps
    end
  end
end
