require 'rails_helper'

RSpec.describe BuildingLocationsController, type: :controller do
  let(:building_location) { create(:building_location) }
  let(:valid_attributes) { { location_name: "New Location", address: "123 Test Street", latitude: 40.7128, longitude: -74.0060 } }
  let(:invalid_attributes) { { location_name: "", address: "", latitude: nil, longitude: nil } }


  describe "GET #new" do
    it "renders the new template" do
      get :new
      expect(assigns(:building_location)).to be_a_new(BuildingLocation)
      expect(response).to render_template(partial: "building_locations/_modal")
    end
  end

  describe "GET #edit" do
    it "renders the new template" do
      get :edit, params: { id: building_location.id }
      expect(assigns(:building_location)).to eq(building_location)
      expect(response).to render_template(partial: "building_locations/_modal")
    end
  end

  describe "POST #create" do
    context "with valid attributes" do
      it "creates a new building location and renders the turbo stream update" do
        expect {
          post :create, params: { building_location: valid_attributes }
        }.to change(BuildingLocation, :count).by(1)
        expect(response.body).to include('<turbo-stream action="replace" target="location">')
      end
    end

    context "with invalid attributes" do
      it "does not create a new building location and renders the form with errors" do
        expect {
          post :create, params: { building_location: invalid_attributes }
        }.to change(BuildingLocation, :count).by(0)
        expect(response.body).to include('<turbo-stream action="replace" target="modal">')
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe "PATCH #update" do
    context "with valid attributes" do
      it "creates a new building location and renders the turbo stream update" do
        patch :update, params: { id: building_location.id, building_location: valid_attributes }
        expect(response.body).to include('<turbo-stream action="replace" target="location">')
      end
    end

    context "with invalid attributes" do
      it "does not create a new building location and renders the form with errors" do
        patch :update, params: { id: building_location.id, building_location: invalid_attributes }
        expect(response.body).to include('<turbo-stream action="replace" target="modal">')
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end