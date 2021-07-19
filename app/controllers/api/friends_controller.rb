class Api::FriendsController < ApplicationController
  def index
  end

  def create
  end

  def destroy
  end

  def friend_params
    params.require(:friend).permit(:user_id, :friend_id)
  end

end
