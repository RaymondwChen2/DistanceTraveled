# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
demo = {username: 'Guest', password: '123456', email: 'guest@guest.com'}
user1 = {username: 'raymond', password: '123456', email: 'raymond@raymond.com'}
user2 = {username: 'elsa', password: '123456', email: 'elsa@elsa.com'}


demo = User.create!(demo)
user1 = User.create!(user1)
user2 = User.create!(user2)