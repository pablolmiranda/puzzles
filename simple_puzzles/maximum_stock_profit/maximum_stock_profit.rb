require 'pry'

file_name = ARGV[0]
if not File.exists?(file_name)
    puts "You should give a stock price sample with daily high, low and opening"
    exit
end

stock_file = File.open(file_name)
minimum = nil 
profit = 0

stock_file.each do | line |
    high, low, opening = line.strip.split(',')
    minimum = opening.to_f if minimum.nil?
    minimum = opening.to_f if opening.to_f < minimum
    profit = opening.to_f - minimum if ( opening.to_f - minimum ) > profit
end

puts profit
