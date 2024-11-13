require 'rails_helper'

RSpec.describe BuildingLocationsController, type: :controller do
  let(:building_location)  { create(:building_location) }
  let(:valid_attributes)   { { location_name: "New Location", address: "123 Test Street", latitude: 40.7128, longitude: -74.0060 } }
  let(:invalid_attributes) { { location_name: "", address: "", latitude: nil, longitude: nil } }


  describe "GET #new" do
    before do
      get :new
    end
    
    it "renders the new template" do      
      expect(assigns(:building_location)).to be_a_new(BuildingLocation)
      expect(response).to render_template(partial: "building_locations/_modal")
    end
  end

  describe "GET #edit" do
    before do
      get :edit, params: { id: building_location.id }
    end

    it "renders the new template" do   
      expect(assigns(:building_location)).to eq(building_location)
      expect(response).to render_template(partial: "building_locations/_modal")
    end
  end

  describe "POST #create" do
    context "with valid attributes" do
      before do
        post :create, params: { building_location: valid_attributes }
      end
      
      it "creates a new building location and renders the turbo stream update" do
        expect(BuildingLocation.count).to eq(1)
        expect(response.body).to include('<turbo-stream action="replace" target="location">')
      end
    end

    context "with invalid attributes" do
      before do
        post :create, params: { building_location: invalid_attributes }
      end
      
      it "does not create a new building location and renders the form with errors" do
        expect(BuildingLocation.count).to eq(0)
        expect(response).to render_template(partial: "building_locations/_modal")
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe "PATCH #update" do
    context "with valid attributes" do
      before do
        patch :update, params: { id: building_location.id, building_location: valid_attributes }
      end

      it "creates a new building location and renders the turbo stream update" do
        expect(response.body).to include('<turbo-stream action="replace" target="location">')
      end
    end

    context "with invalid attributes" do
      before do
        patch :update, params: { id: building_location.id, building_location: invalid_attributes }
      end

      it "does not create a new building location and renders the form with errors" do
        expect(response).to render_template(partial: "building_locations/_modal")
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end