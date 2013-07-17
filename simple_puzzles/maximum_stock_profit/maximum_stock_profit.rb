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
    open, high, low = line.strip.split(',')
    minimum = open.to_f if minimum.nil?
    minimum = open.to_f if open.to_f < minimum
    profit = open.to_f - minimum if ( open.to_f - minimum ) > profit
end

puts profit
