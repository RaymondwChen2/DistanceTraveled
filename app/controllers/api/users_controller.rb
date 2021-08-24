class Api::UsersController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: ['User could not be found', status 404]
    end
  end

  def random
    @users = User.first(10)
    render :random
  end

  def search
    @users = User.where("first_name ILIKE ? Or last_name ILIKE ?", "%#{params[:query]}%", "%#{params[:query]}%")
    render :random
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
    params.require(:user).permit(:username, :password, :email, :first_name, :last_name)
  end
end
