if (ARGV[0].nil? or ARGV[1].nil?)
    puts "Please provide a binary number and a guess"
    exit()
end

def num_matches(number, guess)
    matches = 0
    number.chars.each_with_index do | c, index |
        matches = matches + 1 if c == guess[index]
    end
    matches
end

number = ARGV[0].dup
guess = ARGV[1].dup
steps = 0
matches = num_matches(number, guess)
while steps < number.length
    break if matches == number.length
    guess[steps] = guess[steps] == '0' ? '1':'0'
    current_matches = num_matches(number, guess)
    if matches > current_matches
        guess[steps] = guess[steps] == 0 ? '1':'0'
    else
        matches = current_matches
    end
    steps = steps + 1
end 

puts steps.to_s
