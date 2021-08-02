Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :friends, only: [:index]
      resources :routeslog, only: [:index]
    end
    
    resource :session, only: [:create, :destroy]
    resources :friends, only: [:create, :destroy]
    resources :routeslog, only: [:show, :create, :destroy, :update]


  end
  root to: 'static_pages#root'
end
