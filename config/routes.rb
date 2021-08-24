Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    get '/users/random', to: 'users#random', as: 'random'
    post 'users/search', to: 'users#search', as: 'search'

    resources :users, only: [:create, :show, :index] do
      resources :routeslog, only: [:index]
      resources :friends, only: [:index]
    end

    resources :routeslog, only: [:show, :create, :destroy, :update]
    resources :friends, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
