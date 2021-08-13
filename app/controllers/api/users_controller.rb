class Api::UsersController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    render :index
  end


  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
