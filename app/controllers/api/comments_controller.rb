require 'byebug'
class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.where(routeslog_id: params[:routeslog_id])
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.commenter_id = current_user.id
        if @comment.save
            render :show
        else
        render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        @user = current_user

        if comment
            if @user.id == comment.commenter_id
                comment.destroy
            else
                render json: ['You can only delete your own comments'], status: 422
            end
        else
            render json: ['Comment doesn\'t exist'], status: 404
        end
    end

    def update
    @comment = Comment.find_by(id: params[:id])

        if @comment
            if @comment.update(comment_params)
                render :show
            else
                render json: @comment.errors.full_messages, status: 422
            end
        else
            render json: ['Comment could not be found'], status: 404
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:routeslog_id, :commenter_id, :body)
    end
end
