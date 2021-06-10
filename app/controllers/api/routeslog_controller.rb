class Api::RouteslogController < ApplicationController

  def index
    # api_user_routeslog_index GET    /api/users/:user_id/routeslog(.:format) 
    @user = User.find(params[:user_id])
    render json: @user.routeslog
  end

  def show
    # api_routeslog GET    /api/routeslog/:id(.:format)         
  end

  def create
  end

  def edit
    # edit_api_routeslog GET    /api/routeslog/:id/edit(.:format) 
  end

  def update
  end

  def destroy
  end

end
