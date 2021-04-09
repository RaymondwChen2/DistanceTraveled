# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Mapping.delete_all
Routeslog.delete_all

########### USERS #############
demo = {username: 'Guest', password: '123456', email: 'guest@guest.com'}
user1 = {username: 'raymond', password: '123456', email: 'raymond@raymond.com'}
user2 = {username: 'elsa', password: '123456', email: 'elsa@elsa.com'}

demo = User.create!(demo)
user1 = User.create!(user1)
user2 = User.create!(user2)

########## ROUTE LOG ############
routeslog1 = {route_title: 'Around the lake', distance: 3, user_id: user1.id}
routeslog2 = {route_title: 'Ferry Builing run', distance: 2, user_id: user2.id}

routeslog1 = Routeslog.create!(routeslog1)
routeslog2 = Routeslog.create!(routeslog2)


########### MAPPING ROUTES #############

mapping1 = {latitude: 37.803134, longitude: -122.258079, route_id: routeslog1.id}
mapping2 = {latitude: 37.795861, longitude: -122.391817, route_id: routeslog2.id}

mapping1 = Mapping.create!(mapping1)
mapping2 = Mapping.create!(mapping2)







