require 'sinatra'
require 'sinatra/reloader'
require 'tilt/erb'

get '/' do
  erb :index
end

# Coin toss
get '/coin_toss' do

end

# Dice roll
get '/dice_roll' do

end

# Magic 8 ball
post '/magic8ball/:question' do
  @magic8ball = params[:question]
erb :magic8ball

end
