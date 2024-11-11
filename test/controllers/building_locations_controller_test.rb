require "test_helper"

class BuildingLocationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get building_locations_index_url
    assert_response :success
  end
end
