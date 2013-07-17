file_path = ARGV[0]
if not file_path
    puts "You need to provide the path to the dictionary"
    exit
end

begin
    dictionary = File.open(file_path)
rescue Exception => e
    puts "could not open the dictionary. " + e.message
    exit
end

anagrams = Hash.new
anagrams_number = 0
dictionary_size = 0
dictionary.each do |word|
    key = word[0..-2].chars.sort.join('').downcase
    anagrams_number += 1 if anagrams.has_key?( key )
    anagrams[key] = 0 unless anagrams.has_key?( key )
    dictionary_size += 1
end
puts "Dictionary size: " + dictionary_size.to_s
puts "Number of anagrams inside the dictionary: " + anagrams_number.to_s
