class Api::PlacesController < ApplicationController

  def index
    @places = Place.all
    render json: @places
  end

  def show
    @place = Place.find(params[:id])

    render :json => @place.to_json( :include => :open_times )

  end

end
