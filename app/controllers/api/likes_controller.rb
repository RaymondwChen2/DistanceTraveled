class Api::LikesController < ApplicationController
    def index
        @likes = Like.where(routeslog_id: params[:routeslog_id])
        render :index
    end

    def create
        @like = Like.new(like_params)
        @like.liker_id = current_user.id

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        like = Like.find_by(id: params[:id])
        @user = current_user
        if like
            if @user.id == like.liker_id
                like.destroy
            else
                render json: ['You haven\'t like this route yet' ], status: 422
            end
        end
    end

    private

    def like_params
        params.require(:like).permit(:routeslog_id, :liker_id, :done)
    end
end
