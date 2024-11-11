Rails.application.routes.draw do
  resources :building_locations
  root 'building_locations#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
