require 'rails_helper'
RSpec.describe BuildingLocation, type: :model do
  describe 'validations' do
    context "with valid attributes" do
      it "is valid" do
        building_location = BuildingLocation.new(location_name: "Test Location", address: "123 Test Street")
        expect(building_location).to be_valid
      end
    end
  
    context "with invalid attributes" do
      it "is not valid without a location_name" do
        building_location = BuildingLocation.new(location_name: nil, address: "123 Test Street")
        expect(building_location).to_not be_valid
        expect(building_location.errors[:location_name]).to include("can't be blank")
      end
  
      it "is not valid without an address" do
        building_location = BuildingLocation.new(location_name: "Test Location", address: nil)
        expect(building_location).to_not be_valid
        expect(building_location.errors[:address]).to include("can't be blank")
      end
  
      it "is not valid without both location_name and address" do
        building_location = BuildingLocation.new(location_name: nil, address: nil)
        expect(building_location).to_not be_valid
        expect(building_location.errors[:location_name]).to include("can't be blank")
        expect(building_location.errors[:address]).to include("can't be blank")
      end
    end
  end
end
  