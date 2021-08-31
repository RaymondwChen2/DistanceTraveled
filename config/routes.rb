Rails.application.routes.draw do
  
  namespace :api, defaults: { format: :json } do
    get '/users/random', to: 'users#random', as: 'random'
    post '/users/search', to: 'users#search', as: 'search'
    
    resources :users, only: [:create, :show, :index] do
      resources :routeslog, only: [:index]
      resources :friends, only: [:index]
    end

    
    resources :routeslog, only: [:show, :create, :destroy, :update] do
      resources :comments, only: [:index]
    end
    
    
    resource :session, only: [:create, :destroy]
    resources :friends, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy, :update]
    

  end
  root to: "static_pages#root"
end
