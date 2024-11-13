FactoryBot.define do
    factory :building_location do
      location_name { "Sample Location" }
      address { "123 Main St" }
      latitude { 40.7128 }
      longitude { -74.0060 }
    end
  end