class Api::MappingsController < ApplicationController
  # before_action :require_login, only: [:create]

  def index
    @routeslog = Routeslog.find(params[:routeslog_id])
    render json: @routeslog.mappings
  end

  def create
    @mapping = Mapping.new(params.require(:map).permit(:latitude, :longitude, :route_id))
    if @mapping.save
      render :show
    else
      render json: @mapping.errors.full_messages, status: 422
    end
  end
end
