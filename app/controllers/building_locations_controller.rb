class BuildingLocationsController < ApplicationController
  def index
    @building_locations = BuildingLocation.all
  end

  def new
    @building_location = BuildingLocation.new
    render partial: "modal", locals: { building_location: @building_location }
  end

  def edit
    @building_location = BuildingLocation.find(params[:id])  
    render partial: "modal", locals: { building_location: @building_location }
  end


  def create
    @building_location = BuildingLocation.new(building_location_params)
    if @building_location.save
      replace_location_stream_on_commit
    else
      render_building_location_error_response
    end
  end

  def update
    @building_location = BuildingLocation.find(params[:id])
    if @building_location.update(building_location_params)
      replace_location_stream_on_commit
    else
      render_building_location_error_response
    end
  end
  
  private

  def building_location_params
    params.require(:building_location).permit(:location_name, :address, :latitude, :longitude )
  end

  def replace_location_stream_on_commit
    render turbo_stream: turbo_stream.replace("location", partial: "building_locations/body_container", locals: { building_locations: BuildingLocation.all })
  end

  def render_building_location_error_response
    flash.now[:alert] = @building_location.errors.full_messages.join(", ")
    render partial: "modal", locals: { building_location: @building_location }, status: :unprocessable_entity
  end
end