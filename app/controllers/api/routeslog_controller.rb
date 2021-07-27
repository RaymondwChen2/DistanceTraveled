
class Api::RouteslogController < ApplicationController

  def index
    # api_user_routeslog_index GET    /api/users/:user_id/routeslog(.:format) 
    @user = User.find(params[:user_id])
    render json: @user.routeslog
  end

  def show
    @route = Routeslog.find(params[:id])
    if @route
      render :show
    else
      render json: ['Route does not exist'], status: 404
    end
    # api_routeslog GET    /api/routeslog/:id(.:format)         
  end

  def create
    @route = Routeslog.new(route_params)
    @route.user_id = current_user.id

    if @route.save
      render :show
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def update
    @route = Routeslog.find(params[:id])
    
    if @route
      if @route.update(route_params)
        render :show
      else
        render json: @route.errors.full_messages, status: 422
      end
    else
      render json: ['Route could not be found'], status: 404
    end
  end

  def destroy
    route = Routeslog.find_by(id: params[:id])
    @user = current_user
  
    if route 
      if @user.id == route.user_id 
        route.destroy 
        # render "/api/routeslog"
        render :index
      else
        render json: ['This isn\'t your route!'], status: 422
      end
    else
      render json: ['Route doesn\'t exist'], status: 404
    end
  end

  private
  def route_params
    params.require(:routeslog).permit(:route_title, :description, :distance, :waypoints, :user_id, :id)
  end
end
