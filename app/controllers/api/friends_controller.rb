class Api::FriendsController < ApplicationController
  def index
    @friends = Friend.find(params[:user_id])
    render :index
  end

  def create
    @friend = Friend.new(friend_params)
    @friend.user_id = current_user.id
    if @friend.save
      render :show
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end

  def destroy
    friend = Friend.find(params[:id])
    @user = current_user
    if @user.id === friend.user.id
      friend.destroy
      render "api/users/show"
    else
      render json: ['This isn\'t your friend!'], status: 422
  end

  def friend_params
    params.require(:friend).permit(:user_id, :friend_id)
  end

end
