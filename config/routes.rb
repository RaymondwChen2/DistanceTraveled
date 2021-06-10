Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :routeslog, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :routeslog, except: [:index] do
      resources :mappings, only: [:index, :show]
    end

    resources :mappings, only: [:create]
  end
  root to: 'static_pages#root'
end
