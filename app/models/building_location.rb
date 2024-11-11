class BuildingLocation < ApplicationRecord
  validates :location_name, :address, presence: true
end