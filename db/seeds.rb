# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Routeslog.delete_all
Friend.delete_all

# ########### USERS #############
demo = {username: 'Guest', password: '123456', email: 'guest@guest.com', first_name: 'Guess', last_name: 'Guess'}
user1 = {username: 'raymond', password: '123456', email: 'raymond@raymond.com', first_name: 'Raymond', last_name: 'Chen'}
user2 = {username: 'elsa', password: '123456', email: 'elsa@elsa.com',  first_name: 'Elsa', last_name: 'Wong'}

demo = User.create!(demo)
user1 = User.create!(user1)
user2 = User.create!(user2)

######## Friends ##############

friend1 = { user_id: user1.id, friend_id: demo.id }
friend2 = { user_id: demo.id, friend_id: user2.id }
friend3 = { user_id: user2.id, friend_id: demo.id }

Friend.create!(friend1)
Friend.create!(friend2)
Friend.create!(friend3)






